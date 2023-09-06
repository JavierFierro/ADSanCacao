import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { Permiso, Tecnico } from 'src/app/interfaces/tecnico';
import { agricultorMapper } from 'src/environments/mappers/agricultor';
import { AgricultorService } from '../agriculor/agricultor.service';
import { TecnicoService } from '../tecnico/tecnico.service';

@Injectable({
  providedIn: 'root'
})
export class ImportacionAgricultorService {

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService
  ) {
  }

  async importAllFormularios(file: any, header: boolean, delimeter: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
      .subscribe(async (result: any) => {
        try {
          const docLines = result as Array<string[]>;
          for (let index = 2; index < docLines.length; index++) {
            await this.importFormulario(docLines[1], docLines[index]);
          }
          resolve();
        } catch(error) {
          console.log(error);
          reject(error);
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
        reject(error);
      });
    });
  }

  private async importFormulario(headers: any[], values: any[]): Promise<void> {
    try {
      const agricultor = await this.getAgricultor(headers, values);
      this.fillSections(headers, values, agricultor);
      this.fillMultipleOptions(headers, values, agricultor);
      await this.agricultorService.set(agricultor);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async getAgricultor(headers: any[], values: any[]): Promise<Agricultor> {
    const id = this.getValueByHeaderName(headers, values, "id");
    const agricultor = await this.initAgricultor(id);
    return agricultor;
  }

  private getValueByHeaderName(headers: string[], values: string[], headerName: string): string {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toUpperCase() === headerName.toUpperCase()) {
        return values[i];
      }
    }
    return "";
  }

  private fillSections(headers: string[], values: string[], agricultor: Agricultor): void {
    const mockAgricultor = agricultor as any;
    for (let section of Object.keys(agricultor.secciones)) {
      if (mockAgricultor["secciones"][section]["preguntas"] != undefined) {
        for (let question of Object.keys(mockAgricultor["secciones"][section]["preguntas"])) {
          this.fillQuestions(headers, values, question, mockAgricultor["secciones"][section]["preguntas"]);
        }
      }
      if (mockAgricultor["secciones"][section]["secciones"] != undefined) {
        const lastObject = mockAgricultor["secciones"][section]
        this.fillSections(headers, values, lastObject);
      }
    }
  }

  private fillQuestions(headers: string[], values: string[], question: string, lastObject: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        const mockMapper = agricultorMapper as any;
        const code = mockMapper[question]["codigo"];
        let value = this.getValueByHeaderName(headers, values, code);
        if (Array.isArray(lastObject[question][response]) && value != undefined) {
          const arrayValue = value.split(',');
          lastObject[question][response] = arrayValue;
        } else {
          lastObject[question][response] = value;
        }
      } else if (response === "preguntas") {
        const newLastObject = lastObject[question][response];
        for (let question in newLastObject) {
          this.fillQuestions(headers, values, question, newLastObject);
        }
      } else if (response === "arreglo") {
        this.pickQuestionWithDynamicArray(headers, values, lastObject[question][response], question);
      }
    }
  }

  private pickQuestionWithDynamicArray(headers: string[], values: string[], dynamicArray: any[], question: string): void {
    let codes = [];
    switch (question) {
      case "viejosInjertados":
        codes = ['CAC42_AVI1', 'CAC13_ECVIN', 'CAC43_AVI2', 'CAC44_EVI2'];
        const questionsVI = ["areaViejoInjertado", "edadViejoInjertado"];
        this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsVI, codes, questionsVI.length);
        break;
      case "nuevosClones":
        codes = ['CAC45_ANC1', 'CAC15_NCED', 'CAC46_ANC2', 'CAC47_ENC2', 'CAC48_ANC3', 'CAC49_ENC3'];
        const questionsNV = ["areaNuevosClones", "edadNuevosClones"];
        this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsNV, codes, questionsNV.length);
        break;
    }
  }

  private fillDynamicArray(headers: string[], values: string[], dynamicArray: any[], arrayOfQuestions: string[], codes?: string[], numberOfFields?: number) {
    let hayCampos = true;
    let countOfFields = 1;
    while (hayCampos) {
      let viejoInjertado: any = {};
      for (let question of arrayOfQuestions) {
        const mockMapper = agricultorMapper as any;
        const codeInDocument = mockMapper[question]["codigo"] + countOfFields.toString();
        const value = this.getValueByHeaderName(headers, values, codeInDocument);
        if (value === "" || countOfFields === 10) {
          hayCampos = false;
          break;
        } else {
          viejoInjertado[question] = {};
          viejoInjertado[question]["respuesta"] = value; 
        }
      }
      if (hayCampos) {
        dynamicArray.push(viejoInjertado);
      }
      countOfFields++;
    }
  }

  private fillDynamicArrayWithExcel(headers: string[], values: string[], dynamicArray: any[], arrayOfQuestions: string[], codes?: string[], numberOfFields?: number) {
    let position = 0;
    while (position < codes.length) {
      let object: any = {};
      for (let question of arrayOfQuestions) {
        const value = this.getValueByHeaderName(headers, values, codes[position]);
        object[question] = {};
        object[question]["respuesta"] = value;
        position++;
      }
      dynamicArray.push(object);
    }
  }

  private fillMultipleOptions(headers: string[], values: string[], agricultor: Agricultor): void {
    const celulares = ['SE06_CEL1', 'SE07_CEL2'];
    const asociadoPolicultivo = ['FIN10_MAIZ', 'FIN11_NAR', 'FIN12_PLAT', 'FIN14_MANI', 'FIN13_OTRO'];
    const variedades = ['CAC17_NC103', 'CAC18_NC96', 'CAC19_NC95', 'CAC50_NC800', 'CAC51_NC801', 'CAC20_NCOTR', 'CAC52_ESP', 'CAC21_NCNS'];
    for (let index = 0; index < headers.length; index++) {
      this.fillArray(headers[index], values[index], celulares,
        agricultor.secciones.datosPersonales.preguntas.celulares.respuesta);
      this.fillArray(headers[index], values[index], asociadoPolicultivo,
        agricultor.secciones.hectareaje.preguntas.cultivoCacao.preguntas.asociadoConTiene.respuesta);
      this.fillArray(headers[index], values[index], variedades,
        agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.respuesta);
    }
  }

  private fillArray(header: string, value: string, codigos: string[], arreglo: string[]): boolean {
    for (let codigo of codigos) {
      if (codigo === header) {
        arreglo.push(value);
        return true;
      }
    }
    return false;
  }

  public async initAgricultor(agricultorId: string): Promise<Agricultor> {
    let agricultor: Agricultor = await this.agricultorService.get(agricultorId);
    if (agricultor === undefined) {
      const newAgricultor: Agricultor = {
        id: agricultorId,
        secciones: {
            datosPersonales: {
              preguntas: {
                cedula: {
                  respuesta: ""
                },
                nombre: {
                  respuesta: ""
                },
                estado: {
                    respuesta: ""
                },
                fechaNacimiento: {
                  respuesta: new Date()
                },
                genero: {
                  respuesta: ""
                },
                estadoCivil: {
                  respuesta: ""
                },
                nivelEducacion: {
                  respuesta: ""
                },
                celulares: {
                  respuesta: []
                },
                telefono: {
                  respuesta: ""
                },
                isDiscapacitado: {
                  respuesta: ""
                },
                tecnico: {
                  respuesta: ""
                },
                fechaVisita: {
                  respuesta: new Date()
                },
                viaPrincipalComunicacion: {
                    respuesta: ""
                },
                comentariosComunicacion: {
                    respuesta: ""
                }
              }
            },
            informacionFinca: {
                preguntas: {
                    provincia: {
                        respuesta: ""
                    },
                    canton: {
                        respuesta: ""
                    },
                    parroquia: {
                        respuesta: ""
                    },
                    recinto: {
                        respuesta: ""
                    },
                    nombreFinca: {
                        respuesta: ""
                    },
                    descripcionLlegarFinca: {
                        respuesta: ""
                    },
                    casaProductorDentroFinca: {
                        respuesta: "",
                        preguntas: {
                          descripcionLlegarCasa: {
                            respuesta: ""
                          }
                        }
                    }
                }
            },
            hectareaje: {
                preguntas: {
                    dimensionTotalFinca: {
                        respuesta: ""
                    },
                    terreno: {
                        respuesta: ""
                    },
                    cultivoCacao: {
                        respuesta: "",
                        preguntas: {
                            asociadoConTiene: {
                                respuesta: [],
                                preguntas: {
                                    otrosEspecifique: {
                                        respuesta: ""
                                    }
                                }
                            }
                        }
                    },
                    areaNetaCacao: {
                        respuesta: ""
                    },
                    distanciaPlantas: {
                        respuesta: ""
                    },
                    plantasXHectareas: {
                        respuesta: ""
                    },
                    tipoUbicacionZona: {
                        respuesta: ""
                    },
                    zonaProtegida: {
                        respuesta: "",
                        preguntas: {
                          otraZona: {
                            respuesta: ""
                          }
                        }
                    }
                }
            },
            cacaoCNN: {
                preguntas: {
                    areaTotalCNN: {
                        respuesta: ""
                    },
                    areaProduccion: {
                        respuesta: ""
                    },
                    edadCacaoProductivo: {
                        respuesta: ""
                    },
                    areaRecienSembrada: {
                        respuesta: ""
                    },
                    edadCacaoReciente: {
                        respuesta: ""
                    },
                    produccionAnioAnteriorCacaoCNN: {
                        respuesta: ""
                    },
                    precioPromedio: {
                        respuesta: ""
                    },
                    tieneCacaoImproductivo: {
                        respuesta: "",
                        preguntas: {
                          cuantasHectareasImproductivo: {
                            respuesta: ""
                          }
                        }
                    }
                }
            },
            cacaoNacional: {
                preguntas: {
                    areaTotalNacional: {
                        respuesta: ""
                    },
                    areaTotalNacionalViejo: {
                        respuesta: ""
                    },
                    edadCacaoViejo: {
                        respuesta: ""
                    },
                    brotesBasales: {
                        respuesta: ""
                    },
                    arbolesElite: {
                        respuesta: ""
                    },
                    areaTotalViejoInjertado: {
                        respuesta: ""
                    },
                    viejosInjertados: {
                        arreglo: []
                    },
                    areaTotalNuevosClones: {
                        respuesta: ""
                    },
                    nuevosClones: {
                        arreglo: []
                    },
                    produccionAnioAnteriorCacaoNacional: {
                        respuesta: ""
                    },
                    precioPromedioXCacao: {
                        respuesta: ""
                    }
                }
            },
            cacaoNacionalNuevosClones: {
                preguntas: {
                    usoAnteriorAreaNueva: {
                        respuesta: "",
                        preguntas: {
                            otroUsoAnteriorAreaNueva: {
                                respuesta: ""
                            }
                        }
                    },
                    tipoVariedad: {
                        respuesta: [],
                        preguntas: {
                            especifiqueOtros: {
                                respuesta: ""
                            }
                        }
                    },
                    variedadesSembradasCalificacion: {
                        respuesta: ""
                    },
                    plantulasCondicionesEdafoclimaticas: {
                        respuesta: ""
                    },
                    plantulasRendimiento: {
                        respuesta: ""
                    },
                    plantulasVigorPlanta: {
                        respuesta: ""
                    },
                    plantulasResistenciaEnfermedades: {
                        respuesta: ""
                    }
                }
            },
            origenPlantas: {
                preguntas: {
                    nombreVivero: {
                        respuesta: ""
                    },
                    ubicacionVivero: {
                        respuesta: ""
                    },
                    encargadoPropagacion: {
                        respuesta: "",
                        preguntas: {
                            otroEncargadoPropagacion: {
                                respuesta: ""
                            }
                        }
                    },
                    tipoConocimiento: {
                        respuesta: ""
                    },
                    entidadDonacion: {
                        respuesta: ""
                    },
                    cantidadPlantasRecibidas: {
                        respuesta: ""
                    },
                    queCultivoPoda: {
                        respuesta: ""
                    }
                }
            },
            priorizacionParticipacionProyectos:{
                preguntas: {
                    incrementarProductividad: {
                        respuesta: "",
                        preguntas: {
                            recibirPlantasCacaoNacional: {
                                respuesta: "",
                                preguntas: {
                                    tieneAreaLibreParaSembrar: {
                                        respuesta: "",
                                        preguntas: {
                                            areaLibre: {
                                                respuesta: ""
                                            }
                                        }
                                    },
                                    necesitaRehaReinjerto: {
                                        respuesta: "",
                                        preguntas: {
                                            cantidad: {
                                                respuesta: ""
                                            }
                                        }
                                    }
                                }
                            },
                            aprenderElabProductosNaturales: {
                                respuesta: ""
                            }
                        }
                    },
                    mejorarCalidadCacao: {
                        respuesta: "",
                        preguntas: {
                            bandejasCajonesFermentacion: {
                                respuesta: "",
                                preguntas: {
                                    dispuestoHacerloPropiaCuenta: {
                                        respuesta: ""
                                    }
                                }
                            },
                            tendalesElevadosCania: {
                                respuesta: ""
                            },
                            secadorasComunitarias: {
                                respuesta: "",
                                preguntas: {
                                    contarAgrupacionParaProyecto: {
                                        respuesta: ""
                                    }
                                }
                            }
                        }
                    },
                    diversificacionIngresos: {
                        respuesta: "",
                        preguntas: {
                            huertosOrganicos: {
                                respuesta: ""
                            },
                            desarrolloViveros: {
                                respuesta: ""
                            },
                            desarrolloVentaFertilizantes: {
                                respuesta: ""
                            },
                            rehabilitacionFinca: {
                                respuesta: ""
                            },
                            brigadaPodadores: {
                                respuesta: "",
                                preguntas: {
                                    contarExperienciaPoda: {
                                        respuesta: "",
                                        preguntas: {
                                            aniosExperiencia: {
                                                respuesta: ""
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                }
            },
            croquis: {
                preguntas: {
                  coordenadasX: {
                    respuesta: ""
                  },
                  coordenadasY: {
                    respuesta: ""
                  },
                  productor: {
                    respuesta: ""
                  },
                  predio: {
                    respuesta: ""
                  },
                  altura: {
                    respuesta: ""
                  },
                  croquisPath: {
                    respuesta: ""
                  }
                }
            }
        }
      };
      agricultor = newAgricultor;
      await this.agricultorService.set(agricultor);
    }
    return agricultor;
  }

  public async initTecnico(tecnicoId: string, tecnicoName: string): Promise<Tecnico> {
    let tecnico: Tecnico;
    if (tecnicoId === undefined) {
      tecnico = await this.tecnicoService.get(tecnicoId);
    } else {
      const newTecnico: Tecnico = {
        id: "",
        nombre: tecnicoName,
        correo: "",
        permiso: Permiso.Ficticio,
        rol: ""
      };
      tecnico = newTecnico;
    }
    return tecnico;
  }
}

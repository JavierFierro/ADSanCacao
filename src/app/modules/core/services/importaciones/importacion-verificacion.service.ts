import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { last } from 'rxjs-compat/operator/last';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { formularioVerificacionMapper } from 'src/environments/mappers/formularioVerificacion';
import { FormularioVerificacionService } from './../../services/formularios/formulario-verificacion.service';
import { ImportacionAgricultorService } from './importacion-agricultor.service';

@Injectable({
  providedIn: 'root'
})
export class ImportacionVerificacionService {

  csvRecords: any[] = [];

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private importacionAgricultor: ImportacionAgricultorService,
    private formularioVerificacionService: FormularioVerificacionService
  ) {
   }

  async importAllFormularios(file: any, header: boolean, delimeter: string): Promise<void> {
    try {
      this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
      .pipe().subscribe(async (result: any) => {
        try {
          for (let index = 1; index < result.length; index++) {
            await this.importFormulario(result[0], result[index]);
          }
        } catch(e) {
          console.log(e);
          throw(e);
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async importFormulario(headers: any[], values: any[]): Promise<void> {
    try {
      const formularioVerificacion = await this.getFormularioVerificacion(headers, values);
      if(formularioVerificacion != undefined){
        this.fillSections(headers, values, formularioVerificacion);
        this.fillMultipleOptions(headers, values, formularioVerificacion);
        await this.formularioVerificacionService.set(formularioVerificacion);
      }
      
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async getFormularioVerificacion(headers: any[], values: any[]): Promise<FormularioVerificacion> {
    const id = this.getValueByHeaderName(headers, values, "ID-FORMULARIO");
    const agricultorId = this.getValueByHeaderName(headers, values, "id");
    const agricultor = this.getValueByHeaderName(headers, values, "nombre");
    const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
    const tecnico = this.getValueByHeaderName(headers, values, "tecnico");
    const fechaVisita = this.getValueByHeaderName(headers, values, "F_VISITA21");
    const formularioVerificacion = await this.initFormularioVerificacion(id, agricultorId, agricultor, tecnicoId, tecnico, fechaVisita);
    return formularioVerificacion;
  }

  private getValueByHeaderName(headers: string[], values: string[], headerName: string): string {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toUpperCase() === headerName.toUpperCase()) {
        return values[i];
      }
    }
    return "";
  }

  private fillSections(headers: string[], values: string[], formulario: FormularioVerificacion): void {
    for (let section of Object.keys(formulario["secciones"])) {
      if ((formulario as any)["secciones"][section]["preguntas"] != undefined) {
        for (let question of Object.keys((formulario as any)["secciones"][section]["preguntas"])) {
          this.fillQuestions(headers, values, question, (formulario as any)["secciones"][section]["preguntas"]);
        }
      }
      if ((formulario as any)["secciones"][section]["secciones"] != undefined) {
        const lastObject = (formulario as any)["secciones"][section]
        this.fillSections(headers, values, lastObject);
      }
    }
  }

  private fillQuestions(headers: string[], values: string[], question: string, lastObject: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        const mockMapper = formularioVerificacionMapper as any;
        const code = mockMapper[question]["codigo"];
        let value = this.getValueByHeaderName(headers, values, code);
        if (Array.isArray(lastObject[question][response]) && value != undefined) {
          if (question === 'tipoProductoQuimico' || question === 'tipoProductoNatural') {
            lastObject[question][response] = [value];
          } else {
            const arrayValue = value.replace(' ', '').split(',');
            lastObject[question][response] = arrayValue;
          }
        } else {
          lastObject[question][response] = value;
        }
      } else if (response === "preguntas") {
        const newLastObject = lastObject[question][response];
        for (let question in newLastObject) {
          this.fillQuestions(headers, values, question, newLastObject);
        }
      } else if (response === "arreglo") {
        // FORMULARIOS VERIFICACION NO TIENE ARREGLO DINAMICO
      }
    }
  }

  private fillMultipleOptions(headers: string[], values: string[], formulario: FormularioVerificacion): void {
    const comoControlaMaleza = ['MAL03_QUIM', 'MAL04_MEC', 'MAL05_NAT'];
    const tipoControlMipe = ['MIPE02_QUI', 'MIPE03_MEC', 'MIPE04_BIO'];
    const comoRealizaSecado = ['SEC02_SASF', 'SEC03_SCAÑ', 'SEC04_SCEM', 'SEC05_MARQ', 'SEC06_SEC', 'SEC07_SPLNE', 'SEC08_SPLBL', 'SEC09_SOTR'];
    const criterioClasificaBasura = ['HDE17_PEL', 'HDE18_ORGN', 'HDE19_BPV'];
    const especiesArboles = ['BIO07_LAUR', 'BIO08_FERN', 'BIO09_TECA', 'BIO10_GUAY', 'BIO11_OTR'];
    const fuentesHidricas = ['RIB02_VERT', 'RIB03_EST', 'RIB04_RIO', 'RIB05_POZ', 'RIB06_OTR'];
    const tipoFuenteHidrica = ['RIB08_SUPF', 'RIB09_SUBT', 'RIB10_TEMP', 'RIB11_PERM', 'RIB12_ARTF', 'RIB13_NATU'];
    const areasAltoValor = ['RIB32_AVC1', 'RIB33_AVC2', 'RIB34_AVC3', 'RIB35_AVC4', 'RIB36_AVC5', 'RIB37_AVC6'];
    for (let index = 0; index < headers.length; index++) {
      this.fillArray(headers[index], values[index], comoControlaMaleza,
        formulario.secciones.controlMalezas.preguntas.controlaMalezas.preguntas.comoControlaMaleza.respuesta);
      this.fillArray(headers[index], values[index], tipoControlMipe,
        formulario.secciones.MIPE.preguntas.realizaPracticasMPE.preguntas.tipoControlMPE.respuesta);
      this.fillArray(headers[index], values[index], comoRealizaSecado,
        formulario.secciones.secado.preguntas.maneraRealzarSecado.respuesta);
      this.fillArray(headers[index], values[index], criterioClasificaBasura,
        formulario.secciones.secado.preguntas.maneraRealzarSecado.respuesta);
      this.fillArray(headers[index], values[index], especiesArboles,
        formulario.secciones.conservacionSuelosBiodiversidad.preguntas.especiesArbolesEnCultivo.respuesta);
      this.fillArray(headers[index], values[index], fuentesHidricas,
        formulario.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.nombreFuenteHidrica.respuesta);
      this.fillArray(headers[index], values[index], tipoFuenteHidrica,
        formulario.secciones.proteccionAreasRiberenias.preguntas.poseeFuenteHidrica.preguntas.tipoFuenteHidrica.respuesta);
      this.fillArray(headers[index], values[index], areasAltoValor,
        formulario.secciones.proteccionAreasAltoValorConservacion.preguntas.fincaConsideradaAltoValor.preguntas.tipoAltoValor.respuesta);
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

  private fillMatrixMonths(header: string, value: string, codigos: string[], arreglo: string[]): boolean {
    const meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    for (let index = 0; index < codigos.length; index++) {
        const codigo = codigos[index];
        if (codigo === header && value === 'AFIRMATIVO') {
            arreglo.push(meses[index]);
            return true;
        }
    }
    return false;
  }

  private async initFormularioVerificacion(id: string, agricultorId: string, agricultorName: string, tecnicoId: string, tecnicoName: string, fechaVisita: string): Promise<FormularioVerificacion> {
    if(agricultorId != ""){
        const agricultor = await this.importacionAgricultor.initAgricultor(agricultorId);
        const tecnico = await this.importacionAgricultor.initTecnico(tecnicoId, tecnicoName);
        return {
            id: id,
            agricultor: agricultor,
            tecnico: tecnico,
            fechaVisita: fechaVisita,
            secciones: {
                datosFinca: {
                    preguntas: {
                        incrementoHectareajeFinca: {
                            respuesta: "",
                            preguntas: {
                                cantidadAumento: {
                                    respuesta: ""
                                },
                                mesIncrementoHectareaje: {
                                    respuesta: ""
                                },
                                motivoAreaNueva: {
                                    respuesta: ""
                                },
                                usoAreaNueva: {
                                    respuesta: ""
                                },
                                incrementoFueraTamanioFinca: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                injertacion: {
                    preguntas: {
                        realizoInjertosUltimos12Meses: {
                            respuesta: "",
                            preguntas: {
                                mesRealizoInjertos: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                manejoSuelo: {
                    preguntas: {
                        tipoSuelo: {
                            respuesta: []
                        },
                        capacitacionTomaMuestrasSuelo: {
                            respuesta: ""
                        },
                        analisisSuelo: {
                            respuesta: "",
                            preguntas: {
                                sueloPH: {
                                    respuesta: ""
                                }
                            }
                        },
                        suelosNivelesAltosAcidez: {
                            respuesta: "",
                            preguntas: {
                                corregidoPHSueloFinca: {
                                    respuesta: ""
                                }
                            }
                        },
                        maneraCorregidoPHSuelo: {
                            respuesta: [],
                            preguntas: {
                                tipoProductoQuimico: {
                                    respuesta: []
                                },
                                tipoProductoNatural: {
                                    respuesta: []
                                }
                            }
                        }
                    }
                },
                fertilizacion: {
                    preguntas: {
                        fertilizaCacaotales: {
                            respuesta: "",
                            preguntas: {
                                tipoProductoUsado: {
                                    respuesta: ""
                                }
                            }
                        },
                        usaFertilizanteEdafico: {
                            respuesta: "",
                            preguntas: {
                                vecesUsadoAlAnioFertilizanteEdafico: {
                                    respuesta: ""
                                }
                            }
                        },
                        usaFertilizanteFoliar: {
                            respuesta: "",
                            preguntas: {
                                vecesUsadoAlAnioFertilizanteFoliar: {
                                    respuesta: ""
                                }
                            }
                        },
                        recibidoFertilizanteKits: {
                            respuesta: "",
                            preguntas: {
                                tipoFertilizanteRecibido: {
                                    respuesta: []
                                }
                            }
                        },
                        opinionEfectividadFertilizante: {
                            respuesta: ""
                        },
                        repetirCompraConDescuento: {
                            respuesta: ""
                        },
                        disminuidoProductosQuimicosPorOrganicos: {
                            respuesta: ""
                        }
                    }
                },
                bodega: {
                    preguntas: {
                        poseeBodega: {
                            respuesta: ""
                        },
                        bodegaSegura: {
                            respuesta: ""
                        },
                        bodegaOrdenada: {
                            respuesta: ""
                        },
                        clasificadaXProducto: {
                            respuesta: ""
                        },
                        tieneRegistroAlmacena: {
                            respuesta: ""
                        },
                        cuentaDuchaEmergencia: {
                            respuesta: ""
                        },
                        conocimientoProdcutosPermitidosLINDT: {
                            respuesta: ""
                        }
                    }
                },
                controlMalezas: {
                    preguntas: {
                        controlaMalezas: {
                            respuesta: "",
                            preguntas: {
                                tiposMalezaEncontrada: {
                                    respuesta: ""
                                },
                                comoControlaMaleza: {
                                    respuesta: [],
                                    preguntas: {
                                        productoQuimicoUsado: {
                                            respuesta: ""
                                        },
                                        regularidadProductoQuimicoUsado: {
                                            respuesta: ""
                                        },
                                        recomendacionSeguidaAplicandoProductoQuimico: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        conocimientoDisposicionMaquinariaAgricola: {
                            respuesta: "",
                            preguntas: {
                                haceUsoMisma: {
                                    respuesta: ""
                                },
                                tiempoPromedioUso: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                poda: {
                    preguntas: {
                        realizaPoda: {
                            respuesta: "",
                            preguntas: {
                                tipoPoda: {
                                    respuesta: []
                                },
                                realizaPodaFormacion: {
                                    respuesta: "",
                                    preguntas: {
                                        podaFormacionEsCorrecta: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                realizaPodaMantenimiento: {
                                    respuesta: "",
                                    preguntas: {
                                        podaMantenimientoEsCorrecta: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                realizaPodaFitosanitaria: {
                                    respuesta: "",
                                    preguntas: {
                                        podaFitosanitariaEsCorrecta: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                realizaPodaRehabilitacion: {
                                    respuesta: "",
                                    preguntas: {
                                        podaRehabilitacionEsCorrecta: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        cortesLaceracionesPlantaMalaPoda: {
                            respuesta: ""
                        },
                        mazorcasEstadoPudricion: {
                            respuesta: ""
                        },
                        malaPodaAlbergaPlagasEnfermedades: {
                            respuesta: "",
                            preguntas: {
                                plagasMalaPoda: {
                                    respuesta: []
                                },
                                enfermedadesMalaPoda: {
                                    respuesta: []
                                }
                            }
                        }
                    }
                },
                MIPE: {
                    preguntas: {
                        realizaPracticasMPE: {
                            respuesta: "",
                            preguntas: {
                                tipoControlMPE: {
                                    respuesta: []
                                }
                            }
                        },
                        corrigioProblemasMPE: {
                            respuesta: ""
                        },
                        fincaLibreAplicacionQuimica: {
                            respuesta: ""
                        },
                        controlaEnfermedades: {
                            respuesta: ""
                        },
                        reduccionIncidenciaPlagasEnfermedades: {
                            respuesta: ""
                        }
                    }
                },
                saludSeguridadOcupacional: {
                    preguntas: {
                        trabajadoresLlevadosCapacitacionesSSO: {
                            respuesta: ""
                        },
                        usoPictograma: {
                            respuesta: ""
                        },
                        buenasPracticasFincaTrabajadores: {
                            respuesta: ""
                        },
                        botiquin: {
                            respuesta: ""
                        },
                        eppAntesPlaguicida: {
                            respuesta: ""
                        },
                        instruccionesPrimerosAuxilios: {
                            respuesta: ""
                        }
                    }
                },
                registrosProductor: {
                    preguntas: {
                        ventaAnualCacaoQuintales: {
                            respuesta: ""
                        },
                        ventaAnualCacaoUSD: {
                            respuesta: ""
                        },
                        egresoCompraMateriales: {
                            respuesta: ""
                        },
                        egresoManoObra: {
                            respuesta: ""
                        },
                        manejoCuadernilloRegistros: {
                            respuesta: ""
                        },
                        manejoCostosPlanificacionFinanciera: {
                            respuesta: ""
                        },
                        disponibilidadAhorrarEnCuenta: {
                            respuesta: "",
                            preguntas: {
                                tipoInstitucionAhorroCuenta: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                cosecha: {
                    preguntas: {
                        cosechaSeparadoCacaoNacionalCCN51: {
                            respuesta: ""
                        },
                        plantasLaceracionesCicatricesMalaPractica: {
                            respuesta: ""
                        }
                    }
                },
                fermentacion: {
                    preguntas: {
                        fermentaCacao: {
                            respuesta: "",
                            preguntas: {
                                razonNoFermenta: {
                                    respuesta: ""
                                },
                                modoFermentacion: {
                                    respuesta: ""
                                },
                                medidasHigieneFermentacion: {
                                    respuesta: ""
                                },
                                aumentoIngresoPorFermentacion: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                secado: {
                    preguntas: {
                        nivelHumedadCacaoVendido: {
                            respuesta: ""
                        },
                        maneraRealzarSecado: {
                            respuesta: []
                        },
                        mejoraIngresoMejorTratamientoSecadoCacao: {
                            respuesta: ""
                        }
                    }
                },
                venta: {
                    preguntas: {
                        personaVenderCacao: {
                            respuesta: "",
                            preguntas: {
                                razon1: {
                                    respuesta: ""
                                },
                                razon2: {
                                    respuesta: ""
                                }
                            }
                        },
                        recibeBonosEmpresaProgramaLINDT: {
                            respuesta: "",
                            preguntas: {
                                frecuenciaRecibeBono: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                condicionesLaborales: {
                    preguntas: {
                        discriminacion: {
                            respuesta: ""
                        },
                        explotacion: {
                            respuesta: ""
                        },
                        trabajoInfantil: {
                            respuesta: ""
                        },
                        documentosSoporte: {
                            respuesta: ""
                        },
                        montoAcuerdoContratoAgricola: {
                            respuesta: ""
                        }
                    }
                },
                conservacionAguaManejoDesechos: {
                    preguntas: {
                        fincaConRiego: {
                            respuesta: ""
                        },
                        disenioRiego: {
                            respuesta: [],
                        },
                        tieneDisenoFijo: {
                            respuesta: "",
                            preguntas: {
                                hectareasDisenioRiegoFijo: {
                                    respuesta: ""
                                }
                            }
                        },
                        tieneDisenoMovible: {
                            respuesta: "",
                            preguntas: {
                                hectareasDisenioRiegoMovible: {
                                    respuesta: ""
                                }
                            }
                        },
                        permisoExtraerAguaRiego: {
                            respuesta: ""
                        },
                        analisisAguaRiego: {
                            respuesta: ""
                        },
                        presentaAnexos: {
                            respuesta: ""
                        },
                        utilizaFiltroEcologico: {
                            respuesta: "",
                            preguntas: {
                                razonUsoFiltroEcologico: {
                                    respuesta: ""
                                }
                            }
                        },
                        areaDeschPlasticos: {
                            respuesta: ""
                        },
                        fincaLibrePlasticos: {
                            respuesta: ""
                        },
                        clasificaBasuraDomestica: {
                            respuesta: ""
                        },
                        criterioClasificaBasuraDomestica: {
                            respuesta: []
                        },
                        practicaReciclajeCompostaje: {
                            respuesta: ""
                        },
                        tratamientoBasura: {
                            respuesta: ""
                        },
                        conocimientoAreaRecepcioEnvasesProductosQuimicos: {
                            respuesta: "",
                            preguntas: {
                                usoServicioAreaRecepcioEnvasesProductosQuimicos: {
                                    respuesta: ""
                                },
                                frecuenciaUsoServicioAreaRecepcioEnvasesProductosQuimicos: {
                                    respuesta: ""
                                },
                                almacenaSeguridadEnvasesPrevioTraslado: {
                                    respuesta: "",
                                    preguntas: {
                                        lugarAlmacena: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        },
                        tratamientoAguasNegras: {
                            respuesta: ""
                        },
                        tipoExtraccion: {
                            respuesta: ""
                        },
                        infraestructuraRiego: {
                            respuesta: ""
                        },
                        impactoRiego: {
                            respuesta: ""
                        }
                    }
                },
                conservacionSuelosBiodiversidad: {
                    preguntas: {
                        practicasConservacionSuelos: {
                            respuesta: ""
                        },
                        practicaDeforestacion: {
                            respuesta: ""
                        },
                        plantadoArbolesSombrioRecient: {
                            respuesta: "",
                            preguntas: {
                                cuantosArbolesSombrio: {
                                    respuesta: ""
                                },
                                promedioArbolesXHectarea: {
                                    respuesta: ""
                                },
                                reforestadoOrillas: {
                                    respuesta: ""
                                }
                            }
                        },
                        promedioArbolXHectarea12MAltura: {
                            respuesta: ""
                        },
                        especiesDiferentesArbolesXHectarea: {
                            respuesta: ""
                        },
                        especiesArbolesEnCultivo: {
                            respuesta: [],
                            preguntas: {
                                especifiqueOtrosEspeciesArboles: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                proteccionAreasRiberenias: {
                    preguntas: {
                        poseeFuenteHidrica: {
                            respuesta: "",
                            preguntas: {
                                nombreFuenteHidrica: {
                                    respuesta: [],
                                    preguntas: {
                                        especifiqueOtros: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                consideradaFuenteHidrica: {
                                    respuesta: ""
                                },
                                tipoFuenteHidrica: {
                                    respuesta: []
                                },
                                poseeNacientes: {
                                    respuesta: "",
                                    preguntas: {
                                        cuantasNacientes: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                brindaProteccionFuenteHidrica: {
                                    respuesta: "",
                                    preguntas: {
                                        comoBrindaProtFuentHidr: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                distanciaRequerida: {
                                    respuesta: ""
                                }
                            }
                        }
                    }
                },
                proteccionAreasAltoValorConservacion: {
                    preguntas: {
                        sueloPresentaProblemaErosion: {
                            respuesta: "",
                            preguntas: {
                                tipoProblemaErosion: {
                                    respuesta: ""
                                }
                            }
                        },
                        necesitaImplementarPracticasMejoraSuelo: {
                            respuesta: "",
                            preguntas: {
                                comoQuePracticas: {
                                    respuesta: ""
                                }
                            }
                        },
                        gradoPresentanPendientes: {
                            respuesta: ""
                        },
                        cuentaConAreaForestales: {
                            respuesta: "",
                            preguntas: {
                                tipoAreaForestal: {
                                    respuesta: ""
                                }
                            }
                        },
                        realizaPlanesCorteExtraccionMadera: {
                            respuesta: ""
                        },
                        presentaAnexosAreasAltoValor: {
                            respuesta: ""
                        },
                        realizaPlanesReforestacion: {
                            respuesta: ""
                        },
                        conoceEspeciePeligroExtincionEnFinca: {
                            respuesta: "",
                            preguntas: {
                                cualesEspeciesPeligroExtincion: {
                                    respuesta: ""
                                },
                                especifiqueCualesEspeciesPeligroExtincion: {
                                    respuesta: ""
                                }
                            }
                        },
                        fincaConsideradaAltoValor: {
                            respuesta: "",
                            preguntas: {
                                tipoAltoValor: {
                                    respuesta: []
                                }
                            }
                        }
                    }
                },
                diversificacionIngresos: {
                    preguntas: {
                        usoCultivoDiferenteCacao: {
                            respuesta: ""
                        },
                        otraActividadDentroFincaConIngreso: {
                            respuesta: "",
                            //   preguntas:{
                            //     otrosActividadesDentroFincaConIngreso:{
                            //       respuesta: ""
                            //     }
                            //   }
                        },
                        huertosOrganicosEnFinca: {
                            respuesta: ""
                        },
                        otraActividadFueraFincaConIngreso: {
                            respuesta: "",
                            preguntas: {
                                actividadFueraFincaConIngreso: {
                                    respuesta: ""
                                },
                                realizaActividadFueraFincaConIngreso: {
                                    respuesta: ""
                                }
                            }
                        }
                        //   ganaVentaCultivo:{
                        //     respuesta: ""
                        //   },
                        //   ganaActividadesDentroDeFinca:{
                        //     respuesta: ""
                        //   },
                        //   ganaActividadesFueraDeFinca:{
                        //     respuesta: ""
                        //   }
                    }
                },
                capacitacionesBeneficioPrograma: {
                    secciones: {
                        capacitacion: {
                            preguntas: {
                                utilidadCacaoFinoAromaSostenibilidadTrazabilidad: {
                                    respuesta: ""
                                },
                                aplicaCacaoFinoAromaSostenibilidadTrazabilidad: {
                                    respuesta: ""
                                },
                                utilidadBuenasPracticasAgricolas: {
                                    respuesta: ""
                                },
                                aplicaBuenasPracticasAgricolas: {
                                    respuesta: ""
                                },
                                utilidadParametrosCalidad: {
                                    respuesta: ""
                                },
                                aplicaParametrosCalidad: {
                                    respuesta: ""
                                },
                                utilidadBuenasPracticasSociales: {
                                    respuesta: ""
                                },
                                aplicaBuenasPracticasSociales: {
                                    respuesta: ""
                                },
                                utilidadBuenasPracticasAmbientales: {
                                    respuesta: ""
                                },
                                aplicaBuenasPracticasAmbientales: {
                                    respuesta: ""
                                },
                                utilidadElaboracionProductosOrganicos: {
                                    respuesta: ""
                                },
                                aplicaElaboracionProductosOrganicos: {
                                    respuesta: ""
                                },
                                utilidadReproduccionVegetativa: {
                                    respuesta: ""
                                },
                                aplicaReproduccionVegetativa: {
                                    respuesta: ""
                                },
                                utilidadPoda: {
                                    respuesta: ""
                                },
                                aplicaPoda: {
                                    respuesta: ""
                                },
                                utilidadApicultura: {
                                    respuesta: ""
                                },
                                aplicaApicultura: {
                                    respuesta: ""
                                },
                                utilidadPorcicultura: {
                                    respuesta: ""
                                },
                                aplicaPorcicultura: {
                                    respuesta: ""
                                },
                                utilidadPiscicultura: {
                                    respuesta: ""
                                },
                                aplicaPiscicultura: {
                                    respuesta: ""
                                },
                                utilidadRiego: {
                                    respuesta: ""
                                },
                                aplicaRiego: {
                                    respuesta: ""
                                },
                                utilidadAgroforesteriaDinamica: {
                                    respuesta: ""
                                },
                                aplicaAgroforesteriaDinamica: {
                                    respuesta: ""
                                },
                                temasAdicionalesGustariaAprender: {
                                    respuesta: ""
                                }
                            }
                        },
                        incentivos: {
                            preguntas: {
                                necesidadesDetectadasFinca: {
                                    respuesta: ""
                                }
                            },
                            secciones: {
                                ambiental: {
                                    preguntas: {
                                        estadoPlantasFrutales: {
                                            respuesta: ""
                                        },
                                        estadoPlantasForestales: {
                                            respuesta: ""
                                        },
                                        estadoOtrosAmbiental: {
                                            respuesta: ""
                                        },
                                        necesitaPlantasFrutales: {
                                            respuesta: ""
                                        },
                                        necesitaPlantasForestales: {
                                            respuesta: ""
                                        },
                                        necesitaOtrosAmbiental: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                insumos: {
                                    preguntas: {
                                        estadoFertilizanteEdafico: {
                                            respuesta: ""
                                        },
                                        estadoFertilizanteFoliar: {
                                            respuesta: ""
                                        },
                                        necesitaFertilizanteEdafico: {
                                            respuesta: ""
                                        },
                                        necesitaFertilizanteFoliar: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                maquinariaAgricola: {
                                    preguntas: {
                                        estadoMotoguadania: {
                                            respuesta: ""
                                        },
                                        estadoMotosierra: {
                                            respuesta: ""
                                        },
                                        estadoPodadoraDeAltura: {
                                            respuesta: ""
                                        },
                                        estadoBombaRiego: {
                                            respuesta: ""
                                        },
                                        estadoBombaAMotor: {
                                            respuesta: ""
                                        },
                                        estadoOtrosMaquinariaAgricola: {
                                            respuesta: ""
                                        },
                                        necesitaMotoguadania: {
                                            respuesta: ""
                                        },
                                        necesitaMotosierra: {
                                            respuesta: ""
                                        },
                                        necesitaPodadoraDeAltura: {
                                            respuesta: ""
                                        },
                                        necesitaBombaRiego: {
                                            respuesta: ""
                                        },
                                        necesitaBombaAMotor: {
                                            respuesta: ""
                                        },
                                        necesitaOtrosMaquinariaAgricola: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                herramientas: {
                                    preguntas: {
                                        estadoTijeras: {
                                            respuesta: ""
                                        },
                                        estadoSerruchos: {
                                            respuesta: ""
                                        },
                                        estadoMachetes: {
                                            respuesta: ""
                                        },
                                        estadoBaldes: {
                                            respuesta: ""
                                        },
                                        estadoTanques: {
                                            respuesta: ""
                                        },
                                        estadoPalas: {
                                            respuesta: ""
                                        },
                                        estadoEPP: {
                                            respuesta: ""
                                        },
                                        estadoKitPoda: {
                                            respuesta: ""
                                        },
                                        estadoKitVivero: {
                                            respuesta: ""
                                        },
                                        estadoOtrosHerramientas: {
                                            respuesta: ""
                                        },
                                        necesitaTijeras: {
                                            respuesta: ""
                                        },
                                        necesitaSerruchos: {
                                            respuesta: ""
                                        },
                                        necesitaMachetes: {
                                            respuesta: ""
                                        },
                                        necesitaBaldes: {
                                            respuesta: ""
                                        },
                                        necesitaTanques: {
                                            respuesta: ""
                                        },
                                        necesitaPalas: {
                                            respuesta: ""
                                        },
                                        necesitaEPP: {
                                            respuesta: ""
                                        },
                                        necesitaKitPoda: {
                                            respuesta: ""
                                        },
                                        necesitaKitVivero: {
                                            respuesta: ""
                                        },
                                        necesitaOtrosHerramientas: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                proyectosInversion: {
                                    preguntas: {
                                        necesitaPlantasCacao800801: {
                                            respuesta: ""
                                        },
                                        necesitaComboApicola: {
                                            respuesta: ""
                                        },
                                        necesitaPiesCriasInsumos: {
                                            respuesta: ""
                                        },
                                        necesitaPecesInsumos: {
                                            respuesta: ""
                                        },
                                        necesitaRiego: {
                                            respuesta: ""
                                        },
                                        necesitaOtrosProyectosInversion: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirPlantasCacao800801: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirComboApicola: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirPiesCriasInsumos: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirPecesInsumos: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirRiego: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirOtros: {
                                            respuesta: ""
                                        },
                                        condAdecuadasPlantasCacao800801: {
                                            respuesta: ""
                                        },
                                        condAdecuadasComboApicola: {
                                            respuesta: ""
                                        },
                                        condAdecuadasPiesCriasInsumos: {
                                            respuesta: ""
                                        },
                                        condAdecuadasPecesInsumos: {
                                            respuesta: ""
                                        },
                                        condAdecuadasRiego: {
                                            respuesta: ""
                                        },
                                        condAdecuadasOtros: {
                                            respuesta: ""
                                        },
                                        condEconomicasPlantasCacao800801: {
                                            respuesta: ""
                                        },
                                        condEconomicasComboApicola: {
                                            respuesta: ""
                                        },
                                        condEconomicasPiesCriasInsumos: {
                                            respuesta: ""
                                        },
                                        condEconomicasPecesInsumos: {
                                            respuesta: ""
                                        },
                                        condEconomicasRiego: {
                                            respuesta: ""
                                        },
                                        condEconomicasOtros: {
                                            respuesta: ""
                                        }
                                    }
                                },
                                calidadPostCosecha: {
                                    preguntas: {
                                        necesitaCajonFermentacion: {
                                            respuesta: ""
                                        },
                                        necesitaMarquesinas: {
                                            respuesta: ""
                                        },
                                        necesitaTendales: {
                                            respuesta: ""
                                        },
                                        necesitaSecadoras: {
                                            respuesta: ""
                                        },
                                        necesitaOtrosCalidadPostCosecha: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirCajonFermentacion: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirMarquesinas: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirTendales: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirSecadoras: {
                                            respuesta: ""
                                        },
                                        disponibilidadInvertirOtrosCalidadPostCosecha: {
                                            respuesta: ""
                                        },
                                        condAdecuadasFermentacion: {
                                            respuesta: ""
                                        },
                                        condAdecuadasMarquesinas: {
                                            respuesta: ""
                                        },
                                        condAdecuadasTendales: {
                                            respuesta: ""
                                        },
                                        condAdecuadasSecadoras: {
                                            respuesta: ""
                                        },
                                        condAdecuadasOtrosCalidadPostCosecha: {
                                            respuesta: ""
                                        },
                                        condEconomicasFermentacion: {
                                            respuesta: ""
                                        },
                                        condEconomicasMarquesinas: {
                                            respuesta: ""
                                        },
                                        condEconomicasTendales: {
                                            respuesta: ""
                                        },
                                        condEconomicasSecadoras: {
                                            respuesta: ""
                                        },
                                        condEconomicasOtrosCalidadPostCosecha: {
                                            respuesta: ""
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                firmaAgricultor: {
                    preguntas: {
                        firmaPath: {
                            respuesta: ""
                        }
                    }
                }
                    // recetario: {
                    //     preguntas:{
                    //         tipoSuelo:{
                    //             respuesta: "",
                    //             // preguntas:{
                    //             //     tipoSueloRecomendacion:{
                    //             //         respuesta: ""
                    //             //     },
                    //             //     tipoSueloPlazo:{
                    //             //         respuesta: ""
                    //             //     },
                    //             //     tipoSueloCumplimiento:{
                    //             //         respuesta: ""
                    //             //     }
                    //             // }
                    //         },
                    //         // topografia:{
                    //         //     respuesta: "",
                    //         //     preguntas:{
                    //         //     topografiaRecomendacion:{
                    //         //         respuesta: ""
                    //         //     },
                    //         //     topografiaPlazo:{
                    //         //         respuesta: ""
                    //         //     },
                    //         //     topografiaCumplimiento:{
                    //         //         respuesta: ""
                    //         //     }
                    //         //     }
                    //         // },
                    //         analisisSuelo:{
                    //             respuesta: "",
                    //             // preguntas:{
                    //             // analisisSueloRecomendacion:{
                    //             //     respuesta: ""
                    //             // },
                    //             // analisisSueloPlazo:{
                    //             //     respuesta: ""
                    //             // },
                    //             // analisisSueloCumplimiento:{
                    //             //     respuesta: ""
                    //             // }
                    //             // }
                    //         }
                    //     }
                        
                    // },
                    // revisionPlantas:{
                    //     preguntas:{
                    //         beneficiarioPlantasCacao:{
                    //             respuesta: "",
                    //         },
                    //         fichaMonitoreoPlantas:{
                    //             respuesta: "",
                    //         },
                    //         porcentajeExitoPlantas:{
                    //             respuesta: "",
                    //         },
                    //         causasPrincipalesMortalidad:{
                    //             respuesta: "",
                    //             preguntas:{
                    //             otrasCausasPrincipalesMortalidad:{
                    //                 respuesta: ""
                    //             }
                    //             }
                    //         },
                    //         reportePlagas:{
                    //             respuesta: "",
                    //         },
                    //         reporteEnfermedades:{
                    //             respuesta: "",
                    //         },
                    //         presentaAnexos:{
                    //             respuesta: "",
                    //         },
                    //         implementaHuertosOrganicos:{
                    //             respuesta: "",
                    //         }
                    //         }
                    // }
            }
        }
    }
    
  }
}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { environment } from 'src/environments/environment';
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { FormularioLineaBaseService } from '../formularios/formulario-linea-base.service';
import { TecnicoService } from '../tecnico/tecnico.service';
import { ImportacionAgricultorService } from './importacion-agricultor.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ImportacionLineaBaseService {

  csvRecords: any[] = [];

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private importacionAgricultor: ImportacionAgricultorService,
    private formularioLineaBaseService: FormularioLineaBaseService
  ) {

  }

  async importAllFormularios(file: any, header: boolean, delimeter: string): Promise<void> {
    try {
      this.ngxCsvParser.parse(file[0], { header: header, delimiter: delimeter })
      .pipe().subscribe(async (result: any) => {
        try {
          const docLines = result as Array<string[]>;
          for (let index = 2; index < docLines.length; index++) {
            await this.importFormulario(docLines[1], docLines[index]);
          }
          Swal.close();
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
      const formularioLineaBase = await this.getFormularioLineaBase(headers, values);
      this.fillSections(headers, values, formularioLineaBase);
      this.fillMultipleOptions(headers, values, formularioLineaBase);
      await this.formularioLineaBaseService.set(formularioLineaBase);
    } catch(e) {
      console.log(e);
      throw(e);
    }
  }

  private async getFormularioLineaBase(headers: any[], values: any[]): Promise<FormularioLineaBase> {
    const id = this.getValueByHeaderName(headers, values, "ID-LB");
    const agricultorId = this.getValueByHeaderName(headers, values, "id");
    const agricultor = this.getValueByHeaderName(headers, values, "nombre");
    const tecnicoId = this.getValueByHeaderName(headers, values, "tecnicoId");
    const tecnico = this.getValueByHeaderName(headers, values, "tecnico");
    const fechaVisita = this.getValueByHeaderName(headers, values, "F_VISITALB");
    const formularioLineaBase = await this.initFormularioLineaBase(id, agricultorId, agricultor, tecnicoId, tecnico, fechaVisita);
    return formularioLineaBase;
  }

  private getValueByHeaderName(headers: string[], values: string[], headerName: string): string {
    for (let i = 0; i < headers.length; i++) {
      if (headers[i].toUpperCase() === headerName.toUpperCase()) {
        return values[i];
      }
    }
    return "";
  }

  private fillSections(headers: string[], values: string[], formulario: FormularioLineaBase): void {
    const mockFormulario = formulario as any;
    for (let section of Object.keys(formulario.secciones)) {
      if (mockFormulario["secciones"][section]["preguntas"] != undefined) {
        for (let question of Object.keys(mockFormulario["secciones"][section]["preguntas"])) {
          this.fillQuestions(headers, values, question, mockFormulario["secciones"][section]["preguntas"]);
        }
      }
      if (mockFormulario["secciones"][section]["secciones"] != undefined) {
        const lastObject = mockFormulario["secciones"][section]
        this.fillSections(headers, values, lastObject);
      }
    }
  }

  private fillQuestions(headers: string[], values: string[], question: string, lastObject: any) {
    for (let response of Object.keys(lastObject[question])) {
      if (response === "respuesta") {
        const mockMapper = formularioLineaBaseMapper as any;
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
      case "miembros":
        codes = ['FA01_MF1', 'FA02_ED1', 'FA03_GEN1', 'FA04_SS1', 'FA05_EDU1', 'FA06_LAB1', 'FA07_LABR1', 'FA08_HOR1', 'FA09_RD1', 'FA10_ING1',
                  'FA11_MF2', 'FA12_ED2', 'FA13_GEN2', 'FA14_SS2', 'FA15_EDU2', 'FA16_LAB2', 'FA17_LABR2', 'FA18_HOR2', 'FA19_RD2', 'FA20_ING2',
                  'FA21_MF3', 'FA22_ED3', 'FA23_GEN3', 'FA24_SS3', 'FA25_EDU3', 'FA26_LAB3', 'FA27_LABR3', 'FA28_HOR3', 'FA29_RD3', 'FA30_ING3',
                  'FA31_MF4', 'FA32_ED4', 'FA33_GEN4', 'FA34_SS4', 'FA35_EDU4', 'FA36_LAB4', 'FA37_LABR4', 'FA38_HOR4', 'FA39_RD4', 'FA40_ING4'];
        const questionsM = ["clasificacionMiembroFamiliar", "edad", "genero", "seguridadSocial",
                            "nivelEduacion", "laboraEnFinca", "laborRealizado", "horasAlDiaTrabaja",
                            "tieneOtraFuenteIngreso", "sueldoIngresoMensual"];
        this.fillDynamicArrayWithExcel(headers, values, dynamicArray, questionsM, codes, questionsM.length);
        break;
    }
  }

  private fillDynamicArray(headers: string[], values: string[], dynamicArray: any[], arrayOfQuestions: string[]) {
    let hayCampos = true;
    let countOfFields = 1;
    while (hayCampos) {
      let viejoInjertado: any = {};
      for (let question of arrayOfQuestions) {
        const mockMapper = formularioLineaBaseMapper as any;
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

  private fillMultipleOptions(headers: string[], values: string[], formulario: FormularioLineaBase): void {
    const plagas = ['MIPE09_PCO', 'MIPE10_PXI', 'MIPE11_PTR', 'MIPE12_PCH', 'MIPE13_PHO', 'MIPE24_ORO', 'MIPE14_POTR'];
    const enfermedades = ['MIPE15_EPH', 'MIPE16_ESC', 'MIPE17_EMO', 'MIPE18_EMM', 'MIPE19_EOTR'];
    const periodoFertilizacion = ['LAB01_F(E)', 'LAB06_F(F)', 'LAB11_F(MZ)', 'LAB16_F(A)', 'LAB21_F(MY)', 'LAB26_F(JN)', 'LAB31_F(JL)', 'LAB36_F(AG)', 'LAB41_F(S)', 'LAB46_F(O)', 'LAB51_F(N)', 'LAB56_F(D)'];
    const periodoPoda = ['LAB02_P(E)', 'LAB07_P(F)', 'LAB12_P(MZ)', 'LAB17_P(A)', 'LAB22_P(MY)', 'LAB27_P(JN)', 'LAB32_P(JL)', 'LAB37_P(AG)', 'LAB42_P(S)', 'LAB47_P(O)', 'LAB52_P(N)', 'LAB57_P(D)'];
    const periodoControlMaleza = ['LAB03_C(E)', 'LAB08_C(F)', 'LAB13_C(MZ)', 'LAB18_C(A)', 'LAB23_C(MY)', 'LAB28_C(JN)', 'LAB33_C(JL)', 'LAB38_C(AG)', 'LAB43_C(S)', 'LAB48_C(O)', 'LAB53_C(N)', 'LAB58_C(D)'];
    const periodoMIPE = ['LAB04_M(E)', 'LAB09_M(F)', 'LAB14_M(MZ)', 'LAB19_M(A)', 'LAB24_M(MY)', 'LAB29_M(JN)', 'LAB34_M(JL)', 'LAB39_M(AG)', 'LAB44_M(S)', 'LAB49_M(O)', 'LAB54_M(N)', 'LAB59_M(D)'];
    const periodoCosecha = ['LAB05_C(E)', 'LAB10_C(F)', 'LAB15_C(MZ)', 'LAB20_C(A)', 'LAB25_C(MY)', 'LAB30_C(JN)', 'LAB35_C(JL)', 'LAB40_C(AG)', 'LAB45_C(S)', 'LAB50_C(O)', 'LAB55_C(N)', 'LAB60_C(D)'];
    const tipoBeneficios = ['ASO05_ASIS', 'ASO06_TRANS', 'ASO07_CAPC', 'ASO08_PMEJ', 'ASO09_PRE', 'ASO10_INS', 'ASO11_OTR'];
    const verterAgua = ['HDE12_SHIG', 'HDE13_LETR', 'HDE14_PZSEP', 'HDE15_NING'];
    for (let index = 0; index < headers.length; index++) {
      this.fillArray(headers[index], values[index], plagas,
        formulario.secciones.practicasAgricolas.preguntas.plagasAfectanCultivo.respuesta);
      this.fillArray(headers[index], values[index], enfermedades,
        formulario.secciones.practicasAgricolas.preguntas.enfermedadesAfectanCultivo.respuesta);
      this.fillMatrixMonths(headers[index], values[index], periodoFertilizacion,
        formulario.secciones.practicasAgricolas.preguntas.periodoFertilizacion.respuesta);
      this.fillMatrixMonths(headers[index], values[index], periodoPoda,
        formulario.secciones.practicasAgricolas.preguntas.periodoPoda.respuesta);
      this.fillMatrixMonths(headers[index], values[index], periodoControlMaleza,
        formulario.secciones.practicasAgricolas.preguntas.periodoControlMaleza.respuesta);
      this.fillMatrixMonths(headers[index], values[index], periodoMIPE,
        formulario.secciones.practicasAgricolas.preguntas.periodoMIPE.respuesta);
      this.fillMatrixMonths(headers[index], values[index], periodoCosecha,
        formulario.secciones.practicasAgricolas.preguntas.periodoCosecha.respuesta);
      this.fillArray(headers[index], values[index], tipoBeneficios,
        formulario.secciones.nivelAsociatividad.preguntas.perteneceAsocProgrCertif.preguntas.tiposBeneficios.respuesta);
      this.fillArray(headers[index], values[index], verterAgua,
        formulario.secciones.conservacionRecursosManejoDesechos.preguntas.productoContaminaEcosistema.preguntas.ubicacionDesechosAguasNegras.respuesta);
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

  private async initFormularioLineaBase(id: string, agricultorId: string, agricultorName: string, tecnicoId: string, tecnicoName: string, fechaVisita: string): Promise<FormularioLineaBase> {
    const agricultor = await this.importacionAgricultor.initAgricultor(agricultorId);
    const tecnico = await this.importacionAgricultor.initTecnico(tecnicoId, tecnicoName);
    return {
      id: id,
      agricultor: agricultor,
      tecnico: tecnico,
      fechaVisita: fechaVisita,
      secciones: {
          informacionFamilia: {
              preguntas: {
                  miembros: {
                      arreglo: []
                  },
                  familiarDiscapacitado: {
                      respuesta: ""
                  },
                  esposaInvolucradaEntrevista: {
                      respuesta: ""
                  },
                  esposoIncluyeEsposaEntrevista: {
                      respuesta: ""
                  },
                  deseoIngresoAdicionalConyuge: {
                      respuesta: ""
                  },
                  deseoTrabajoMedioTiempoProyectosFuturos: {
                      respuesta: "",
                      preguntas: {
                          comoCual: {
                              respuesta: ""
                          }
                      }
                  },
                  hijoInteresadoEnProyectosRehabilitacionFinca: {
                      respuesta: ""
                  }
              }
          },
          practicasAgricolas: {
              preguntas: {
                  interesElaborarFertilizanteNaturalOrganico: {
                      respuesta: ""
                  },
                  plagasAfectanCultivo: {
                      respuesta: []
                  },
                  enfermedadesAfectanCultivo: {
                      respuesta: []
                  },
                  productoParaPlagas: {
                      respuesta: ""
                  },
                  productoParaEnfermedades: {
                      respuesta: ""
                  },
                  llevaRegistroPerdidasMazorcasXMonilla: {
                      respuesta: "",
                      preguntas: {
                          cantidadPerdidaMazorcas: {
                              respuesta: ""
                          }
                      }
                  },
                  periodoFertilizacion: {
                      respuesta: []
                  },
                  periodoPoda: {
                      respuesta: []
                  },
                  periodoControlMaleza: {
                      respuesta: []
                  },
                  periodoMIPE: {
                      respuesta: []
                  },
                  periodoCosecha: {
                      respuesta: []
                  }
              }
          },
          saludSeguridadOcupacional: {
              preguntas: {
                  accidentesLaboralesUltimoAnio: {
                      respuesta: "",
                      preguntas: {
                          tipoAccidente: {
                              respuesta: ""
                          }
                      }
                  },
                  periodoIntoxicacionPresente: {
                      respuesta: "",
                      preguntas: {
                          producto: {
                              respuesta: ""
                          }
                      }
                  },
                  centroSaludCercano: {
                      respuesta: ""
                  }
              }
          },
          cosecha: {
              preguntas: {
                  periodoCadaTumba: {
                      respuesta: ""
                  },
                  latasCacaoXTumba: {
                      respuesta: ""
                  },
                  realizaEscurridoSecadoCCN51: {
                      respuesta: ""
                  },
                  diasFermentadoCacao: {
                      respuesta: ""
                  }
              }
          },
          venta: {
              preguntas: {
                  almacenaCacaoDespSecado: {
                      respuesta: "",
                      preguntas: {
                          tiempoAlmacenadoCacao: {
                              respuesta: ""
                          }
                      }
                  },
                  propiedadTransporte: {
                      respuesta: ""
                  },
                  tipoTransporte: {
                      respuesta: ""
                  },
                  registroFinancieroFinca: {
                      respuesta: ""
                  },
                  tipoRegistrosFinancierosFinca: {
                      respuesta: ""
                  }
              }
          },
          nivelAsociatividad: {
              preguntas: {
                  perteneceAsocProgrCertif: {
                      respuesta: "",
                      preguntas: {
                          nombreAsociacion: {
                              respuesta: ""
                          },
                          cantidadMiembros: {
                              respuesta: ""
                          },
                          recibeBeneficios: {
                              respuesta: ""
                          },
                          tiposBeneficios: {
                              respuesta: [],
                              preguntas: {
                                  otroTiposBeneficios: {
                                      respuesta: ""
                                  }
                              }
                          }
                      }
                  },
                  ayudaOtraInstitucion: {
                      respuesta: "",
                      preguntas: {
                          nombreOtraInstitucion: {
                              respuesta: ""
                          },
                          tipoAyuda: {
                              respuesta: ""
                          }
                      }
                  }
              }
          },
          condicionesLaborales: {
              preguntas: {
                  contrataTrabajadores: {
                      respuesta: "",
                      preguntas: {
                          cantidadTrabajadores: {
                              respuesta: ""
                          }
                      }
                  },
                  areaInicialContrato: {
                      respuesta: ""
                  },
                  tipoContratoTrabajo: {
                      respuesta: ""
                  },
                  contrataMenoresEdad: {
                      respuesta: "",
                      preguntas: {
                          poseePermiso: {
                              respuesta: ""
                          }
                      }
                  },
                  baseContratoAgricola: {
                      respuesta: ""
                  }
              }
          },
          serviciosBasicos: {
              preguntas: {
                  energiaElectrica: {
                      respuesta: ""
                  },
                  tipoAguaConsumoFamiliar: {
                      respuesta: ""
                  }
              }
          },
          conservacionRecursosManejoDesechos: {
              preguntas: {
                  conocimientoManejoDesechos: {
                      respuesta: ""
                  },
                  productoContaminaEcosistema: {
                      respuesta: "",
                      preguntas: {
                          ubicacionDesechosAguasNegras: {
                              respuesta: []
                          }
                      }
                  },
                  tieneArbolesSombrio: {
                      respuesta: ""
                  },
                  cultivaVegetalesHortalizasFrutas: {
                      respuesta: ""
                  },
                  compraProductosMercadoLocales: {
                      respuesta: "",
                      preguntas: {
                          valorPromedioGastado: {
                              respuesta: ""
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
      }
    };
  }
}

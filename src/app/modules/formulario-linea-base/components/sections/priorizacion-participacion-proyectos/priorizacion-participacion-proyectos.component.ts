import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';

@Component({
  selector: 'app-priorizacion-participacion-proyectos',
  templateUrl: './priorizacion-participacion-proyectos.component.html',
  styleUrls: ['./priorizacion-participacion-proyectos.component.scss']
})
export class PriorizacionParticipacionProyectosComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  participacionProyectos: FormGroup;

  opciones: string[] = ["SI", "NO"];

  proyectosIncrementarProductividad: string[] = [
    "RECIBIR PLANTAS DE CACAO NACIONAL",
    "APRENDER ELAB. PRODUCTOS NATURALES"
  ];

  proyectosMejorarCalidad: string[] = [
    "BANDEJAS O CAJONES DE FERMENTACION",
    "TENDALES ELEVADOS DE CAÑA",
    "SECADORAS COMUNITARIAS"
  ];

  proyectosparticipacionProyectos: string[] = [
    "HUERTOS ORGANICOS",
    "DESARROLLO DE VIVEROS",
    "DESARROLLO Y VENTA DE FERTILIZANTES",
    "REHABILITACIÓN DE FINCA",
    "BRIGADA DE PODADORES"
  ];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.participacionProyectos = this.formBuilder.group({
      recibirPlantasCacaoNacional: new FormControl(''),
      aprenderElabProductosNaturales: new FormControl(''),
      tieneAreaLibreParaSembrar: new FormControl(''),
      areaLibre: new FormControl(''),
      necesitaRehaReinjerto: new FormControl(''),
      cantidad: new FormControl(''),
      bandejasCajonesFermentacion: new FormControl(''),
      dispuestoHacerloPropiaCuenta: new FormControl(''),
      tendalesElevadosCania: new FormControl(''),
      secadorasComunitarias: new FormControl(''),
      contarAgrupacionParaProyecto: new FormControl(''),
      huertosOrganicos: new FormControl(''),
      desarrolloViveros: new FormControl(''),
      desarrolloVentaFertilizantes: new FormControl(''),
      rehabilitacionFinca: new FormControl(''),
      brigadaPodadores: new FormControl(''),
      contarExperienciaPoda: new FormControl(''),
      aniosExperiencia: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  hayAreaLibre(): boolean {
    const hayAreaLibre = this.participacionProyectos.get('tieneAreaLibreParaSembrar').value;
    return hayAreaLibre === 'SI';
  }

  necesitaRehab(): boolean {
    const necesitaRehab = this.participacionProyectos.get('necesitaRehaReinjerto').value;
    return necesitaRehab === 'SI';
  }

  bandejasCartonesFerm(): boolean {
    return this.participacionProyectos.get('bandejasCajonesFermentacion').value === 'SI';
  }
  
  secadorasComunitarias(): boolean {
    return this.participacionProyectos.get('secadorasComunitarias').value === 'SI';
  }

  tieneExperiencia() {
    const tieneExperiencia = this.participacionProyectos.get('contarExperienciaPoda').value;
    return tieneExperiencia === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        incrementarProductividad: {
          respuesta: "",
          preguntas: {
            recibirPlantasCacaoNacional: {
              respuesta: this.participacionProyectos.value.recibirPlantasCacaoNacional,
              preguntas: {
                tieneAreaLibreParaSembrar: {
                  respuesta: this.participacionProyectos.value.tieneAreaLibreParaSembrar,
                  preguntas: {
                    areaLibre: {
                      respuesta: this.participacionProyectos.value.areaLibre
                    }
                  }
                },
                necesitaRehaReinjerto: {
                  respuesta: this.participacionProyectos.value.necesitaRehaReinjerto,
                  preguntas: {
                    cantidad: {
                      respuesta: this.participacionProyectos.value.cantidad
                    }
                  }
                }
              }
            },
            aprenderElabProductosNaturales: {
              respuesta: this.participacionProyectos.value.aprenderElabProductosNaturales
            }
          }
        },
        mejorarCalidadCacao: {
          respuesta: "",
          preguntas: {
            bandejasCajonesFermentacion: {
              respuesta: this.participacionProyectos.value.bandejasCajonesFermentacion,
              preguntas: {
                dispuestoHacerloPropiaCuenta: {
                  respuesta: this.participacionProyectos.value.dispuestoHacerloPropiaCuenta
                }
              }
            },
            tendalesElevadosCania: {
              respuesta: this.participacionProyectos.value.tendalesElevadosCania
            },
            secadorasComunitarias: {
              respuesta: this.participacionProyectos.value.secadorasComunitarias,
              preguntas: {
                contarAgrupacionParaProyecto: {
                  respuesta: this.participacionProyectos.value.contarAgrupacionParaProyecto
                }
              }
            }
          }
        },
        diversificacionIngresos: {
          respuesta: "",
          preguntas: {
            huertosOrganicos: {
              respuesta: this.participacionProyectos.value.huertosOrganicos
            },
            desarrolloViveros: {
              respuesta: this.participacionProyectos.value.desarrolloViveros
            },
            desarrolloVentaFertilizantes: {
              respuesta: this.participacionProyectos.value.desarrolloVentaFertilizantes
            },
            rehabilitacionFinca: {
              respuesta: this.participacionProyectos.value.rehabilitacionFinca
            },
            brigadaPodadores: {
              respuesta: this.participacionProyectos.value.brigadaPodadores,
              preguntas: {
                contarExperienciaPoda: {
                  respuesta: this.participacionProyectos.value.contarExperienciaPoda,
                  preguntas: {
                    aniosExperiencia: {
                      respuesta: this.participacionProyectos.value.aniosExperiencia
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  }

  setValues(agricultor: Agricultor): void {
    this.participacionProyectos.get('recibirPlantasCacaoNacional')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.respuesta);
    this.participacionProyectos.get('tieneAreaLibreParaSembrar')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.tieneAreaLibreParaSembrar.respuesta);
    this.participacionProyectos.get('areaLibre')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.tieneAreaLibreParaSembrar.preguntas.areaLibre.respuesta);
    this.participacionProyectos.get('necesitaRehaReinjerto')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.necesitaRehaReinjerto.respuesta);
    this.participacionProyectos.get('cantidad')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.recibirPlantasCacaoNacional.preguntas.necesitaRehaReinjerto.preguntas.cantidad.respuesta);
    this.participacionProyectos.get('aprenderElabProductosNaturales')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.incrementarProductividad.preguntas.aprenderElabProductosNaturales.respuesta);
    this.participacionProyectos.get('bandejasCajonesFermentacion')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.respuesta);
    this.participacionProyectos.get('dispuestoHacerloPropiaCuenta')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.bandejasCajonesFermentacion.preguntas.dispuestoHacerloPropiaCuenta.respuesta);
    this.participacionProyectos.get('tendalesElevadosCania')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.tendalesElevadosCania.respuesta);
    this.participacionProyectos.get('secadorasComunitarias')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.secadorasComunitarias.respuesta);
    this.participacionProyectos.get('contarAgrupacionParaProyecto')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.mejorarCalidadCacao.preguntas.secadorasComunitarias.preguntas.contarAgrupacionParaProyecto.respuesta);
    this.participacionProyectos.get('huertosOrganicos')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.huertosOrganicos.respuesta);
    this.participacionProyectos.get('desarrolloViveros')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.desarrolloViveros.respuesta);
    this.participacionProyectos.get('desarrolloVentaFertilizantes')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.desarrolloVentaFertilizantes.respuesta);
    this.participacionProyectos.get('rehabilitacionFinca')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.rehabilitacionFinca.respuesta);
    this.participacionProyectos.get('brigadaPodadores')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.respuesta);
    this.participacionProyectos.get('contarExperienciaPoda')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.respuesta);
    this.participacionProyectos.get('aniosExperiencia')
      .setValue(agricultor.secciones.priorizacionParticipacionProyectos.preguntas.diversificacionIngresos.preguntas.brigadaPodadores.preguntas.contarExperienciaPoda.preguntas.aniosExperiencia.respuesta);
  }

}

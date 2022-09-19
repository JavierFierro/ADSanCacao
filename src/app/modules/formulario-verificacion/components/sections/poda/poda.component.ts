import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poda',
  templateUrl: './poda.component.html',
  styleUrls: ['./poda.component.css']
})
export class PodaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  poda: FormGroup;

  yesNoAnswer: string[];
  tipoPodaAplica: string[];
  enfermedades: string[];
  plagas: string[];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.poda = this.formBuilder.group({
      realizaPoda: new FormControl(''),
      tipoPoda: new FormControl(''),
      realizaPodaFormacion: new FormControl(''),
      realizaPodaMantenimiento: new FormControl(''),
      realizaPodaFitosanitaria: new FormControl(''),
      realizaPodaRehabilitacion: new FormControl(''),
      podaFormacionEsCorrecta: new FormControl(''),
      podaMantenimientoEsCorrecta: new FormControl(''),
      podaFitosanitariaEsCorrecta: new FormControl(''),
      podaRehabilitacionEsCorrecta: new FormControl(''),
      cortesLaceracionesPlantaMalaPoda: new FormControl(''),
      mazorcasEstadoPudricion: new FormControl(''),
      malaPodaAlbergaPlagasEnfermedades: new FormControl(''),
      plagasMalaPoda: new FormControl(''),
      enfermedadesMalaPoda: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.tipoPodaAplica = environment.constantes.formularioVerificacion.podaTipoPodaAplica;
    this.enfermedades = environment.constantes.formularioVerificacion.podaEnfermedades;
    this.plagas = environment.constantes.formularioVerificacion.podaPlagas;
  }

  onSubmit() {

  }

  realizaPoda(): boolean {
    return this.poda.get('realizaPoda').value === 'SI';
  }

  realizaPodaFormacion(): boolean {
    //const tipoPodas =  this.poda.get('tipoPoda').value;
    //return tipoPodas.includes('FORMACION');
    return this.poda.get('realizaPodaFormacion').value === 'SI';
  }

  realizaPodaMantenimiento(): boolean {
    //const tipoPodas =  this.poda.get('tipoPoda').value;
    //return tipoPodas.includes('MANTENIMIENTO');
    return this.poda.get('realizaPodaMantenimiento').value === 'SI';
  }

  realizaPodaFitosanitaria(): boolean {
    //const tipoPodas =  this.poda.get('tipoPoda').value;
    //return tipoPodas.includes('FITOSANITARIA');
    return this.poda.get('realizaPodaFitosanitaria').value === 'SI';
  }

  realizaPodaRehabilitacion(): boolean {
    //const tipoPodas =  this.poda.get('tipoPoda').value;
    //return tipoPodas.includes('REHABILITACION');
    return this.poda.get('realizaPodaRehabilitacion').value === 'SI';
  }

  hayPlagasEnfermedades(): boolean {
    return this.poda.get('malaPodaAlbergaPlagasEnfermedades').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        realizaPoda: {
          respuesta: this.poda.value.realizaPoda,
          preguntas: {
            tipoPoda: {
              respuesta: this.poda.value.tipoPoda
            },
            realizaPodaFormacion: {
              respuesta: this.poda.value.realizaPodaFormacion,
              preguntas: {
                podaFormacionEsCorrecta: {
                  respuesta: this.poda.value.podaFormacionEsCorrecta
                }
              }
            },
            realizaPodaMantenimiento: {
              respuesta: this.poda.value.realizaPodaMantenimiento,
              preguntas: {
                podaMantenimientoEsCorrecta: {
                  respuesta: this.poda.value.podaMantenimientoEsCorrecta
                }
              }
            },
            realizaPodaFitosanitaria: {
              respuesta: this.poda.value.realizaPodaFitosanitaria,
              preguntas: {
                podaFitosanitariaEsCorrecta: {
                  respuesta: this.poda.value.podaFitosanitariaEsCorrecta
                }
              }
            },
            realizaPodaRehabilitacion: {
              respuesta: this.poda.value.realizaPodaRehabilitacion,
              preguntas: {
                podaRehabilitacionEsCorrecta: {
                  respuesta: this.poda.value.podaRehabilitacionEsCorrecta
                }
              }
            }
          }
        },
        cortesLaceracionesPlantaMalaPoda: {
          respuesta: this.poda.value.cortesLaceracionesPlantaMalaPoda
        },
        mazorcasEstadoPudricion: {
          respuesta: this.poda.value.mazorcasEstadoPudricion
        },
        malaPodaAlbergaPlagasEnfermedades: {
          respuesta: this.poda.value.malaPodaAlbergaPlagasEnfermedades,
          preguntas: {
            plagasMalaPoda: {
              respuesta: this.poda.value.plagasMalaPoda
            },
            enfermedadesMalaPoda: {
              respuesta: this.poda.value.enfermedadesMalaPoda
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.poda.get('realizaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.respuesta);
    this.poda.get('tipoPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.tipoPoda.respuesta);
    this.poda.get('realizaPodaFormacion')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaFormacion.respuesta);
    this.poda.get('realizaPodaMantenimiento')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaMantenimiento.respuesta);
    this.poda.get('realizaPodaFitosanitaria')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaFitosanitaria.respuesta);
    this.poda.get('realizaPodaRehabilitacion')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaRehabilitacion.respuesta);
    this.poda.get('podaFormacionEsCorrecta')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaFormacion.preguntas.podaFormacionEsCorrecta.respuesta);
    this.poda.get('podaMantenimientoEsCorrecta')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaMantenimiento.preguntas.podaMantenimientoEsCorrecta.respuesta);
    this.poda.get('podaFitosanitariaEsCorrecta')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaFitosanitaria.preguntas.podaFitosanitariaEsCorrecta.respuesta);  
    this.poda.get('podaRehabilitacionEsCorrecta')
      .setValue(formularioVerificacion.secciones.poda.preguntas.realizaPoda.preguntas.realizaPodaRehabilitacion.preguntas.podaRehabilitacionEsCorrecta.respuesta);
    this.poda.get('cortesLaceracionesPlantaMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.cortesLaceracionesPlantaMalaPoda.respuesta);
    this.poda.get('mazorcasEstadoPudricion')
      .setValue(formularioVerificacion.secciones.poda.preguntas.mazorcasEstadoPudricion.respuesta);
    this.poda.get('malaPodaAlbergaPlagasEnfermedades')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.respuesta);
    this.poda.get('plagasMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.preguntas.plagasMalaPoda.respuesta);
    this.poda.get('enfermedadesMalaPoda')
      .setValue(formularioVerificacion.secciones.poda.preguntas.malaPodaAlbergaPlagasEnfermedades.preguntas.enfermedadesMalaPoda.respuesta);
  }

}

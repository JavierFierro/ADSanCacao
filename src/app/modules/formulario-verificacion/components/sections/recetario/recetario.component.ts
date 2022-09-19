import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;

  recetario: FormGroup;

  tipoSuelo: string[];
  plazo: string[];
  topografia: string[];
  yesnoanswer: string[];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.recetario = this.formBuilder.group({
      tipoSuelo: new FormControl(''),
      tipoSueloRecomendacion: new FormControl(''),
      tipoSueloPlazo: new FormControl(''),
      tipoSueloCumplimiento: new FormControl(''),

      topografia: new FormControl(''),
      topografiaRecomendacion: new FormControl(''),
      topografiaPlazo: new FormControl(''),      
      topografiaCumplimiento: new FormControl(''),

      analisisSuelo: new FormControl(''),
      analisisSueloRecomendacion: new FormControl(''),
      analisisSueloPlazo: new FormControl(''),      
      analisisSueloCumplimiento: new FormControl(''),

    });
  }

  

  ngOnInit(): void {
    this.tipoSuelo = environment.constantes.formularioVerificacion.recetarioTipoSuelo;
    this.plazo = environment.constantes.formularioVerificacion.plazo;
    this.topografia = environment.constantes.formularioVerificacion.topografia;
    this.yesnoanswer = environment.constantes.formularioVerificacion.yesNoAnswer;
  }

  onSubmit() {

  }

  get seccion(): any {
    return {
      preguntas:{
        tipoSuelo:{
          respuesta: this.recetario.value.tipoSuelo,
          preguntas:{
            
            tipoSueloRecomendacion:{
              respuesta: this.recetario.value.tipoSueloRecomendacion
            },
            tipoSueloPlazo:{
              respuesta: this.recetario.value.tipoSueloPlazo
            },
            tipoSueloCumplimiento:{
              respuesta: this.recetario.value.tipoSueloCumplimiento
            }
          }
        },
        topografia:{
          respuesta: this.recetario.value.topografia,
          preguntas:{
            
            topografiaRecomendacion:{
              respuesta: this.recetario.value.topografiaRecomendacion
            },
            topografiaPlazo:{
              respuesta: this.recetario.value.topografiaPlazo
            },
            topografiaCumplimiento:{
              respuesta: this.recetario.value.topografiaCumplimiento
            }
          }
        },
        analisisSuelo:{
          respuesta: this.recetario.value.analisisSuelo,
          preguntas:{
            
            analisisSueloRecomendacion:{
              respuesta: this.recetario.value.analisisSueloRecomendacion
            },
            analisisSueloPlazo:{
              respuesta: this.recetario.value.analisisSueloPlazo
            },
            analisisSueloCumplimiento:{
              respuesta: this.recetario.value.analisisSueloCumplimiento
            }
          }
        }
      }
      
      
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    // console.log(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.respuesta)
    // // console.log(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.preguntas)

    // //Tipo Suelo
    // this.recetario.get('tipoSuelo')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.respuesta);

    // this.recetario.get('tipoSueloRecomendacion')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.preguntas.tipoSueloRecomendacion.respuesta);

    // this.recetario.get('tipoSueloPlazo')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.preguntas.tipoSueloPlazo.respuesta);

    // this.recetario.get('tipoSueloCumplimiento')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.tipoSuelo.preguntas.tipoSueloCumplimiento.respuesta);

    //Topografia
    // this.recetario.get('topografia')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.topografia.respuesta);

    // this.recetario.get('topografiaRecomendacion')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.topografia.preguntas.topografiaRecomendacion.respuesta);

    // this.recetario.get('topografiaPlazo')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.topografia.preguntas.topografiaPlazo.respuesta);

    // this.recetario.get('topografiaCumplimiento')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.topografia.preguntas.topografiaCumplimiento.respuesta);
    
    
    //Analisis de Suelo
    // this.recetario.get('analisisSuelo')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.analisisSuelo.respuesta);

    // this.recetario.get('analisisSueloRecomendacion')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.analisisSuelo.preguntas.analisisSueloRecomendacion.respuesta);

    // this.recetario.get('analisisSueloPlazo')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.analisisSuelo.preguntas.analisisSueloPlazo.respuesta);

    // this.recetario.get('analisisSueloCumplimiento')
    // .setValue(formularioVerificacion.secciones.recetario.preguntas.analisisSuelo.preguntas.analisisSueloCumplimiento.respuesta);
  }
}

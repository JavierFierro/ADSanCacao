import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';

@Component({
  selector: 'app-origen-plantas',
  templateUrl: './origen-plantas.component.html',
  styleUrls: ['./origen-plantas.component.css']
})
export class OrigenPlantasComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  origenPlantas: FormGroup;

  encargadosPropagacion: string[] = [
    "PRODUCTOR",
    "FAMILIAR",
    "ASESOR EXTERNO",
    "OTRO"
  ]

  conocimientos: string[] = [
    "TECNICO",
    "EMPIRICO"
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.origenPlantas = this.formBuilder.group({
      nombreVivero: new FormControl(''),
      ubicacionVivero: new FormControl(''),
      encargadoPropagacion: new FormControl(''),
      otroEncargadoPropagacion: new FormControl(''),
      tipoConocimiento: new FormControl(''),
      entidadDonacion: new FormControl(''),
      cantidadPlantasRecibidas: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

  otroEncargado() {
    const otroEncargado = this.origenPlantas.get('encargadoPropagacion').value;
    return otroEncargado === 'OTRO';
  }

  get seccion(): any {
    return {
      preguntas: {
        nombreVivero: {
          respuesta: this.origenPlantas.value.nombreVivero
        },
        ubicacionVivero: {
          respuesta: this.origenPlantas.value.ubicacionVivero
        },
        encargadoPropagacion: {
          respuesta: this.origenPlantas.value.encargadoPropagacion,
          preguntas: {
            otroEncargadoPropagacion: {
              respuesta: this.origenPlantas.value.otroEncargadoPropagacion,
            }
          }
        },
        tipoConocimiento: {
          respuesta: this.origenPlantas.value.tipoConocimiento
        },
        entidadDonacion: {
          respuesta: this.origenPlantas.value.entidadDonacion
        },
        cantidadPlantasRecibidas: {
          respuesta: this.origenPlantas.value.cantidadPlantasRecibidas
        }
      }
    };
  }

  setValues(agriculor: Agricultor): void {
    this.origenPlantas.get('nombreVivero')
      .setValue(agriculor.secciones.origenPlantas.preguntas.nombreVivero.respuesta);
    this.origenPlantas.get('ubicacionVivero')
      .setValue(agriculor.secciones.origenPlantas.preguntas.ubicacionVivero.respuesta);
    this.origenPlantas.get('encargadoPropagacion')
      .setValue(agriculor.secciones.origenPlantas.preguntas.encargadoPropagacion.respuesta);
    this.origenPlantas.get('otroEncargadoPropagacion')
      .setValue(agriculor.secciones.origenPlantas.preguntas.encargadoPropagacion.preguntas.otroEncargadoPropagacion.respuesta);
    this.origenPlantas.get('tipoConocimiento')
      .setValue(agriculor.secciones.origenPlantas.preguntas.tipoConocimiento.respuesta);
    this.origenPlantas.get('entidadDonacion')
      .setValue(agriculor.secciones.origenPlantas.preguntas.entidadDonacion.respuesta);
    this.origenPlantas.get('cantidadPlantasRecibidas')
      .setValue(agriculor.secciones.origenPlantas.preguntas.cantidadPlantasRecibidas.respuesta);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';

@Component({
  selector: 'app-cacao-nacional-nuevos-clones',
  templateUrl: './cacao-nacional-nuevos-clones.component.html',
  styleUrls: ['./cacao-nacional-nuevos-clones.component.css']
})
export class CacaoNacionalNuevosClonesComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  cacaoNacionalNuevosClones: FormGroup;

  usosAnteriores: string[] = [
    "BOSQUE",
    "PLANTACION",
    "HUERTA VIEJA",
    "OTRO"
  ]

  variedades: string[] = [
    "103",
    "96",
    "95",
    "800",
    "801",
    "NO SABE",
    "OTRO"
  ]

  variedadesSembradasClas: string[] = ["POSITIVAS", "NEGATIVAS"];

  opcionesPlantulas: string[] = [
    "NEUTRAL",
    "FAVORABLES",
    "DESFAVORABLES"
  ]

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cacaoNacionalNuevosClones = this.formBuilder.group({
      usoAnteriorAreaNueva: new FormControl(''),
      otroUsoAnteriorAreaNueva: new FormControl(''),
      tipoVariedad: new FormControl(''),
      especifiqueOtros: new FormControl(''),
      variedadesSembradasCalificacion: new FormControl(''),
      plantulasCondicionesEdafoclimaticas: new FormControl(''),
      plantulasRendimiento: new FormControl(''),
      plantulasVigorPlanta: new FormControl(''),
      plantulasResistenciaEnfermedades: new FormControl('')
    });
   }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  otroUsoAnteriorAreaNueva() {
    const uso = this.cacaoNacionalNuevosClones.get('usoAnteriorAreaNueva').value;
    return uso === 'OTRO';
  }

  otroTipoVariedad() {
    const tiposVariedad = this.cacaoNacionalNuevosClones.get('tipoVariedad').value;
    return tiposVariedad.includes('OTRO');
  }

  get seccion(): any {
    return {
      preguntas: {
        usoAnteriorAreaNueva: {
          respuesta: this.cacaoNacionalNuevosClones.value.usoAnteriorAreaNueva,
          preguntas: {
            otroUsoAnteriorAreaNueva: {
              respuesta: this.cacaoNacionalNuevosClones.value.otroUsoAnteriorAreaNueva,
            }
          }
        },
        tipoVariedad: {
          respuesta: this.cacaoNacionalNuevosClones.value.tipoVariedad,
          preguntas: {
            especifiqueOtros: {
              respuesta: this.cacaoNacionalNuevosClones.value.especifiqueOtros
            }
          }
        },
        variedadesSembradasCalificacion: {
          respuesta: this.cacaoNacionalNuevosClones.value.variedadesSembradasCalificacion
        },
        plantulasCondicionesEdafoclimaticas: {
          respuesta: this.cacaoNacionalNuevosClones.value.plantulasCondicionesEdafoclimaticas
        },
        plantulasRendimiento: {
          respuesta: this.cacaoNacionalNuevosClones.value.plantulasRendimiento
        },
        plantulasVigorPlanta: {
          respuesta: this.cacaoNacionalNuevosClones.value.plantulasVigorPlanta
        },
        plantulasResistenciaEnfermedades: {
          respuesta: this.cacaoNacionalNuevosClones.value.plantulasResistenciaEnfermedades
        }
      }
    };
  }

  setValues(agricultor: Agricultor): void {
    this.cacaoNacionalNuevosClones.get('usoAnteriorAreaNueva')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.respuesta);
    this.cacaoNacionalNuevosClones.get('otroUsoAnteriorAreaNueva')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.usoAnteriorAreaNueva.preguntas.otroUsoAnteriorAreaNueva.respuesta);
    this.cacaoNacionalNuevosClones.get('tipoVariedad')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.respuesta);
    this.cacaoNacionalNuevosClones.get('especifiqueOtros')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.tipoVariedad.preguntas.especifiqueOtros.respuesta);
    this.cacaoNacionalNuevosClones.get('variedadesSembradasCalificacion')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.variedadesSembradasCalificacion.respuesta);
    this.cacaoNacionalNuevosClones.get('plantulasCondicionesEdafoclimaticas')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasCondicionesEdafoclimaticas.respuesta);
    this.cacaoNacionalNuevosClones.get('plantulasRendimiento')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasRendimiento.respuesta);
    this.cacaoNacionalNuevosClones.get('plantulasVigorPlanta')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasVigorPlanta.respuesta);
    this.cacaoNacionalNuevosClones.get('plantulasResistenciaEnfermedades')
      .setValue(agricultor.secciones.cacaoNacionalNuevosClones.preguntas.plantulasResistenciaEnfermedades.respuesta);
  }

}

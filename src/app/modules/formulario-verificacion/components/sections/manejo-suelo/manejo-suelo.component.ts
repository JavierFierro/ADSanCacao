import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-manejo-suelo',
  templateUrl: './manejo-suelo.component.html',
  styleUrls: ['./manejo-suelo.component.css']
})
export class ManejoSueloComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;
  
  public manejoSuelo: FormGroup;

  tipoSuelo: string[];
  yesNoAnswer: string[];
  maneraCorregirPH: string[];
  productoXTipoQuimico: string[];
  productoXTipoNatural: string[];
  tipoProducto: string;


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.manejoSuelo = this.formBuilder.group({
      tipoSuelo: new FormControl(''),
      capacitacionTomaMuestrasSuelo: new FormControl(''),
      analisisSuelo: new FormControl(''),
      sueloPH: new FormControl(''),
      suelosNivelesAltosAcidez: new FormControl(''),
      corregidoPHSueloFinca: new FormControl(''),
      maneraCorregidoPHSuelo: new FormControl(''),
      // tipoProducto: new FormControl(''),
      tipoProductoQuimico: new FormControl(''),
      tipoProductoNatural: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.tipoSuelo = environment.constantes.formularioVerificacion.manejoSueloTipoSuelo;
    this.yesNoAnswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.maneraCorregirPH = environment.constantes.formularioVerificacion.manejoSueloManeraCorregirPH;
    this.productoXTipoQuimico = environment.constantes.formularioVerificacion.manejoSueloTipoProductoQuimico;
    this.productoXTipoNatural = environment.constantes.formularioVerificacion.manejoSueloTipoProductoNatural;
  }

  onSubmit() {

  }

  haRealizadoAnalisis(): boolean {
    return this.manejoSuelo.get('analisisSuelo').value === 'SI';
  }

  hayNivelesAltosAcidez(): boolean {
    return this.manejoSuelo.get('suelosNivelesAltosAcidez').value === 'SI';
  }

  haCorregidoPh(): boolean {
    return this.manejoSuelo.get('corregidoPHSueloFinca').value === 'SI';
  }

  productoQuimicoSelected(): boolean {
    const manerasCorregido = this.manejoSuelo.get('maneraCorregidoPHSuelo').value;
    return manerasCorregido.includes('QUIMICO');
  }

  productoNaturalSelected(): boolean {
    const manerasCorregido = this.manejoSuelo.get('maneraCorregidoPHSuelo').value;
    return manerasCorregido.includes('NATURAL');
  }

  get seccion(): any {
    return {
      preguntas: {
        tipoSuelo: {
          respuesta: this.manejoSuelo.value.tipoSuelo
        },
        capacitacionTomaMuestrasSuelo: {
          respuesta: this.manejoSuelo.value.capacitacionTomaMuestrasSuelo
        },
        analisisSuelo: {
          respuesta: this.manejoSuelo.value.analisisSuelo,
          preguntas: {
            sueloPH: {
              respuesta: this.manejoSuelo.value.sueloPH
            }
          }
        },
        suelosNivelesAltosAcidez: {
          respuesta: this.manejoSuelo.value.suelosNivelesAltosAcidez,
          preguntas: {
            corregidoPHSueloFinca: {
              respuesta: this.manejoSuelo.value.corregidoPHSueloFinca
            }
          }
        },
        maneraCorregidoPHSuelo: {
          respuesta: this.manejoSuelo.value.maneraCorregidoPHSuelo,
          preguntas: {
            tipoProductoQuimico: {
              respuesta: this.manejoSuelo.value.tipoProductoQuimico
            },
            tipoProductoNatural: {
              respuesta: this.manejoSuelo.value.tipoProductoNatural
            }
          }
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    this.manejoSuelo.get('tipoSuelo')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.tipoSuelo.respuesta);
    this.manejoSuelo.get('capacitacionTomaMuestrasSuelo')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.capacitacionTomaMuestrasSuelo.respuesta);
    this.manejoSuelo.get('analisisSuelo')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.analisisSuelo.respuesta);
    this.manejoSuelo.get('sueloPH')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.analisisSuelo.preguntas.sueloPH.respuesta);
    this.manejoSuelo.get('suelosNivelesAltosAcidez')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.suelosNivelesAltosAcidez.respuesta);
    this.manejoSuelo.get('corregidoPHSueloFinca')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.suelosNivelesAltosAcidez.preguntas.corregidoPHSueloFinca.respuesta);
    this.manejoSuelo.get('maneraCorregidoPHSuelo')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.maneraCorregidoPHSuelo.respuesta);
    this.manejoSuelo.get('tipoProductoQuimico')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.maneraCorregidoPHSuelo.preguntas.tipoProductoQuimico.respuesta);
    this.manejoSuelo.get('tipoProductoNatural')
      .setValue(formularioVerificacion.secciones.manejoSuelo.preguntas.maneraCorregidoPHSuelo.preguntas.tipoProductoNatural.respuesta);
  }

}

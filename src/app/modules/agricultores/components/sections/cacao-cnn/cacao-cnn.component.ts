import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { Permiso } from 'src/app/interfaces/tecnico';

@Component({
  selector: 'app-cacao-cnn',
  templateUrl: './cacao-cnn.component.html',
  styleUrls: ['./cacao-cnn.component.css']
})
export class CacaoCNNComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public cacaoCNN: FormGroup;

  options: string[] = ['SI', 'NO'];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.cacaoCNN =  this.formBuilder.group({
      areaTotalCNN: new FormControl(''),
      areaProduccion: new FormControl(''),
      edadCacaoProductivo: new FormControl(''),
      areaRecienSembrada: new FormControl(''),
      edadCacaoReciente: new FormControl(''),
      produccionAnioAnteriorCacaoCNN: new FormControl(''),
      precioPromedio: new FormControl(''),
      tieneCacaoImproductivo: new FormControl(''),
      cuantasHectareasImproductivo: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  public isFicticio(): boolean {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    return loggedTecnico.permiso === Permiso.Ficticio;
  }

  tieneCacaoImproductivo(): boolean {
    return this.cacaoCNN.get('tieneCacaoImproductivo').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        areaTotalCNN: {
          respuesta: this.cacaoCNN.value.areaTotalCNN
        },
        areaProduccion: {
          respuesta: this.cacaoCNN.value.areaProduccion
        },
        edadCacaoProductivo: {
          respuesta: this.cacaoCNN.value.edadCacaoProductivo
        },
        areaRecienSembrada: {
          respuesta: this.cacaoCNN.value.areaRecienSembrada
        },
        edadCacaoReciente: {
          respuesta: this.cacaoCNN.value.edadCacaoReciente
        },
        produccionAnioAnteriorCacaoCNN: {
          respuesta: this.cacaoCNN.value.produccionAnioAnteriorCacaoCNN
        },
        precioPromedio: {
          respuesta: this.cacaoCNN.value.precioPromedio
        },
        tieneCacaoImproductivo: {
          respuesta: this.cacaoCNN.value.tieneCacaoImproductivo,
          preguntas: {
            cuantasHectareasImproductivo: {
              respuesta: this.cacaoCNN.value.cuantasHectareasImproductivo
            }
          }
        }
      }
    };
  }

  setValues(agricultor: Agricultor): void {
    this.cacaoCNN.get('areaTotalCNN')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.areaTotalCNN.respuesta);
    this.cacaoCNN.get('areaProduccion')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.areaProduccion.respuesta);
    this.cacaoCNN.get('edadCacaoProductivo')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.edadCacaoProductivo.respuesta);
    this.cacaoCNN.get('areaRecienSembrada')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.areaRecienSembrada.respuesta);
    this.cacaoCNN.get('edadCacaoReciente')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.edadCacaoReciente.respuesta);
    this.cacaoCNN.get('produccionAnioAnteriorCacaoCNN')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.produccionAnioAnteriorCacaoCNN.respuesta);
    this.cacaoCNN.get('precioPromedio')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.precioPromedio.respuesta);
    this.cacaoCNN.get('tieneCacaoImproductivo')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.tieneCacaoImproductivo.respuesta);
    this.cacaoCNN.get('cuantasHectareasImproductivo')
      .setValue(agricultor.secciones.cacaoCNN.preguntas.tieneCacaoImproductivo.preguntas.cuantasHectareasImproductivo.respuesta);
  }

}

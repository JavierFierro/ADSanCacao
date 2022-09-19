import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { Permiso } from 'src/app/interfaces/tecnico';

@Component({
  selector: 'app-informacion-finca',
  templateUrl: './informacion-finca.component.html',
  styleUrls: ['./informacion-finca.component.css']
})
export class InformacionFincaComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  public informacionFinca: FormGroup;

  options: string[] = ['SI', 'NO'];

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.informacionFinca = this.formBuilder.group({
      provincia: new FormControl(''),
      canton: new FormControl(''),
      parroquia: new FormControl(''),
      recinto: new FormControl(''),
      nombreFinca: new FormControl(''),
      descripcionLlegarFinca: new FormControl(''),
      casaProductorDentroFinca: new FormControl(''),
      descripcionLlegarCasa: new FormControl('')
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

  public casaProductorFinca(): boolean {
    return this.informacionFinca.get('casaProductorDentroFinca').value === 'SI';
  }

  get seccion(): any {
    return {
      preguntas: {
        provincia: {
          respuesta: this.informacionFinca.value.provincia
        },
        canton: {
          respuesta: this.informacionFinca.value.canton
        },
        parroquia: {
          respuesta: this.informacionFinca.value.parroquia
        },
        recinto: {
          respuesta: this.informacionFinca.value.recinto
        },
        nombreFinca: {
          respuesta: this.informacionFinca.value.nombreFinca
        },
        descripcionLlegarFinca: {
          respuesta: this.informacionFinca.value.descripcionLlegarFinca
        },
        casaProductorDentroFinca: {
          respuesta: this.informacionFinca.value.casaProductorDentroFinca,
          preguntas: {
            descripcionLlegarCasa: {
              respuesta: this.informacionFinca.value.descripcionLlegarCasa
            }
          }
        }
      }
    };
  }

  setValues(agricultor: Agricultor): void {
    this.informacionFinca.get('provincia')
      .setValue(agricultor.secciones.informacionFinca.preguntas.provincia.respuesta);
    this.informacionFinca.get('canton')
      .setValue(agricultor.secciones.informacionFinca.preguntas.canton.respuesta);
    this.informacionFinca.get('parroquia')
      .setValue(agricultor.secciones.informacionFinca.preguntas.parroquia.respuesta);
    this.informacionFinca.get('recinto')
      .setValue(agricultor.secciones.informacionFinca.preguntas.recinto.respuesta);
    this.informacionFinca.get('nombreFinca')
      .setValue(agricultor.secciones.informacionFinca.preguntas.nombreFinca.respuesta);
    this.informacionFinca.get('descripcionLlegarFinca')
      .setValue(agricultor.secciones.informacionFinca.preguntas.descripcionLlegarFinca.respuesta);
    this.informacionFinca.get('casaProductorDentroFinca')
      .setValue(agricultor.secciones.informacionFinca.preguntas.casaProductorDentroFinca.respuesta);
    this.informacionFinca.get('descripcionLlegarCasa')
      .setValue(agricultor.secciones.informacionFinca.preguntas.casaProductorDentroFinca.preguntas.descripcionLlegarCasa.respuesta);
  }
  
}

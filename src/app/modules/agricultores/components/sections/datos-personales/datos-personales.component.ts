import { Component, Input, OnInit,AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { Permiso } from 'src/app/interfaces/tecnico';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularios/formulario-linea-base.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularios/formulario-verificacion.service';
import { environment } from 'src/environments/environment';
import { AgricultorService } from '../../../../core/services/agriculor/agricultor.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss']
})
export class DatosPersonalesComponent implements OnInit, AfterViewInit  {
  @Input()
  public parentForm: FormGroup;

  agricultor: Agricultor;

  nombreTecnico: string;

  tecnicoReciente: any;

  fechaVisitaReciente: any;

  formulariosLineaBase: FormularioLineaBase[];
  formulariosVerificacion: FormularioVerificacion[];

  estados: string[];
  generos!: string[];
  estadosCiviles!: string[];
  educacion!: string[];
  discapacidad!: string[];
  minDate = new Date();
  maxDate18Years!: Date;

  id = this.activatedRoute.snapshot.paramMap.get("id");

  public datosPersonales = new FormGroup({
    cedula: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    estado: new FormControl(''),
    fechaNacimiento: new FormControl('', Validators.required),
    genero: new FormControl('', Validators.required),
    estadoCivil: new FormControl('', Validators.required),
    nivelEducacion: new FormControl('', Validators.required),
    celulares: new FormArray([]),
    telefono: new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(7)]),
    isDiscapacitado: new FormControl('', Validators.required),
    tecnico: new FormControl(''),
    fechaVisita: new FormControl('', Validators.required),
    viaPrincipalComunicacion:  new FormControl(''),
    comentariosComunicacion: new FormControl(''),
  });

  constructor(
    private lineaBaseService: FormularioLineaBaseService,
    private verificacionService: FormularioVerificacionService,
    private activatedRoute: ActivatedRoute,
    private agriService: AgricultorService,
  ) {
  }
  ngAfterViewInit(): void {
  }

  ngOnInit() {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    this.nombreTecnico = loggedTecnico.nombre;
    this.initData();
  }

  private async initData() {
    this.estados = environment.constantes.agricultor.estados;
    this.generos = environment.constantes.agricultor.genero;
    this.estadosCiviles = environment.constantes.agricultor.estadoCivil;
    this.educacion = environment.constantes.agricultor.educacion;
    this.discapacidad = environment.constantes.agricultor.discapacidad;
    this.maxDate18Years = this.getMaxDate18YearsFromNow();
  }

  private async fetchLineaBase(agricultor: Agricultor): Promise<void> {
    this.lineaBaseService.listByAgricultor(agricultor.id).subscribe(data => {
      // this.lineaBaseReciente = data[0];
      this.formulariosLineaBase = data;
      this.tecnicoReciente = this.formulariosLineaBase[0].tecnico;
      this.fechaVisitaReciente = this.formulariosLineaBase[0].fechaVisita;
    });
  }

  private async fetchVerificacion(agricultor: Agricultor): Promise<void> {
    this.verificacionService.listByAgricultor(agricultor.id).subscribe(data => {
      this.formulariosVerificacion = data;
    });
  }

  public isFicticio(): boolean {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    return loggedTecnico.permiso === Permiso.Ficticio;
  }

  private getFormItem(key: string): FormControl {
    return this.datosPersonales.get(key) as FormControl;
  }

  getFormArray(key: string): FormArray {
    return this.datosPersonales.get(key) as FormArray;
  }

  downloadVerificacion(): void{
    // this.open()
    this.agriService.descargarVerificacion(this.id, this.datosPersonales.get("nombre").value, this.formulariosVerificacion[this.formulariosVerificacion.length - 1].fechaVisita);
    // this.close()
  }

  downloadLineaBase(): void{
    // console.log(this.id)
    console.log(this.formulariosLineaBase)
    this.agriService.descargarLineaBase(this.id, this.datosPersonales.get("nombre").value, this.formulariosLineaBase[0].fechaVisita);
  }

  createCelularField(): FormGroup {
    return new FormGroup({
      celular:  new FormControl('', [
        Validators.required, Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)
      ])
    });
  }

  addCelular(): void {
    this.getFormArray("celulares").push(this.createCelularField());
  }

  deleteCelular(index: number): void {
    this.getFormArray("celulares").removeAt(index);
  }

  private toStringArray(objectArray: any[]): string[] {
    const arr: string[] = [];
    objectArray.forEach(obj => {
      arr.push(obj["celular"]);
    });
    return arr;
  }

  onSubmit() {
  }

  public async setAgricultor(agricultor: Agricultor): Promise<void> {
    this.agricultor = agricultor;
    await this.fetchLineaBase(this.agricultor);
    await this.fetchVerificacion(this.agricultor);
  }

  get seccion(): any {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    return {
      preguntas: {
        cedula: {
          respuesta: this.datosPersonales.value.cedula
        },
        nombre: {
          respuesta: this.datosPersonales.value.nombre
        },
        estado: {
          respuesta: this.datosPersonales.value.estado
        },
        fechaNacimiento: {
          respuesta: this.convertBackDate(this.datosPersonales.value.fechaNacimiento)
        },
        genero: {
          respuesta: this.datosPersonales.value.genero
        },
        estadoCivil: {
          respuesta: this.datosPersonales.value.estadoCivil
        },
        nivelEducacion: {
          respuesta: this.datosPersonales.value.nivelEducacion
        },
        celulares: {
          respuesta: this.toStringArray(this.datosPersonales.value.celulares)
        },
        telefono: {
          respuesta: this.datosPersonales.value.telefono
        },
        isDiscapacitado: {
          respuesta: this.datosPersonales.value.isDiscapacitado
        },
        tecnico: {
          respuesta: loggedTecnico.nombre
        },
        fechaVisita: {
          respuesta: this.convertBackDate(this.datosPersonales.value.fechaVisita)
        },
        viaPrincipalComunicacion: {
          respuesta: this.datosPersonales.value.viaPrincipalComunicacion
        },
        comentariosComunicacion: {
          respuesta: this.datosPersonales.value.comentariosComunicacion
        }
      }
    };
  }

  reset() {
    this.datosPersonales.reset();
  }

  getErrorMessage(formulario: any) {
    if (formulario.hasError('required')) {
      return 'Debe ingresar un valor';
    } else if (formulario.hasError('pattern')) {
      if (formulario.errors.pattern.requiredPattern == '^[a-zA-Z ]*$') {
        return 'Ingrese caracteres';
      } if (formulario.errors.pattern.requiredPattern == '^[0-9]*$') {
        return 'Ingrese numeros';
      }
    } else if (!formulario.hasError('minLength')) {
      return 'Ingresar un valor de longitud aceptable';
    }
  }

  getMaxDate18YearsFromNow() {
    let today = new Date();
    today.setMonth(today.getMonth() - 216);
    return today;
  }

  setValues(agricultor: Agricultor): void {
    this.datosPersonales.get('cedula')
      .setValue(agricultor.secciones.datosPersonales.preguntas.cedula.respuesta);
    this.datosPersonales.get('nombre')
      .setValue(agricultor.secciones.datosPersonales.preguntas.nombre.respuesta);
    this.datosPersonales.get('estado')
      .setValue(agricultor.secciones.datosPersonales.preguntas.estado.respuesta);
    const fechaNacimiento = this.convertDate(agricultor.secciones.datosPersonales.preguntas.fechaNacimiento.respuesta);
    this.datosPersonales.get('fechaNacimiento')
      .setValue(fechaNacimiento);
    this.datosPersonales.get('genero')
      .setValue(agricultor.secciones.datosPersonales.preguntas.genero.respuesta);
    this.datosPersonales.get('estadoCivil')
      .setValue(agricultor.secciones.datosPersonales.preguntas.estadoCivil.respuesta);
    this.datosPersonales.get('nivelEducacion')
      .setValue(agricultor.secciones.datosPersonales.preguntas.nivelEducacion.respuesta);
    agricultor.secciones.datosPersonales.preguntas.celulares.respuesta.forEach((celular, index) => {
      this.addCelular();
      this.getFormArray("celulares").controls[index].get("celular").setValue(celular);
    });
    this.datosPersonales.get('telefono')
      .setValue(agricultor.secciones.datosPersonales.preguntas.telefono.respuesta);
    this.datosPersonales.get('isDiscapacitado')
      .setValue(agricultor.secciones.datosPersonales.preguntas.isDiscapacitado.respuesta);
    this.datosPersonales.get('tecnico')
      .setValue(agricultor.secciones.datosPersonales.preguntas.tecnico.respuesta);
    this.nombreTecnico = agricultor.secciones.datosPersonales.preguntas.tecnico.respuesta;

    const fechaVisita = this.convertDate(agricultor.secciones.datosPersonales.preguntas.fechaVisita.respuesta);
    this.datosPersonales.get('fechaVisita')
      .setValue(fechaVisita);

    this.datosPersonales.get('viaPrincipalComunicacion')
      .setValue(agricultor.secciones.datosPersonales.preguntas.viaPrincipalComunicacion.respuesta);
    this.datosPersonales.get('comentariosComunicacion')
      .setValue(agricultor.secciones.datosPersonales.preguntas.comentariosComunicacion.respuesta);
  }

  convertBackDate(date:Date){
    
    const localDate = date.toLocaleDateString("en-US");
    const arrValues = localDate.split('/');
    const dateString = arrValues[1] + "/" + arrValues[0] + "/" + arrValues[2];

    return dateString;
  }

  convertDate(date: any): Date {
    if(date == ''){
      return new Date();
    }else if (typeof date === 'string') {
      // console.log(date);
      const arrValues = date.split('/');
      const dateString = arrValues[2] + "-" + arrValues[1] + "-" + arrValues[0] + " 00:00";
      return new Date(dateString);
    } else {
      const tVisita = date as any;
      return new Date(tVisita.seconds * 1000);
    }
  }

  open(): void {
    Swal.fire({
      title: 'Por favor espere',
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 5000,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  close(): void {
    Swal.close();
  }

}

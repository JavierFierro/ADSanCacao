import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cacao-nacional',
  templateUrl: './cacao-nacional.component.html',
  styleUrls: ['./cacao-nacional.component.css']
})
export class CacaoNacionalComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  cacaoNacional: FormGroup;

  yesNoAnswer: string[];

  constructor(
    private formBuilder: FormBuilder,
  )
  { 
    this.cacaoNacional = this.formBuilder.group({
      areaTotalNacional: new FormControl(''),
      areaTotalNacionalViejo: new FormControl(''),
      edadCacaoViejo: new FormControl(''),
      brotesBasales: new FormControl(''),
      arbolesElite: new FormControl(''),
      areaTotalViejoInjertado: new FormControl(''),
      viejosInjertados: new FormArray([
        new FormGroup({
          areaViejoInjertado: new FormControl(''),
          edadViejoInjertado: new FormControl(''),
        }),
      ]),
      areaTotalNuevosClones: new FormControl(''),
      nuevosClones: new FormArray([
        new FormGroup({
          areaNuevosClones: new FormControl(''),
          edadNuevosClones: new FormControl('')
        })
      ]),
      produccionAnioAnteriorCacaoNacional: new FormControl(''),
      precioPromedioXCacao: new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$")])
    });
  }

  ngOnInit(): void {
    this.yesNoAnswer = environment.constantes.formularioLineaBase.yesNoAnswer;
  }

  onSubmit() {

  }

  calculateAreaTotal(): void {
    const areaNacionalViejo = Number(this.cacaoNacional.value.areaTotalNacionalViejo.replace(',','.'));
    const areaViejoInjertado = Number(this.cacaoNacional.value.areaTotalViejoInjertado.replace(',','.'));
    const areaNuevosClones = Number(this.cacaoNacional.value.areaTotalNuevosClones.replace(',','.'));
    const areaTotal = areaNacionalViejo + areaViejoInjertado + areaNuevosClones;
    this.cacaoNacional.get('areaTotalNacional').setValue(areaTotal.toLocaleString("pt-BR"));
  }

  calculateAreaViejoInjertado(): void {
    let areaTotal = 0;
    const viejosInjertados = this.getFormArray("viejosInjertados").controls;
    for (let viejoInjertado of viejosInjertados) {
      areaTotal += Number(viejoInjertado.value.areaViejoInjertado.replace(',','.'));
    }
    this.cacaoNacional.get('areaTotalViejoInjertado').setValue(areaTotal.toLocaleString("pt-BR"));
    this.calculateAreaTotal();
  }

  calculateAreaNuevosClones(): void {
    let areaTotal = 0;
    const nuevosClones = this.getFormArray("nuevosClones").controls;
    for (let nuevoClon of nuevosClones) {
      areaTotal += Number(nuevoClon.value.areaNuevosClones.replace(',','.'));
    }
    this.cacaoNacional.get('areaTotalNuevosClones').setValue(areaTotal.toLocaleString("pt-BR"));
    this.calculateAreaTotal();
  }

  getFormArray(key: string): FormArray {
    return this.cacaoNacional.get(key) as FormArray;
  }

  createViejoInjertadoField(): FormGroup {
    return new FormGroup({
      areaViejoInjertado: new FormControl(''),
      edadViejoInjertado: new FormControl(''),
    });
  }

  addViejoInjertado(): void {
    this.getFormArray("viejosInjertados").push(this.createViejoInjertadoField());
  }

  deleteViejoInjertado(index: number): void {
    this.getFormArray("viejosInjertados").removeAt(index);
    this.calculateAreaViejoInjertado();
  }

  viejosInjertadosToObject(): any[] {
    const questions: any[] = [];
    for (let value of this.getFormArray("viejosInjertados").controls) {
      const viejoInjertado = {
        areaViejoInjertado: {
          respuesta: value.get("areaViejoInjertado").value
        },
        edadViejoInjertado: {
          respuesta: value.get("edadViejoInjertado").value
        }
      }
      questions.push(viejoInjertado);
    }
    return questions;
  }

  createNuevosClonesField(): FormGroup {
    return new FormGroup({
      areaNuevosClones: new FormControl(''),
      edadNuevosClones: new FormControl(''),
    });
  }

  addNuevosClones(): void {
    this.getFormArray("nuevosClones").push(this.createNuevosClonesField());
  }

  deleteNuevosClones(index: number): void {
    this.getFormArray("nuevosClones").removeAt(index);
    this.calculateAreaNuevosClones();
  }

  nuevosClonesToObject(): any[] {
    const questions: any[] = [];
    for (let value of this.getFormArray("nuevosClones").controls) {
      const nuevosClones = {
        areaNuevosClones: {
          respuesta: value.get("areaNuevosClones").value
        },
        edadNuevosClones: {
          respuesta: value.get("edadNuevosClones").value
        }
      }
      questions.push(nuevosClones);
    }
    return questions;
  }

  getErrorMessage(formulario: any) {
    if (formulario.hasError('required')) {
      return 'Debe ingresar un valor';
    } else if (formulario.hasError('pattern')) {
      if (formulario.errors.pattern.requiredPattern == '^[a-zA-Z ]*$') {
        return 'Ingrese caracteres';
      } if (formulario.errors.pattern.requiredPattern == '^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$') {
        return 'Ingrese numeros';
      }
    } else if (!formulario.hasError('minLength')) {
      return 'Ingresar un valor de longitud aceptable';
    }
  }

  get seccion(): any {
    return {
      preguntas: {
        areaTotalNacional: {
          respuesta: this.cacaoNacional.value.areaTotalNacional
        },
        areaTotalNacionalViejo: {
          respuesta: this.cacaoNacional.value.areaTotalNacionalViejo
        },
        edadCacaoViejo: {
          respuesta: this.cacaoNacional.value.edadCacaoViejo
        },
        brotesBasales: {
          respuesta: this.cacaoNacional.value.brotesBasales
        },
        arbolesElite: {
          respuesta: this.cacaoNacional.value.arbolesElite
        },
        areaTotalViejoInjertado: {
          respuesta: this.cacaoNacional.value.areaTotalViejoInjertado
        },
        viejosInjertados: {
          arreglo: this.viejosInjertadosToObject()
        },
        areaTotalNuevosClones: {
          respuesta: this.cacaoNacional.value.areaTotalNuevosClones
        },
        nuevosClones: {
          arreglo: this.nuevosClonesToObject()
        },
        produccionAnioAnteriorCacaoNacional: {
          respuesta: this.cacaoNacional.value.produccionAnioAnteriorCacaoNacional
        },
        precioPromedioXCacao: {
          respuesta: this.cacaoNacional.value.precioPromedioXCacao
        }
      }
    };
  }

  setViejosInjertados(agricultor: Agricultor): void {
    agricultor.secciones.cacaoNacional.preguntas.viejosInjertados.arreglo.forEach((value, index) => {
      if (index !== 0) {
        this.addViejoInjertado();
      }
      this.getFormArray("viejosInjertados").controls[index].get("areaViejoInjertado").setValue(value["areaViejoInjertado"]["respuesta"]);
      this.getFormArray("viejosInjertados").controls[index].get("edadViejoInjertado").setValue(value["edadViejoInjertado"]["respuesta"]);
    });
  }

  setNuevosClones(agricultor: Agricultor): void {
    agricultor.secciones.cacaoNacional.preguntas.nuevosClones.arreglo.forEach((value, index) => {
      if (index !== 0) {
        this.addNuevosClones();
      }
      this.getFormArray("nuevosClones").controls[index].get("areaNuevosClones").setValue(value["areaNuevosClones"]["respuesta"]);
      this.getFormArray("nuevosClones").controls[index].get("edadNuevosClones").setValue(value["edadNuevosClones"]["respuesta"]);
    });
  }

  setValues(agricultor: Agricultor): void {
    this.cacaoNacional.get('areaTotalNacional')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNacional.respuesta);
    this.cacaoNacional.get('areaTotalNacionalViejo')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNacionalViejo.respuesta);
    this.cacaoNacional.get('edadCacaoViejo')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.edadCacaoViejo.respuesta);
    this.cacaoNacional.get('brotesBasales')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.brotesBasales.respuesta);
    this.cacaoNacional.get('arbolesElite')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.arbolesElite.respuesta);
    this.cacaoNacional.get('areaTotalViejoInjertado')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalViejoInjertado.respuesta);
    this.setViejosInjertados(agricultor);
    this.setNuevosClones(agricultor);
    this.cacaoNacional.get('areaTotalNuevosClones')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta);
    this.cacaoNacional.get('produccionAnioAnteriorCacaoNacional')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.produccionAnioAnteriorCacaoNacional.respuesta);
    this.cacaoNacional.get('precioPromedioXCacao')
      .setValue(agricultor.secciones.cacaoNacional.preguntas.precioPromedioXCacao.respuesta);
  }

}

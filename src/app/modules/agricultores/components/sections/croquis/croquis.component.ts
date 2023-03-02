import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { CanvasComponent } from 'src/app/shared/canvas/canvas.component';

@Component({
  selector: 'app-croquis',
  templateUrl: './croquis.component.html',
  styleUrls: ['./croquis.component.scss']
})
export class CroquisComponent implements OnInit {
  @Input()
  public parentForm: FormGroup;

  agricultor: Agricultor;

  croquis: FormGroup;

  @ViewChild(CanvasComponent) canvasComponent: CanvasComponent;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.croquis =  this.formBuilder.group({
      coordenadasX: new FormControl(''),
      coordenadasY: new FormControl(''),
      productor: new FormControl(''),
      predio: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  public setAgricultor(agricultor: Agricultor): void {
    this.agricultor = agricultor;
  }

  saveCroquis(): string {
    const reference = this.agricultor ? this.agricultor.id : Date.now().toString();
    const croquisPath = this.canvasComponent.saveAgricultorImageInStorage(reference);
    return croquisPath;
  }

  get seccion(): any {
    return {
      preguntas: {
        coordenadasX: {
          respuesta: this.croquis.value.coordenadasX
        },
        coordenadasY: {
          respuesta: this.croquis.value.coordenadasY
        },
        productor: {
          respuesta: this.croquis.value.productor
        },
        predio: {
          respuesta: this.croquis.value.predio
        },
        croquisPath: {
          respuesta: this.saveCroquis()
        }
      }
    };
  }

  setValues(agricultor: Agricultor): void {
    this.croquis.get('coordenadasX')
      .setValue(agricultor.secciones.croquis.preguntas.coordenadasX.respuesta);
    this.croquis.get('coordenadasY')
      .setValue(agricultor.secciones.croquis.preguntas.coordenadasY.respuesta);
    this.croquis.get('productor')
      .setValue(agricultor.secciones.croquis.preguntas.productor.respuesta);
    this.croquis.get('predio')
      .setValue(agricultor.secciones.croquis.preguntas.predio.respuesta);
    this.canvasComponent.setImageOnCanvas(agricultor.secciones.croquis.preguntas.croquisPath.respuesta);
  }

}

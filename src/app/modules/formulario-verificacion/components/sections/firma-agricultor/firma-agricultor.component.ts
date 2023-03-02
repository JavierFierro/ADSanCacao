import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { CanvasComponent } from 'src/app/shared/canvas/canvas.component';

@Component({
  selector: 'app-firma-agricultor',
  templateUrl: './firma-agricultor.component.html',
  styleUrls: ['./firma-agricultor.component.scss']
})
export class FirmaAgricultorComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;
  
  verificacion: FormularioVerificacion;

  firma: FormGroup;

  @ViewChild(CanvasComponent) canvasComponent: CanvasComponent;

  constructor() { }

  ngOnInit(): void {
  }

  public setVerificacion(verificacion: FormularioVerificacion): void {
    this.verificacion = verificacion;
  }

  get seccion(): any {
    return {
      preguntas: {
        firmaPath: {
          respuesta: this.saveFirma()
        }
      }
    };
  }

  onSubmit(): void {
  }

  saveFirma(): string {
    const reference = this.verificacion ? this.verificacion.id : Date.now().toString();
    const firmaPath = this.canvasComponent.saveVerificacionImageInStorage(reference);
    return firmaPath;
  }

  setValues(verificacion: FormularioVerificacion): void {
    this.canvasComponent.setImageOnCanvas(verificacion.secciones.firmaAgricultor.preguntas.firmaPath.respuesta);
  }

}

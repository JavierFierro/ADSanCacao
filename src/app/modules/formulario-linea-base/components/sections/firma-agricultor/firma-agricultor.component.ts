import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { CanvasComponent } from 'src/app/shared/canvas/canvas.component';

@Component({
  selector: 'app-firma-agricultor',
  templateUrl: './firma-agricultor.component.html',
  styleUrls: ['./firma-agricultor.component.scss']
})
export class FirmaAgricultorComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;

  lineaBase: FormularioLineaBase;

  firma: FormGroup;

  @ViewChild(CanvasComponent) canvasComponent: CanvasComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  public setLineaBase(lineaBase: FormularioLineaBase): void {
    this.lineaBase = lineaBase;
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

  saveFirma(): string {
    const reference = this.lineaBase ? this.lineaBase.id : Date.now().toString();
    const firmaPath = this.canvasComponent.saveLineaBaseImageInStorage(reference);
    return firmaPath;
  }

  setValues(lineaBase: FormularioLineaBase): void {
    this.canvasComponent.setImageOnCanvas(lineaBase.secciones.firmaAgricultor.preguntas.firmaPath.respuesta);
  }
}

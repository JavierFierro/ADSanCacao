import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-revision-plantas',
  templateUrl: './revision-plantas.component.html',
  styleUrls: ['./revision-plantas.component.scss']
})
export class RevisionPlantasComponent implements OnInit {

  @Input()
  public parentForm: FormGroup;

  revisionPlantas: FormGroup;

  yesnoanswer: string[];

  causasPrincipalesMortalidad: string [];

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.revisionPlantas = this.formBuilder.group({
      beneficiarioPlantas: new FormControl(''),
      fichaMonitoreo: new FormControl(''),
      porcentajeExito: new FormControl(''),
      causasMortalidad: new FormControl(''),
      otrascausasMortalidad: new FormControl(''),
      reportePlagas: new FormControl(''),
      reporteEnfermedades: new FormControl(''),
      presentaAnexos: new FormControl(''),
      implementaHuertos: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.yesnoanswer = environment.constantes.formularioVerificacion.yesNoAnswer;
    this.causasPrincipalesMortalidad = environment.constantes.formularioVerificacion.causasPrincipalesMortalidad;
  }

  onSubmit() {

  }

  otrascausasMortalidad(): boolean {
    return this.revisionPlantas.get('causasMortalidad').value === 'OTROS';
  }

  get seccion(): any {
    return {
      preguntas:{
        beneficiarioPlantasCacao:{
          respuesta: this.revisionPlantas.value.beneficiarioPlantas,
        },
        fichaMonitoreoPlantas:{
          respuesta: this.revisionPlantas.value.fichaMonitoreo,
        },
        porcentajeExitoPlantas:{
          respuesta: this.revisionPlantas.value.porcentajeExito,
        },
        causasPrincipalesMortalidad:{
          respuesta: this.revisionPlantas.value.causasMortalidad,
          preguntas:{
            otrasCausasPrincipalesMortalidad:{
              respuesta: this.revisionPlantas.value.otrascausasMortalidad
            }
          }
        },
        reportePlagas:{
          respuesta: this.revisionPlantas.value.reportePlagas,
        },
        reporteEnfermedades:{
          respuesta: this.revisionPlantas.value.reporteEnfermedades,
        },
        presentaAnexos:{
          respuesta: this.revisionPlantas.value.presentaAnexos,
        },
        implementaHuertosOrganicos:{
          respuesta: this.revisionPlantas.value.implementaHuertos,
        }
      }
    };
  }

  setValues(formularioVerificacion: FormularioVerificacion): void {
    // console.log(formularioVerificacion.secciones.revisionPlantas.preguntas.beneficiarioPlantasCacao.respuesta)

    //Beneficiario
    // this.revisionPlantas.get('beneficiarioPlantas')
    // .setValue(formularioVerificacion.secciones.revisionPlantas.preguntas.beneficiarioPlantasCacao.respuesta);

  }
}

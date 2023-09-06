import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { AgricultorService } from 'src/app/modules/core/services/agriculor/agricultor.service';
import { PriorizacionParticipacionProyectosComponent } from 'src/app/modules/formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { CacaoCNNComponent } from '../sections/cacao-cnn/cacao-cnn.component';
import { CacaoNacionalNuevosClonesComponent } from '../sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component';
import { CacaoNacionalComponent } from '../sections/cacao-nacional/cacao-nacional.component';
import { CroquisComponent } from '../sections/croquis/croquis.component';
import { DatosPersonalesComponent } from '../sections/datos-personales/datos-personales.component';
import { HectareajeComponent } from '../sections/hectareaje/hectareaje.component';
import { InformacionFincaComponent } from '../sections/informacion-finca/informacion-finca.component';
import { OrigenPlantasComponent } from '../sections/origen-plantas/origen-plantas.component';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';

@Component({
  selector: 'app-edit-agricultor',
  templateUrl: './edit-agricultor.component.html',
  styleUrls: ['./edit-agricultor.component.scss']
})
export class EditAgricultorComponent implements OnInit {

  agricultorForm: FormGroup;
  agricultor: Agricultor;

  disabledGuardar:boolean = false;

  @ViewChild(LoadingComponent) loading: LoadingComponent;
  @ViewChild(DatosPersonalesComponent) datosPersonalesComponent: DatosPersonalesComponent;
  @ViewChild(InformacionFincaComponent) informacionFincaComponent: InformacionFincaComponent;
  @ViewChild(HectareajeComponent) hectareajeComponent: HectareajeComponent;
  @ViewChild(CacaoCNNComponent) cacaoCNNComponent: CacaoCNNComponent;
  @ViewChild(CacaoNacionalComponent) cacaoNacionalComponent: CacaoNacionalComponent;
  @ViewChild(CacaoNacionalNuevosClonesComponent) cacaoNacionalNuevosClonesComponent: CacaoNacionalNuevosClonesComponent;
  @ViewChild(OrigenPlantasComponent) origenPlantasComponent: OrigenPlantasComponent;
  @ViewChild(PriorizacionParticipacionProyectosComponent) priorizacionParticipacionProyectosComponent: PriorizacionParticipacionProyectosComponent;
  @ViewChild(CroquisComponent) croquisComponent: CroquisComponent;

  constructor(
    private formBuilder: FormBuilder,
    private agricultorService: AgricultorService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private offlineService: OfflineService
  ) {
    this.agricultorForm = this.formBuilder.group({
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.loading.open();
    this.setAgricultor();
  }

  async setAgricultor() {
    await this.fetchAgricultor();
    this.updateView();
    this.setFormValues();
    this.loading.close();
  }

  updateView() {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.rol != undefined && loggedTecnico.rol === "owner"){
      this.disabledGuardar = true;
    }

    this.changeDetector.detectChanges();
  }

  async fetchAgricultor(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      if(this.offlineService.status === "ONLINE"){
        this.agricultor = await this.agricultorService.get(id);
        this.datosPersonalesComponent.setAgricultor(this.agricultor);
        this.croquisComponent.setAgricultor(this.agricultor);
      }else{
        this.agricultor = await this.agricultorService.getFormById(id);
        this.datosPersonalesComponent.setAgricultor(this.agricultor);
      }
    }
  }

  tieneNuevosClones(): boolean {
    if (this.agricultor) {
      return Number(this.agricultor.secciones.cacaoNacional.preguntas.areaTotalNuevosClones.respuesta) > 0;
    }
    return false;
  }

  reset() {
    this.agricultorForm.reset();
  }

  onSubmit() {
    this.loading.open();
    let agricultorParam: Agricultor = {
      id: "",
      secciones: {
        datosPersonales: this.datosPersonalesComponent.seccion,
        informacionFinca: this.informacionFincaComponent.seccion,
        hectareaje: this.hectareajeComponent.seccion,
        cacaoCNN: this.cacaoCNNComponent.seccion,
        cacaoNacional: this.cacaoNacionalComponent.seccion,
        cacaoNacionalNuevosClones: this.cacaoNacionalNuevosClonesComponent.seccion,
        origenPlantas: this.origenPlantasComponent.seccion,
        priorizacionParticipacionProyectos: this.priorizacionParticipacionProyectosComponent.seccion,
        croquis: this.croquisComponent.seccion
      }
    };
    if (this.agricultor) {
      agricultorParam.id = this.agricultor.id;
    }
    this.agricultorService.set(agricultorParam).then(() => {
      this.loading.success('Listo', 'Agricultor guardado correctamente');
      setTimeout(() => {
        this.router.navigate(['agricultores']);
        this.loading.close();
      }, 1000);
    }).catch((e) => {
      console.log(e);
      this.snackBar.open(e, 'Cerrar', {
        duration: 5000,
      });
    });
  }

  setFormValues(): void {
    if (!(this.agricultor === undefined || this.agricultor === null)) {
      this.datosPersonalesComponent.setValues(this.agricultor);
      this.informacionFincaComponent.setValues(this.agricultor);
      this.hectareajeComponent.setValues(this.agricultor);
      this.cacaoCNNComponent.setValues(this.agricultor);
      this.cacaoNacionalComponent.setValues(this.agricultor);
      this.cacaoNacionalNuevosClonesComponent.setValues(this.agricultor);
      this.origenPlantasComponent.setValues(this.agricultor);
      this.priorizacionParticipacionProyectosComponent.setValues(this.agricultor);
      if(this.offlineService.status === "ONLINE"){
        this.croquisComponent.setValues(this.agricultor);
      }
      
    }
  }

}

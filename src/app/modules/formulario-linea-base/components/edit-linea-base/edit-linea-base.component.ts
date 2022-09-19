import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { InformacionFamiliaComponent } from './../sections/informacion-familia/informacion-familia.component';
import { PracticasAgricolasComponent } from './../sections/practicas-agricolas/practicas-agricolas.component';
import { SaludSeguridadOcupacionalComponent } from './../sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { CosechaComponent } from './../sections/cosecha/cosecha.component';
import { VentaComponent } from './../sections/venta/venta.component';
import { NivelAsociatividadComponent } from './../sections/nivel-asociatividad/nivel-asociatividad.component';
import { CondicionesLaboralesComponent } from './../sections/condiciones-laborales/condiciones-laborales.component';
import { ServiciosBasicosComponent } from './../sections/servicios-basicos/servicios-basicos.component';
import { ConservacionRecursosManejoDesechosComponent } from './../sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularios/formulario-linea-base.service';
import { AgricultorService } from 'src/app/modules/core/services/agriculor/agricultor.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';

@Component({
  selector: 'app-edit-linea-base',
  templateUrl: './edit-linea-base.component.html',
  styleUrls: ['./edit-linea-base.component.scss']
})
export class EditLineaBaseComponent implements OnInit {

  formularioLineaBase: FormularioLineaBase;
  lineaBaseForm: FormGroup;
  agricultor: Agricultor;
  listaAgricultores: Agricultor[];
  filteredListAgricultores: Agricultor[] = [];

  @ViewChild(LoadingComponent) loading: LoadingComponent;
  @ViewChild(InformacionFamiliaComponent) informacionFamiliaComponent: InformacionFamiliaComponent;
  @ViewChild(PracticasAgricolasComponent) practicasAgricolasComponent: PracticasAgricolasComponent;
  @ViewChild(SaludSeguridadOcupacionalComponent) saludSeguridadOcupacionalComponent: SaludSeguridadOcupacionalComponent;
  @ViewChild(CosechaComponent) cosechaComponent: CosechaComponent;
  @ViewChild(VentaComponent) ventaComponent: VentaComponent;
  @ViewChild(NivelAsociatividadComponent) nivelAsociatividadComponent: NivelAsociatividadComponent;
  @ViewChild(CondicionesLaboralesComponent) condicionesLaboralesComponent: CondicionesLaboralesComponent;
  @ViewChild(ServiciosBasicosComponent) serviciosBasicosComponent: ServiciosBasicosComponent;
  @ViewChild(ConservacionRecursosManejoDesechosComponent) conservacionRecursosManejoDesechosComponent: ConservacionRecursosManejoDesechosComponent;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioLineaBaseService,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {
    this.lineaBaseForm = this.formBuilder.group({
      agricultor: new FormControl(''),
      fechaVisita: new FormControl(''),
      tecnico: new FormControl(''),
    });
  }

  ngOnInit() {
    this.initAgricultores();
  }

  ngAfterViewInit() {
    this.loading.open();
    this.setFormulario();
  }

  async initAgricultores(): Promise<void> {
    if (!this.agricultorService.localData) {
      this.agricultorService.initData();
    }
    this.agricultorService.localData.subscribe(data => {
      this.listaAgricultores = data;
    });
  }

  async setFormulario() {
    await this.fetchFormulario();
    await this.fetchAgricultor();
    this.updateView();
    this.setFormValues();
    this.loading.close();
  }

  updateView() {
    this.changeDetector.detectChanges();
  }

  filterList(val: string) {
    if (val === "") {
      this.filteredListAgricultores = [];
    } else {
      this.filteredListAgricultores = this.listaAgricultores.filter((agricultor) => 
        agricultor.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(val.toLocaleLowerCase())
      );
    }
  }

  async fetchFormulario(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      const formulario = await this.formularioService.get(id);
      this.formularioLineaBase = formulario;
    }
  }

  async fetchAgricultor(): Promise<void> {
    if (!this.isFormEmpty()) {
      this.agricultor = await this.agricultorService.get(this.formularioLineaBase.agricultor.id);
      for (let agricultor of this.listaAgricultores) {
        if (agricultor.id === this.agricultor.id) {
          this.filteredListAgricultores = [agricultor];
          this.lineaBaseForm.get('agricultor').setValue(agricultor);
          break;
        }
      }
    }
  }

  isFormEmpty() {
    return this.formularioLineaBase === undefined || this.formularioLineaBase === null;
  }

  reset() {
    this.lineaBaseForm.reset();
  }

  async onSubmit() {
    this.loading.open();
    const loggedTecnico = await this.tecnicoService.getLocalUser();
    this.agricultor = this.lineaBaseForm.value.agricultor;
    delete this.lineaBaseForm.value.agricultor;
    let formularioLineaBaseParam: FormularioLineaBase = {
      id: "",
      agricultor: this.agricultor,
      tecnico: loggedTecnico,
      fechaVisita: new Date().toLocaleDateString(),
      secciones: {
        informacionFamilia: this.informacionFamiliaComponent.seccion,
        practicasAgricolas: this.practicasAgricolasComponent.seccion,
        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
        cosecha: this.cosechaComponent.seccion,
        venta: this.ventaComponent.seccion,
        nivelAsociatividad: this.nivelAsociatividadComponent.seccion,
        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
        serviciosBasicos: this.serviciosBasicosComponent.seccion,
        conservacionRecursosManejoDesechos: this.conservacionRecursosManejoDesechosComponent.seccion
      }
    };
    if (this.agricultor) {
      if (this.formularioLineaBase) {
        formularioLineaBaseParam.id = this.formularioLineaBase.id;
      }
      this.formularioService.set(formularioLineaBaseParam).then(() => {
        this.loading.success('Listo', 'Formulario guardado correctamente');
        setTimeout(() => {
          this.router.navigate(['formularios', 'formulariosLineaBase']);
        }, 1000);
      }).catch((e) => {
        console.log(e);
        this.loading.error('Error', 'No se ha podido guardar el formulario');
      });
    } else {
      this.loading.error('Error', 'Debe seleccionar a un agricultor');
    }
  }

  setFormValues(): void {
    if (!this.isFormEmpty()) {
      this.informacionFamiliaComponent.setValues(this.formularioLineaBase);
      this.practicasAgricolasComponent.setValues(this.formularioLineaBase);
      this.saludSeguridadOcupacionalComponent.setValues(this.formularioLineaBase);
      this.cosechaComponent.setValues(this.formularioLineaBase);
      this.ventaComponent.setValues(this.formularioLineaBase);
      this.nivelAsociatividadComponent.setValues(this.formularioLineaBase);
      this.condicionesLaboralesComponent.setValues(this.formularioLineaBase);
      this.serviciosBasicosComponent.setValues(this.formularioLineaBase);
      this.conservacionRecursosManejoDesechosComponent.setValues(this.formularioLineaBase);
      this.lineaBaseForm.get('fechaVisita').setValue(this.formularioLineaBase.fechaVisita)
      this.lineaBaseForm.get('tecnico').setValue(this.formularioLineaBase.tecnico.nombre)
    }
  }

}

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { SaludSeguridadOcupacionalComponent } from '../sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { BodegaComponent } from '../sections/bodega/bodega.component';
import { ControlMalezasComponent } from '../sections/control-malezas/control-malezas.component';
import { DatosFincaComponent } from '../sections/datos-finca/datos-finca.component';
import { FertilizacionComponent } from '../sections/fertilizacion/fertilizacion.component';
import { InjertacionComponent } from '../sections/injertacion/injertacion.component';
import { ManejoSueloComponent } from '../sections/manejo-suelo/manejo-suelo.component';
import { MIPEComponent } from '../sections/mipe/mipe.component';
import { PodaComponent } from '../sections/poda/poda.component';
import { RegistrosProductorComponent } from '../sections/registros-productor/registros-productor.component';
import { CosechaComponent } from '../sections/cosecha/cosecha.component';
import { FermentacionComponent } from '../sections/fermentacion/fermentacion.component';
import { SecadoComponent } from '../sections/secado/secado.component';
import { VentaComponent } from '../sections/venta/venta.component';
import { CondicionesLaboralesComponent } from '../sections/condiciones-laborales/condiciones-laborales.component';
import { ConservacionAguaManejoDesechosComponent } from '../sections/conservacion-agua-manejo-desechos/conservacion-agua-manejo-desechos.component';
import { ConservacionSuelosBiodiversidadComponent } from '../sections/conservacion-suelos-biodiversidad/conservacion-suelos-biodiversidad.component';
import { ProteccionAreasRibereniasComponent } from '../sections/proteccion-areas-riberenias/proteccion-areas-riberenias.component';
import { ProteccionAreasAltoValorConservacionComponent } from '../sections/proteccion-areas-alto-valor-conservacion/proteccion-areas-alto-valor-conservacion.component';
import { DiversificacionIngresosComponent } from '../sections/diversificacion-ingresos/diversificacion-ingresos.component';
import { CapacitacionesBeneficioProgramaComponent } from '../sections/capacitaciones-beneficio-programa/capacitaciones-beneficio-programa.component';
import { RecetarioComponent } from '../sections/recetario/recetario.component';
import { AgricultorService } from 'src/app/modules/core/services/agriculor/agricultor.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularios/formulario-verificacion.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { RevisionPlantasComponent } from '../sections/revision-plantas/revision-plantas.component';
import { Permiso } from 'src/app/interfaces/tecnico';
import { FirmaAgricultorComponent } from '../sections/firma-agricultor/firma-agricultor.component';
import { Tecnico } from '../../../../interfaces/tecnico';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';

@Component({
  selector: 'app-edit-verificacion',
  templateUrl: './edit-verificacion.component.html',
  styleUrls: ['./edit-verificacion.component.scss']
})
export class EditVerificacionComponent implements OnInit {

  formularioVerificacion: FormularioVerificacion;
  verificacionForm: FormGroup;
  listaAgricultores: Agricultor[];
  filteredListAgricultores: Agricultor[] = [];
  agricultor: Agricultor;
  isLoading: boolean = true;

  disabledFecha: boolean = true;
  disabledTecnico: boolean = true;
  disabledGuardar:boolean = false;

  @ViewChild(LoadingComponent) loading: LoadingComponent;
  @ViewChild(DatosFincaComponent) datosFincaComponent: DatosFincaComponent;
  @ViewChild(InjertacionComponent) injertacionComponent: InjertacionComponent;
  @ViewChild(ManejoSueloComponent) manejoSueloComponent: ManejoSueloComponent;
  @ViewChild(FertilizacionComponent) fertilizacionComponent: FertilizacionComponent;
  @ViewChild(BodegaComponent) bodegaComponent: BodegaComponent;
  @ViewChild(ControlMalezasComponent) controlMalezasComponent: ControlMalezasComponent;
  @ViewChild(PodaComponent) podaComponent: PodaComponent;
  @ViewChild(MIPEComponent) mIPEComponent: MIPEComponent;
  @ViewChild(SaludSeguridadOcupacionalComponent) saludSeguridadOcupacionalComponent: SaludSeguridadOcupacionalComponent;
  @ViewChild(RegistrosProductorComponent) registrosProductorComponent: RegistrosProductorComponent;
  @ViewChild(CosechaComponent) cosechaComponent: CosechaComponent;
  @ViewChild(FermentacionComponent) fermentacionComponent: FermentacionComponent;
  @ViewChild(SecadoComponent) secadoComponent: SecadoComponent;
  @ViewChild(VentaComponent) ventaComponent: VentaComponent;
  @ViewChild(CondicionesLaboralesComponent) condicionesLaboralesComponent: CondicionesLaboralesComponent;
  @ViewChild(ConservacionAguaManejoDesechosComponent) conservacionAguaManejoDesechosComponent: ConservacionAguaManejoDesechosComponent;
  @ViewChild(ConservacionSuelosBiodiversidadComponent) conservacionSuelosBiodiversidadComponent: ConservacionSuelosBiodiversidadComponent;
  @ViewChild(ProteccionAreasRibereniasComponent) proteccionAreasRibereniasComponent: ProteccionAreasRibereniasComponent;
  @ViewChild(ProteccionAreasAltoValorConservacionComponent) proteccionAreasAltoValorConservacionComponent: ProteccionAreasAltoValorConservacionComponent;
  @ViewChild(DiversificacionIngresosComponent) diversificacionIngresosComponent: DiversificacionIngresosComponent;
  @ViewChild(CapacitacionesBeneficioProgramaComponent) capacitacionesBeneficioProgramaComponent: CapacitacionesBeneficioProgramaComponent;
  @ViewChild(RecetarioComponent) recetarioComponent: RecetarioComponent;
  @ViewChild(RevisionPlantasComponent) revisionPlantasComponent : RevisionPlantasComponent;
  @ViewChild(FirmaAgricultorComponent) firmaAgricultorComponent: FirmaAgricultorComponent;

  constructor(
    private agricultorService: AgricultorService,
    private formBuilder: FormBuilder,
    private formularioService: FormularioVerificacionService,
    private tecnicoService: TecnicoService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
    private offlineService: OfflineService
  ) {
    this.verificacionForm = this.formBuilder.group({
      agricultor: new FormControl(''),
      fechaVisita: new FormControl(''),
      tecnico: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.initAgricultores();
  }

  ngAfterViewInit() {
    this.loading.open();
    this.setFormulario();
  }

  public isFicticio(): boolean {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    return loggedTecnico.permiso === Permiso.Ficticio;
  }

  async initAgricultores(): Promise<void> {
    if(this.offlineService.status === "ONLINE"){
      if (!this.agricultorService.localData) {
        this.agricultorService.initData();
      }
      this.agricultorService.localData.subscribe(data => {
        this.listaAgricultores = data;
      });
    }else{
      const agricultores:any = await this.agricultorService.getAllAgricultores();
      this.listaAgricultores = agricultores
    }
    
  }

  async setFormulario() {
    await this.fetchFormulario();
    await this.fetchAgricultor();
    this.setFormValues();
    this.updateView();
    this.loading.close();
  }

  updateView() {
    this.isLoading = false;

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.rol != undefined && loggedTecnico.rol === "owner"){
      this.disabledFecha = false;
      this.disabledTecnico = false;
      this.disabledGuardar = true;
    }

    this.changeDetector.detectChanges();
  }

  filterList(val: string) {
    if (val === "") {
      this.filteredListAgricultores = [];
    } else {
      if(this.offlineService.status === "ONLINE"){
        this.filteredListAgricultores = this.listaAgricultores.filter((agricultor) => 
          agricultor.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(val.toLocaleLowerCase())
        );
      }else{
        this.filteredListAgricultores = [];
        const agricultoresList: any[] = this.listaAgricultores.filter((agricultor:any) => 
        agricultor.doc.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(val.toLocaleLowerCase())
        );
        agricultoresList.forEach((agricultor) => {
          let agr = {
            id: agricultor.doc._id,
            secciones: agricultor.doc.secciones
          }
          this.filteredListAgricultores.push(agr);
        })
      }
      
    }
  }

  async fetchFormulario(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      if(this.offlineService.status === "ONLINE"){
        const formulario = await this.formularioService.get(id);
        this.formularioVerificacion = formulario;
        this.firmaAgricultorComponent.setVerificacion(this.formularioVerificacion);
      }else{
        const formulario = await this.formularioService.getFormById(id);
        this.formularioVerificacion = formulario;
      }
    }
  }

  async fetchAgricultor(): Promise<void> {
    if (!this.isFormEmpty()) {
      if(this.offlineService.status === "ONLINE"){
        this.agricultor = await this.agricultorService.get(this.formularioVerificacion.agricultor.id);
        const listAgr: any[] = this.listaAgricultores;
        for (let agricultor of listAgr) {
          if (agricultor.id === this.agricultor.id) {
            this.filteredListAgricultores = [agricultor];
            this.verificacionForm.get('agricultor').setValue(agricultor);
            break;
          }
        }
      }else{
        this.agricultor = await this.agricultorService.getFormById(this.formularioVerificacion.agricultor.id);
        const listAgr: any[] = this.listaAgricultores;
        for (let agricultor of listAgr) {
          if (agricultor.id === this.agricultor.id) {
            this.filteredListAgricultores = [agricultor.doc];
            this.verificacionForm.get('agricultor').setValue(agricultor.doc);
            break;
          }
        }
      }
      
    }
  }

  isFormEmpty() {
    return this.formularioVerificacion === undefined || this.formularioVerificacion === null;
  }

  formattedTodayDate(){
    const today = new Date().toLocaleDateString("en-US");
    let parts = today.split("/");

    const todayFormatted = parts[1] + "/" + parts[0] + "/" + parts[2]
    return todayFormatted;
  }

  setFechaVisita(fechaVisita: any, todayDate: any){
    if(fechaVisita == undefined || fechaVisita == ''){
      return todayDate;
    }
    const dateArray = fechaVisita.toLocaleDateString().split("/");

    const newFecha = dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]
    return newFecha;
  }

  async onSubmit() {
    this.loading.open();
    const loggedTecnico = await this.tecnicoService.getLocalUser();
    this.agricultor = this.verificacionForm.value.agricultor;
    let formularioVerificacionParam: FormularioVerificacion = {
      id: "",
      agricultor: this.agricultor,
      tecnico: this.setTecnico(this.verificacionForm.value.tecnico,loggedTecnico),
      fechaVisita: this.setFechaVisita(this.verificacionForm.value.fechaVisita,this.formattedTodayDate()),
      secciones: {
        datosFinca: this.datosFincaComponent.seccion,
        injertacion: this.injertacionComponent.seccion,
        manejoSuelo: this.manejoSueloComponent.seccion,
        fertilizacion: this.fertilizacionComponent.seccion,
        bodega: this.bodegaComponent.seccion,
        controlMalezas: this.controlMalezasComponent.seccion,
        poda: this.podaComponent.seccion,
        MIPE: this.mIPEComponent.seccion,
        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
        registrosProductor: this.registrosProductorComponent.seccion,
        cosecha: this.cosechaComponent.seccion,
        fermentacion: this.fermentacionComponent.seccion,
        secado: this.secadoComponent.seccion,
        venta: this.ventaComponent.seccion,
        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
        conservacionAguaManejoDesechos: this.conservacionAguaManejoDesechosComponent.seccion,
        conservacionSuelosBiodiversidad: this.conservacionSuelosBiodiversidadComponent.seccion,
        proteccionAreasRiberenias: this.proteccionAreasRibereniasComponent.seccion,
        proteccionAreasAltoValorConservacion: this.proteccionAreasAltoValorConservacionComponent.seccion,
        diversificacionIngresos: this.diversificacionIngresosComponent.seccion,
        capacitacionesBeneficioPrograma: this.capacitacionesBeneficioProgramaComponent.seccion,
        firmaAgricultor: this.firmaAgricultorComponent.seccion
        // recetario: this.recetarioComponent.seccion,
        // revisionPlantas: this.revisionPlantasComponent.seccion
      }
    };
    if (this.agricultor) {
      if (this.formularioVerificacion) {
        formularioVerificacionParam.id = this.formularioVerificacion.id;
      }
      this.formularioService.set(formularioVerificacionParam).then(() => {
        this.loading.success('Listo', 'Formulario guardado correctamente');
        setTimeout(() => {
          this.router.navigate(['formularios', 'formulariosVerificacion']);
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
      this.datosFincaComponent.setValues(this.formularioVerificacion);
      this.injertacionComponent.setValues(this.formularioVerificacion);
      this.manejoSueloComponent.setValues(this.formularioVerificacion);
      this.fertilizacionComponent.setValues(this.formularioVerificacion);
      this.bodegaComponent.setValues(this.formularioVerificacion);
      this.controlMalezasComponent.setValues(this.formularioVerificacion);
      this.podaComponent.setValues(this.formularioVerificacion);
      this.mIPEComponent.setValues(this.formularioVerificacion);
      this.saludSeguridadOcupacionalComponent.setValues(this.formularioVerificacion);
      this.registrosProductorComponent.setValues(this.formularioVerificacion);
      this.cosechaComponent.setValues(this.formularioVerificacion);
      this.fermentacionComponent.setValues(this.formularioVerificacion);
      this.secadoComponent.setValues(this.formularioVerificacion);
      this.ventaComponent.setValues(this.formularioVerificacion);
      this.condicionesLaboralesComponent.setValues(this.formularioVerificacion);
      this.conservacionAguaManejoDesechosComponent.setValues(this.formularioVerificacion);
      this.conservacionSuelosBiodiversidadComponent.setValues(this.formularioVerificacion);
      this.proteccionAreasRibereniasComponent.setValues(this.formularioVerificacion);
      this.proteccionAreasAltoValorConservacionComponent.setValues(this.formularioVerificacion);
      this.diversificacionIngresosComponent.setValues(this.formularioVerificacion);
      this.capacitacionesBeneficioProgramaComponent.setValues(this.formularioVerificacion);
      
      this.verificacionForm.get('fechaVisita').setValue(this.convertDate(this.formularioVerificacion.fechaVisita))
      this.verificacionForm.get('tecnico').setValue(this.formularioVerificacion.tecnico.nombre)

      if(!(this.formularioVerificacion.secciones.firmaAgricultor === undefined) && this.offlineService.status === "ONLINE"){
        this.firmaAgricultorComponent.setValues(this.formularioVerificacion);
      }

      // console.log(this.formularioVerificacion)
      // if(!(this.formularioVerificacion.secciones.recetario === undefined)){
      //   this.recetarioComponent.setValues(this.formularioVerificacion);
      // }
      
      // if(!(this.formularioVerificacion.secciones.revisionPlantas === undefined)){
      //   this.revisionPlantasComponent.setValues(this.formularioVerificacion);
      // }
    }
  }

  setTecnico(tecnico: any, loggedTecnico: Tecnico){
    const editedTecnico: Tecnico = {
      id: "",
      nombre: tecnico,
      correo: "",
      permiso: Permiso.Real,
      rol: ""
    }
    if(tecnico === undefined || tecnico === ''){
      return loggedTecnico;
    }
    return editedTecnico;
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

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

}

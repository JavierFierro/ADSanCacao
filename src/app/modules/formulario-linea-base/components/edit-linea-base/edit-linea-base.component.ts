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
import { FirmaAgricultorComponent } from '../sections/firma-agricultor/firma-agricultor.component';
import { Tecnico } from '../../../../interfaces/tecnico';
import { Permiso } from 'src/app/interfaces/tecnico';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';

@Component({
  selector: 'app-edit-linea-base',
  templateUrl: './edit-linea-base.component.html',
  styleUrls: ['./edit-linea-base.component.scss']
})
export class EditLineaBaseComponent implements OnInit {

  formularioLineaBase: FormularioLineaBase;
  lineaBaseForm: FormGroup;
  agricultor: Agricultor;
  listaAgricultores: any[];
  filteredListAgricultores: Agricultor[] = [];

  disabledFecha: boolean = true;
  disabledTecnico: boolean = true;

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
  @ViewChild(FirmaAgricultorComponent) firmaAgricultorComponent: FirmaAgricultorComponent;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioLineaBaseService,
    private agricultorService: AgricultorService,
    private tecnicoService: TecnicoService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private offlineService: OfflineService
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
    const agricultores:any = await this.agricultorService.getAllAgricultores();
    this.listaAgricultores = agricultores
    // if(this.offlineService.status === "ONLINE"){
    //   if (!this.agricultorService.localData) {
    //     this.agricultorService.initData();
    //   }
    //   this.agricultorService.localData.subscribe(data => {
    //     this.listaAgricultores = data;
    //   });
    // }else{
    //   const agricultores:any = await this.agricultorService.getAllAgricultores();
    //   this.listaAgricultores = agricultores
    // }
    
  }

  async setFormulario() {
    await this.fetchFormulario();
    await this.fetchAgricultor();
    this.updateView();
    this.setFormValues();
    this.loading.close();
  }

  updateView() {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.nombre === "Manuel Matute"){
      this.disabledFecha = false;
      this.disabledTecnico = false;
    }

    this.changeDetector.detectChanges();
  }

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

  filterList(val: string) {
    if (val === "") {
      this.filteredListAgricultores = [];
    }else{
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
        this.formularioLineaBase = formulario;
        console.log(this.formularioLineaBase);
        this.firmaAgricultorComponent.setLineaBase(this.formularioLineaBase);
      }else{
        const formulario = await this.formularioService.getFormById(id);
        this.formularioLineaBase = formulario;
        console.log(this.formularioLineaBase);
      }
      
    }
  }

  async fetchAgricultor(): Promise<void> {
    if (!this.isFormEmpty()) {

      if(this.offlineService.status === "ONLINE"){
        this.agricultor = await this.agricultorService.get(this.formularioLineaBase.agricultor.id);
        for (let agricultor of this.listaAgricultores) {
          if (agricultor.id === this.agricultor.id) {
            this.filteredListAgricultores = [agricultor];
            this.lineaBaseForm.get('agricultor').setValue(agricultor);
            break;
          }
        }
      }else{
        console.log(this.formularioLineaBase.agricultor.id);
        this.agricultor = await this.agricultorService.getFormById(this.formularioLineaBase.agricultor.id);
        for (let agricultor of this.listaAgricultores) {
          if (agricultor.id === this.agricultor.id) {
            this.filteredListAgricultores = [agricultor.doc];
            this.lineaBaseForm.get('agricultor').setValue(agricultor.doc);
            break;
          }
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
      tecnico: this.setTecnico(this.lineaBaseForm.value.tecnico,loggedTecnico),
      fechaVisita: this.setFechaVisita(this.lineaBaseForm.value.fechaVisita,this.formattedTodayDate()),
      secciones: {
        informacionFamilia: this.informacionFamiliaComponent.seccion,
        practicasAgricolas: this.practicasAgricolasComponent.seccion,
        saludSeguridadOcupacional: this.saludSeguridadOcupacionalComponent.seccion,
        cosecha: this.cosechaComponent.seccion,
        venta: this.ventaComponent.seccion,
        nivelAsociatividad: this.nivelAsociatividadComponent.seccion,
        condicionesLaborales: this.condicionesLaboralesComponent.seccion,
        serviciosBasicos: this.serviciosBasicosComponent.seccion,
        conservacionRecursosManejoDesechos: this.conservacionRecursosManejoDesechosComponent.seccion,
        firmaAgricultor: this.firmaAgricultorComponent.seccion
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
      this.lineaBaseForm.get('fechaVisita').setValue(this.convertDate(this.formularioLineaBase.fechaVisita));
      this.lineaBaseForm.get('tecnico').setValue(this.formularioLineaBase.tecnico.nombre);
      if(!(this.formularioLineaBase.secciones.firmaAgricultor === undefined)){
        this.firmaAgricultorComponent.setValues(this.formularioLineaBase);
      }
    }
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

  setTecnico(tecnico: any, loggedTecnico: Tecnico){
    const editedTecnico: Tecnico = {
      id: "",
      nombre: tecnico,
      correo: "",
      permiso: Permiso.Real
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

}

import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormularioVerificacionService } from './../../../core/services/formularios/formulario-verificacion.service';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';
import { FormularioType } from 'src/app/interfaces/formulario';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { of } from 'rxjs';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-formularios-verificacion',
  templateUrl: './formularios-verificacion.component.html',
  styleUrls: ['./formularios-verificacion.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class FormulariosVerificacionComponent extends DataTableComponent<FormularioVerificacion>{

  displayedColumns = ['id', 'agricultor', 'fechaVisita', 'acciones'];

  selected = '0';

  formsVerificacion: any[] = [];

  date = new FormControl(moment());

  selectedYear: string;

  viewButtons: boolean = false;

  chosenYearHandler(normalizedYear: Moment, dp: any) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    dp.close();
    this.selectedYear = normalizedYear.year().toString();
    this.applyFilter(this.selectedYear);
  }

  constructor(
    private tecnicoService: TecnicoService,
    private formularioService: FormularioVerificacionService,
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private importacionService: ImportacionesService,
    private router: Router,
    private offlineService:OfflineService
  ) {
    super(tecnicoService, breakpointObserver, changeDetector, snackBar);
    super.dataService = this.formularioService;
    super.displayedColumns = this.displayedColumns;
  }

  ngOnInit(): void {
    this.getOfflineVerificacion();
    this.updateView();
  }

  updateView() {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.rol != undefined && loggedTecnico.rol === "owner"){
      this.viewButtons = true;
    }

    this.changeDetector.detectChanges();
  }

  getOfflineVerificacion(){
    if(this.offlineService.status === 'OFFLINE'){
      
      this.formularioService.getAllVerificacion().then((verificacionPouch: any[]) => {
        this.offlineService.cachedVerForm = verificacionPouch;
        this.offlineService.cachedVerForm.forEach((VerificacionForm) => {
          let ver = {
            id: VerificacionForm.doc._id,
            agricultor: VerificacionForm.doc.agricultor,
            tecnico: VerificacionForm.doc.tecnico,
            fechaVisita: VerificacionForm.doc.fechaVisita,
          }
          this.formsVerificacion.push(ver);
        });
        this.dataService.localData = of(this.formsVerificacion);
        this.dataSource = new MatTableDataSource(this.formsVerificacion);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
    }
  }

  onItemSelected(row: any): void {
    this.router.navigate(['formularios', 'formulariosVerificacion', 'edit-verificacion', row["id"]]);
  }

  onAddClicked(): void {
    this.router.navigate(['formularios', 'formulariosVerificacion', 'crear-verificacion']);
  }

  async exportAll(): Promise<void> {
    try {
      this.loading.open();
      await this.formularioService.exportAll();
      this.loading.success('Listo', 'Formularios de verificación importados correctamente');
    } catch(error) {
      this.loading.error('Error', 'No se han podido importar los formularios');
    }
  }

  onImportClicked(event: any): void {
    const inputEvent = document.getElementById('csvFileUpload')!.click();
  }

  async import(event: any): Promise<void> {
    try {
      let header: boolean = false;
      const files = event.srcElement.files;
      this.loading.open();
      await this.importacionService.importFormulario(files, header, ';', FormularioType.formularioVerificacion);
      this.loading.success('Listo', 'Formularios de verificación importados correctamente');
    } catch (e) {
      this.loading.error('Error', 'No se han podido importar los formularios');
    }
  }

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

}

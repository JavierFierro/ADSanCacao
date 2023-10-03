import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormularioLineaBaseService } from '../../../core/services/formularios/formulario-linea-base.service';
import { FormularioType } from 'src/app/interfaces/formulario';
import { ImportacionesService } from './../../../core/services/importaciones/importaciones.service';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-formularios-linea-base',
  templateUrl: './formularios-linea-base.component.html',
  styleUrls: ['./formularios-linea-base.component.scss']
})
export class FormulariosLineaBaseComponent extends DataTableComponent<FormularioLineaBase> {

  displayedColumns = ['agricultor', 'fechaVisita', 'acciones'];

  formsLineaBase: any[] = [];

  viewButtons: boolean = false;

  constructor(
    private tecnicoService: TecnicoService,
    private formularioService: FormularioLineaBaseService,
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
    this.getOfflineLineaBase();
    this.updateView();
  }

  ngAfterViewInit(): void {
    
    if(this.offlineService.status === 'ONLINE'){
      setTimeout(async () => {
        this.loading.open();
        await this.initView();
        this.loading.close();
      }, 0);
    }
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  updateView() {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.rol != undefined && loggedTecnico.rol === "owner"){
      this.viewButtons = true;
    }

    this.changeDetector.detectChanges();
  }

  getOfflineLineaBase(){
    if(this.offlineService.status === 'OFFLINE'){
      
      this.formularioService.getAllLineaBase().then((lineaBasePouch: any[]) => {
        this.offlineService.cachedLBForm = lineaBasePouch;
        this.offlineService.cachedLBForm.forEach((LineaBaseForm) => {
          let lb = {
            id: LineaBaseForm.doc._id,
            agricultor: LineaBaseForm.doc.agricultor,
            tecnico: LineaBaseForm.doc.tecnico,
            fechaVisita: LineaBaseForm.doc.fechaVisita,
          }
          this.formsLineaBase.push(lb);
        });
        this.dataSource = new MatTableDataSource(this.formsLineaBase);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
    }
  }

  onItemSelected(row: any): void {
    this.router.navigate(['formularios', 'formulariosLineaBase', 'edit-linea-base', row["id"]]);
  }

  onAddClicked(): void {
    this.router.navigate(['formularios', 'formulariosLineaBase', 'crear-linea-base']);
  }

  async exportAll(): Promise<void> {
    try {
      this.loading.open();
      await this.formularioService.exportAll();
      this.loading.success('Listo', 'Formularios de linea base exportados correctamente');
    } catch(error) {
      this.loading.error('Error', 'No se han podido exportar los formularios');
    }
  }

  onImportClicked(event: any): void {
    const inputEvent = document.getElementById('csvFileUpload')!.click();
  }

  async import(event: any): Promise<void> {
    try {
      let header: boolean = false;
      const files = event.srcElement.files;
      this.loading.openMessage("Importando formularios");
      await this.importacionService.importFormulario(files, header, ';', FormularioType.formularioLineaBase);
    } catch (e) {
      this.loading.error('Error', 'No se han podido importar los formularios');
    }
  }

  async initView(): Promise<void> {
    await this.fetchData();
    this.dataSource.filterPredicate = (data: FormularioLineaBase, filter: string) => {
      return data.agricultor.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

}

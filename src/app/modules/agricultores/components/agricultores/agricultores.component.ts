import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { AgricultorService } from './../../../core/services/agriculor/agricultor.service';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularios/formulario-linea-base.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularios/formulario-verificacion.service';

@Component({
  selector: 'app-agricultores',
  templateUrl: './agricultores.component.html',
  styleUrls: ['./agricultores.component.scss']
})
export class AgricultoresComponent extends DataTableComponent<Agricultor> {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);

  displayedColumns = ['nombre', 'canton','parroquia','recinto', 'acciones'];

  agricultores: any[] = [];

  viewButtons: boolean = false;

  constructor(
    private tecnicoService: TecnicoService,
    private agricultorService: AgricultorService,
    private importacionService: ImportacionesService,
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private router: Router,
    private offlineService: OfflineService,
    private formLBService:FormularioLineaBaseService,
    private formVerificacionService: FormularioVerificacionService
  ) {
    super(tecnicoService, breakpointObserver, changeDetector, snackBar);
    super.dataService = this.agricultorService;
    super.displayedColumns = this.displayedColumns;
    
  }

  formatDate(fechaNacimiento: any): string {
    if ((typeof fechaNacimiento) === 'string') {
      return fechaNacimiento; 
    } else {
      const fecha = new Date(fechaNacimiento.seconds * 1000);
      return fecha.toLocaleDateString();
    }
  }


  ngOnInit(): void {
    this.getOfflineAgricultores();
    this.updateView();
  }

  ngAfterViewInit(): void {
    
    if(this.offlineService.status === 'ONLINE'){
      setTimeout(async () => {
        this.loading.open();
        await this.initView();
        await this.backupData();
        await this.showDataVerification();
      }, 0);
    }
  }

  updateView() {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));

    if(loggedTecnico.rol != undefined && loggedTecnico.rol === "owner"){
      this.viewButtons = true;
    }

    this.changeDetector.detectChanges();
  }

  async backupData(){
    if(localStorage.getItem('init') === undefined || localStorage.getItem('init') === null ){
      localStorage.setItem('init', 'true');
      this.loading.openMessage("Respaldando datos");
      await this.agricultorService.getAll();
      await this.formLBService.getAllFormularios();
      await this.formVerificacionService.getAllFormularios();
    }
  }

  async showDataVerification(){
    return this.loading.openMessageWithTimer("Verificando respaldo", 40000);
  }

  async initView(): Promise<void> {
    await this.fetchData();
    this.dataSource.filterPredicate = (data: Agricultor, filter: string) => {
      return data.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  onItemSelected(row: any): void {
    this.router.navigate(['agricultores', 'edit-agricultor', row["id"]]);
  }

  onAddClicked(): void {
    this.router.navigate(['agricultores', 'edit-agricultor']);
  }

  async exportAll(): Promise<void> {
    try {
      this.loading.open();
      await this.agricultorService.exportAll();
      this.loading.success('Listo', 'Registros exportados correctamente');
    } catch (error) {
      console.log(error);
      this.loading.error('Error', 'No se han podido exportar los registros');
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
      await this.importacionService.importAgricultores(files, header, ';');
      this.loading.success('Listo', 'Agricultores importados correctamente');
    } catch (e) {
      this.loading.error('Error', 'No se han podido importar los agricultores');
    }
  }

  getOfflineAgricultores(){
    if(this.offlineService.status === 'OFFLINE'){
      
      this.agricultorService.getAllAgricultores().then((agricultoresPouch: any[]) => {
        this.offlineService.cachedAgrForm = agricultoresPouch;
        this.offlineService.cachedAgrForm.forEach((agricultor) => {
          let agr = {
            id: agricultor.doc._id,
            secciones: agricultor.doc.secciones
          }
          this.agricultores.push(agr);
        });
        this.dataSource = new MatTableDataSource(this.agricultores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
    }
  }

}

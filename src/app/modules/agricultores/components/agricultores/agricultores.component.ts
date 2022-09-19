import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { AgricultorService } from './../../../core/services/agriculor/agricultor.service';

@Component({
  selector: 'app-agricultores',
  templateUrl: './agricultores.component.html',
  styleUrls: ['./agricultores.component.scss']
})
export class AgricultoresComponent extends DataTableComponent<Agricultor> {

  displayedColumns = ['cedula', 'nombre', 'fechaNacimiento', 'acciones'];

  constructor(
    private tecnicoService: TecnicoService,
    private agricultorService: AgricultorService,
    private importacionService: ImportacionesService,
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private router: Router
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
    
  }

  ngAfterViewInit(): void {
    setTimeout(async () => {
      this.loading.open();
      await this.initView();
      this.loading.close();
    }, 0);
  }

  async initView(): Promise<void> {
    await this.fetchData();
    this.dataSource.filterPredicate = (data: Agricultor, filter: string) => {
      return data.secciones.datosPersonales.preguntas.nombre.respuesta.toLocaleLowerCase().includes(filter.toLocaleLowerCase());
    };
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

}

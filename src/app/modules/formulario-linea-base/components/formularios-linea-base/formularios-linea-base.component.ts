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

@Component({
  selector: 'app-formularios-linea-base',
  templateUrl: './formularios-linea-base.component.html',
  styleUrls: ['./formularios-linea-base.component.scss']
})
export class FormulariosLineaBaseComponent extends DataTableComponent<FormularioLineaBase> {

  displayedColumns = ['id', 'agricultor', 'fechaVisita', 'acciones'];

  constructor(
    private tecnicoService: TecnicoService,
    private formularioService: FormularioLineaBaseService,
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private importacionService: ImportacionesService,
    private router: Router
  ) {
    super(tecnicoService, breakpointObserver, changeDetector, snackBar);
    super.dataService = this.formularioService;
    super.displayedColumns = this.displayedColumns;
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
      this.loading.open();
      await this.importacionService.importFormulario(files, header, ';', FormularioType.formularioLineaBase);
      this.loading.success('Listo', 'Formularios de linea base importados correctamente');
    } catch (e) {
      this.loading.error('Error', 'No se han podido importar los formularios');
    }
  }

  decodeHtmlCharCodes(str) { 
    return str.replace("�","Ñ");
  }

}

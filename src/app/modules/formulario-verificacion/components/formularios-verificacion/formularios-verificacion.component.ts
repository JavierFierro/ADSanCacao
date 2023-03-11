import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataTableComponent } from 'src/app/shared/data-table/data-table.component';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormularioVerificacionService } from './../../../core/services/formularios/formulario-verificacion.service';
import { ImportacionesService } from 'src/app/modules/core/services/importaciones/importaciones.service';
import { FormularioType } from 'src/app/interfaces/formulario';
import { Router } from '@angular/router';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';

@Component({
  selector: 'app-formularios-verificacion',
  templateUrl: './formularios-verificacion.component.html',
  styleUrls: ['./formularios-verificacion.component.scss']
})
export class FormulariosVerificacionComponent extends DataTableComponent<FormularioVerificacion>{

  displayedColumns = ['id', 'agricultor', 'fechaVisita', 'acciones'];

  selected = '0';

  constructor(
    private tecnicoService: TecnicoService,
    private formularioService: FormularioVerificacionService,
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

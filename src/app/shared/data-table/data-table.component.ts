import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IDatabase } from 'src/app/interfaces/database';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements AfterViewInit {
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<T>;

  dataService: IDatabase<T>;

  @ViewChild(ConfirmDialogComponent) confirmDialog: ConfirmDialogComponent;
  @ViewChild(LoadingComponent) loading: LoadingComponent;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);
  @ViewChild(MatSort, { static: true }) sort: MatSort = Object.create(null);

  constructor(
    private tecnicoServiceObj: TecnicoService,
    private breakpointObserverObj: BreakpointObserver,
    private changeDetectorObj: ChangeDetectorRef,
    private snackBarObj: MatSnackBar,
  ) {
    breakpointObserverObj.observe(['(max-width: 600px)']).subscribe(result => {
      this.displayedColumns = result.matches ?
        this.displayedColumns :
        this.displayedColumns;
    });
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    setTimeout(async () => {
      this.loading.open();
      await this.fetchData();
      this.loading.close();
    }, 0);
  }

  fetchData(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      if (!this.dataService.localData) {
        this.dataService.initData();
      }
      this.dataService.localData.subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        resolve();
      });
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  async onTrashCanClicked(row: any): Promise<void> {
    this.confirmDialog.confirm('¿Estas seguro?', 'Es imposible recuperar el registro luego de ser eliminado', 'Aceptar')
      .then(async (isConfirmed) => {
        if (isConfirmed) {
          await this.deleteData(row);
        }
      });
  }

  async onExportClicked(row: any): Promise<void> {
    try {
      this.loading.open();
      await this.exportData(row);
      this.loading.success('Listo', 'Registro exportado correctamente');
    } catch (error) {
      this.loading.error('Error', 'No se ha podido exportar el registro');
    }
  }

  private async deleteData(item: T): Promise<void> {
    try {
      this.loading.open()
      const message = await this.dataService.delete(item);
      this.loading.success('Listo', message);
    } catch (e) {
      this.loading.error('Error', 'No se ha eliminado el registro');
    }
  }

  private async exportData(item: any): Promise<void> {
    try {
      await this.dataService.export(item["id"]);
      this.changeDetectorObj.detectChanges();
    } catch (e) {
      this.snackBarObj.open(e, 'Cerrar', {
        duration: 5000,
      });
    }
  }

}
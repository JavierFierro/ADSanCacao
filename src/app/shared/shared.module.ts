import { NgModule } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { DataTableComponent } from './data-table/data-table.component';
import { LoadingComponent } from './loading/loading.component';

import { DemoMaterialModule } from '../demo-material-module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DataTableComponent,
    LoadingComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    DataTableComponent,
    LoadingComponent,
    ConfirmDialogComponent
  ],
  imports: [
    DemoMaterialModule
  ],
  providers: [MenuItems]
})
export class SharedModule {}

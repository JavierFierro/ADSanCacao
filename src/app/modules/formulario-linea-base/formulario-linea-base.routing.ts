import { Routes } from '@angular/router';
import { EditLineaBaseComponent } from './components/edit-linea-base/edit-linea-base.component';
import { FormulariosLineaBaseComponent } from './components/formularios-linea-base/formularios-linea-base.component';

export const FormulariosLineaBaseRoutes: Routes = [
  {
    path: '',
    component: FormulariosLineaBaseComponent,
    data: {
      title: 'Formularios Línea Base',
    }
  },
  {
    path: 'crear-linea-base',
    component: EditLineaBaseComponent,
    data: {
      title: 'Nuevo Formulario de Línea Base'
    }
  },
  {
    path: 'edit-linea-base/:id',
    component: EditLineaBaseComponent,
    data: {
      title: 'Editar Formulario de Línea Base'
    }
  }
];
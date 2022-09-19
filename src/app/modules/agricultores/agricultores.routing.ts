import { Routes } from '@angular/router';
import { AgricultoresComponent } from './components/agricultores/agricultores.component';
import { EditAgricultorComponent } from './components/edit-agricultor/edit-agricultor.component';

export const AgricultoresRoutes: Routes = [
  {
    path: '',
    component: AgricultoresComponent,
    data: {
      title: 'Agricultores',
    }
  },
  {
    path: 'edit-agricultor',
    component: EditAgricultorComponent,
    data: {
      title: 'Crear Agricultor'
    }
  },
  {
    path: 'edit-agricultor/:id',
    component: EditAgricultorComponent,
    data: {
      title: 'Editar Agricultor'
    }
  }
];
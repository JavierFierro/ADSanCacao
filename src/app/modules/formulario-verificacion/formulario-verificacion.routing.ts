import { Routes } from '@angular/router';
import { EditVerificacionComponent } from './components/edit-verificacion/edit-verificacion.component';
import { FormulariosVerificacionComponent } from './components/formularios-verificacion/formularios-verificacion.component';

export const FormulariosVerificacionRoutes: Routes = [
  {
    path: '',
    component: FormulariosVerificacionComponent,
    data: {
      title: 'Formularios de Verificación',
    }
  },
  {
    path: 'crear-verificacion',
    component: EditVerificacionComponent,
    data: {
      title: 'Nuevo Formulario de Verificación'
    }
  },
  {
    path: 'edit-verificacion/:id',
    component: EditVerificacionComponent,
    data: {
      title: 'Editar Formulario de Verificación'
    }
  }
];
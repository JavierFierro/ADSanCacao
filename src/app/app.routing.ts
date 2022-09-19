import { Routes } from '@angular/router';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AuthGuard } from './modules/core/guards/auth-guard.guard';

import { FullComponent } from './layouts/full/full.component';
import { ErrorComponent } from './authentication/error/error.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'agricultores',
        loadChildren: () => import('./modules/agricultores/agricultores.module').then(m => m.AgricultoresModule)
      },
      {
        path: 'formularios/formulariosLineaBase',
        loadChildren: () => import('./modules/formulario-linea-base/formulario-linea-base.module').then(m => m.FormularioLineaBaseModule)
      },
      {
        path: 'formularios/formulariosVerificacion',
        loadChildren: () => import('./modules/formulario-verificacion/formulario-verificacion.module').then(m => m.FormularioVerificacionModule)
      },
      {
        path: '',
        redirectTo: '/agricultores',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

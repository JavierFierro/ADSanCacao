import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AgricultorService } from 'src/app/modules/core/services/agriculor/agricultor.service';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { FormularioLineaBaseService } from 'src/app/modules/core/services/formularios/formulario-linea-base.service';
import { FormularioVerificacionService } from 'src/app/modules/core/services/formularios/formulario-verificacion.service';

import { OfflineService } from 'src/app/modules/core/services/network/offline.service';
import { PendingFormsService } from 'src/app/modules/core/services/header/pending-forms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private agricultorService: AgricultorService,
    private lineaBaseService: FormularioLineaBaseService,
    private verificacionService: FormularioVerificacionService,
    private offlineService: OfflineService,
    public pendingFormsService:PendingFormsService
  ) {}

  logout() {
    if(this.offlineService.status == 'ONLINE'){
      this.authService.logOut()
      .then(() => {
        this.agricultorService.localData = undefined;
        this.lineaBaseService.localData = undefined;
        this.verificacionService.localData = undefined;
      })
      .catch((e) => {
        this.snackBar.open(e, 'Cerrar', {
          duration: 5000
        })
      });
    }else{
      this.router.navigate(['authentication']);
      localStorage.clear();
    }
    
  }
  
}

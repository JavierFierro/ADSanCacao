import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { TecnicoService } from 'src/app/modules/core/services/tecnico/tecnico.service';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';

import { OfflineAuthService } from 'src/app/modules/core/services/auth/offline-auth.service';
import { OfflineService } from 'src/app/modules/core/services/network/offline.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  @ViewChild(LoadingComponent) loading: LoadingComponent;

  public form: FormGroup = Object.create(null);

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private tecnicoService: TecnicoService,
    private offlineAuthService: OfflineAuthService,
    private offlineService: OfflineService
  ) { }

  ngOnInit() {
    if(this.offlineService.status == 'ONLINE'){
      const hasUser$ = this.authService.hasUser();
      if (hasUser$) {
        this.fetchTecnico();
        this.router.navigate(['agricultores']);
      }
    }
    
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnDestroy(): void {
    this.loading.destroy();
  }

  async onSubmit() {
    this.loading.open();
    if(this.offlineService.status == 'OFFLINE'){

      this.offlineAuthService.offlineSignIn(this.form.value.uname, this.form.value.password);

      if(this.offlineAuthService.loggedIn){
        this.loading.success('Listo', 'Usuario ingresado correctamente');

        setTimeout(() => {
          this.router.navigate(['agricultores']);
        }, 1000);
      }else{
        this.loading.error('Error', 'Usuario o contraseña incorrecta');
      }
      
    }else{

      this.authService.setPersistance().then(() => {
        this.authService.signIn(this.form.value.uname, this.form.value.password)
        .then(async () => {
          await this.fetchTecnico();
          this.loading.success('Listo', 'Usuario ingresado correctamente');

          setTimeout(() => {
            this.router.navigate(['agricultores']);
          }, 1000);
          
        }).catch((error) => {
          
          this.loading.error('Error', 'Usuario o contraseña incorrecta');
          
        });
      })

    }
    
  }

  fetchTecnico(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.authService.getUser().subscribe(async user => {
        if (user !== null) {
          const loggedTecnico = await this.tecnicoService.get(user.uid);
          const storedTecnico = {
            nombre: loggedTecnico.nombre,
            permiso: loggedTecnico.permiso
          };
          localStorage.setItem('user', JSON.stringify(storedTecnico));
          resolve();
        }
      });
    });
  }

}

import { Injectable, ViewChild } from '@angular/core';
import { offline_users } from 'src/environments/auth/offline-auth';

import { LoadingComponent } from 'src/app/shared/loading/loading.component';
@Injectable({
  providedIn: 'root'
})
export class OfflineAuthService {
  
  loggedIn: boolean = false;
  confirmed: boolean;

  email: string;
  password: string;

  constructor() { }

  offlineSignIn(email: string, password: string){

    offline_users.forEach(element => {

      if(email.toLowerCase() === element.email && password === element.password){
        const storedTecnico = {
          nombre: element.displayName,
          permiso: element.permiso,
          rol: element.rol
        };
        localStorage.setItem('user', JSON.stringify(storedTecnico));
        this.loggedIn = true;
      }
      
    });
  }
}

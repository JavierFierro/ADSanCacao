import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Permiso, Tecnico } from 'src/app/interfaces/tecnico';
import { environment } from 'src/environments/environment';
import { AuthService} from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(
    private firebase: AngularFirestore,
    private authService: AuthService
  ) { }

  /*
  fetch(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.authService.getUser().subscribe(user => {
        this.getTecnicoById(user?.uid).subscribe(tecnico => {
          const storedTecnico = {
            nombre: tecnico.nombre,
            permiso: tecnico.permiso
          };
          localStorage.setItem('user', JSON.stringify(storedTecnico));
          resolve();
        });
      });
    });
  }
  */

  getLocalUser(): Promise<Tecnico> {
    return new Promise<Tecnico>((resolve, reject) => {
      this.authService.getUser().subscribe(user => {
        this.getTecnicoById(user?.uid).subscribe(tecnico => {
          resolve(tecnico);
        });
      });
    });
  }

  async get(id: string): Promise<Tecnico> {
    const docRef = this.firebase.firestore.collection("tecnicos").doc(id);
    const tecnico = (await docRef.get()).data() as Tecnico;
    return tecnico;
  }

  getTecnicoById(id: string): Observable<Tecnico> {
    return this.firebase.collection("tecnicos").doc(id)
      .snapshotChanges().pipe(
        map(tecnico => {
          return tecnico.payload.data() as Tecnico;
        })
      );
  }
  
}

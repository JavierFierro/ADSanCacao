import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { IDatabase } from 'src/app/interfaces/database';
import { FormularioType } from 'src/app/interfaces/formulario';
import { Permiso } from 'src/app/interfaces/tecnico';
import { ExportacionesService } from '../exportaciones/exportaciones.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class AgricultorService implements IDatabase<Agricultor> {

  localData: Observable<Agricultor[]>;

  constructor(
    private firebase: AngularFirestore,
    private exportacionService: ExportacionesService,
    private http: HttpClient
  ) { }

  initData(): void {
    this.localData = this.list();
  }
  
  list(): Observable<Agricultor[]> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
    return this.firebase.collection(collectionName).snapshotChanges().pipe(
      map(agricultores => {
        return agricultores.map((agricultor) => {
          return agricultor.payload.doc.data() as Agricultor;
        });
      })
    );
  }

  set(agricultor: Agricultor): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      if (agricultor.id === '' || agricultor.id === undefined) {
        agricultor.id = this.firebase.createId();
        await this.create(agricultor);
      } else {
        await this.setWithPermiso(agricultor);
      }
      resolve();
    });
  }

  private create(agricultor: Agricultor): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      await this.firebase.collection("agricultores").doc(agricultor.id).set(agricultor);
      await this.firebase.collection("agricultoresFicticios").doc(agricultor.id).set(agricultor);
      resolve();
    });
  }

  private setWithPermiso(agricultor: Agricultor): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      const loggedTecnico = JSON.parse(localStorage.getItem("user"));
      const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
      await this.firebase.collection(collectionName).doc(agricultor.id).set(agricultor);
      resolve();
    });
  }

  delete(agricultor: Agricultor): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const docRefReal = this.firebase.firestore.collection("agricultores").doc(agricultor.id);
          transaction.delete(docRefReal);
          const docRefFicticio = this.firebase.firestore.collection("agricultoresFicticios").doc(agricultor.id);
          transaction.delete(docRefFicticio);
          return Promise.resolve();
        });
        resolve("Agricultor eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

  async get(id: string): Promise<Agricultor> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
    try {
      const docRef = this.firebase.firestore.collection(collectionName).doc(id);
      const agricultor = (await docRef.get()).data() as Agricultor;
      return agricultor;
    } catch(e) {
      console.log(e);
      throw e;
    }
  }

  getAll(): Promise<Agricultor[]> {
    return new Promise<Agricultor[]>(async (resolve, reject) => {
      try {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
        const agricultores: Agricultor[] = []
        const collRef = this.firebase.firestore.collection(collectionName);
        const agricultoresData = (await collRef.get()).docs;
        for (const agricultor of agricultoresData) {
          agricultores.push((agricultor.data()["diccionario"] as Agricultor))
        }
        resolve(agricultores);
      } catch (e) {
        reject(e);
      }
    });
  }

  async export(id: string): Promise<void> {
    try {
      const agricultor = await this.get(id);
      const result = await this.exportacionService.exportFormulario(agricultor, FormularioType.agriculor);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async exportAll(): Promise<void> {
    try {
      const agricultores = await this.localData.pipe(take(1)).toPromise();
      const result = await this.exportacionService.exportAllAgricultores(agricultores, FormularioType.agriculor);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  descargarVerificacion(codigo: any, nombre: any, fechaVisita: any) {
    var mediaType = 'application/xlsx';

    return new Promise((resolve) => {
      this.http
        .get(`${environment.apiUrl}/formulario/export/verificacion/${codigo}`, { responseType: 'blob' })
        .subscribe(
          (response: any) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'Monitoreo_'+nombre+"_"+fechaVisita+'.xlsx');

            // console.log(response.data)
            resolve([true, response.data]);
          },
          (error: any) => {
            resolve([false, "Error al exportar excel"]);
          }
        );
    });
  }
  
  descargarLineaBase(codigo: any, nombre: any, fechaVisita: any) {
    var mediaType = 'application/xlsx';

    return new Promise((resolve) => {
      this.http
        .get(`${environment.apiUrl}/formulario/export/lineabase/${codigo}`, { responseType: 'blob' })
        .subscribe(
          (response: any) => {
            var blob = new Blob([response], { type: mediaType });
            saveAs(blob, 'LineaBase_'+nombre+"_"+fechaVisita+'.xlsx');

            // console.log(response.data)
            resolve([true, response.data]);
          },
          (error: any) => {
            resolve([false, "Error al exportar excel"]);
          }
        );
    });
  }

}

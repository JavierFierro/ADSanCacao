import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Agricultor } from 'src/app/interfaces/agricultor';
import { IDatabase } from 'src/app/interfaces/database';
import { FormularioType } from 'src/app/interfaces/formulario';
import { Permiso } from 'src/app/interfaces/tecnico';
import { ExportacionesService } from '../exportaciones/exportaciones.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';
import { OfflineService } from '../network/offline.service';
import { FormularioLineaBaseService } from '../formularios/formulario-linea-base.service';
import { FormularioVerificacionService } from '../formularios/formulario-verificacion.service';

import Swal from 'sweetalert2';
const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();

@Injectable({
  providedIn: 'root'
})
export class AgricultorService implements IDatabase<Agricultor> {

  localData: Observable<Agricultor[]>;

  agricultoresCacheDB: any;

  constructor(
    private firebase: AngularFirestore,
    private exportacionService: ExportacionesService,
    private http: HttpClient,
    private offlineService: OfflineService,
    private formLBService: FormularioLineaBaseService,
    private formVerificacionService: FormularioVerificacionService
  ) {
    this.startDB();
  }

  initData(): void {
    
    this.localData = this.list();
   
  }
  
  list(): Observable<Agricultor[]> {

    if(this.offlineService.status === "ONLINE"){

      // this.deleteDB();

      const loggedTecnico = JSON.parse(localStorage.getItem("user"));
      const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
      const formsAgr =  this.firebase.collection(collectionName).snapshotChanges().pipe(
        map(agricultores => {
          return agricultores.map((agricultor) => {
            return agricultor.payload.doc.data() as Agricultor;
          });
        })
      );

      // formsAgr.subscribe((event) => {
      //   this.startDB();

      //   const agricultores: any[] = event;
      //   this.addTask(agricultores);
      // });


      return formsAgr;
    }else{

      return of(this.offlineService.cachedAgrForm);
      
    }
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

  async getAll(): Promise<Agricultor[]> {
    return new Promise<Agricultor[]>(async (resolve, reject) => {
      try {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const collectionName = loggedTecnico.permiso === Permiso.Real ? "agricultores" : "agricultoresFicticios";
        const agricultores: Agricultor[] = []
        const collRef = this.firebase.firestore.collection(collectionName);
        const agricultoresData = (await collRef.get()).docs;
        for (const agricultor of agricultoresData) {
          // console.log(agricultor.data());
          agricultores.push((agricultor.data() as Agricultor))
        }
        this.addTask(agricultores);
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

  public renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  public deleteDB(){
    if(this.agricultoresCacheDB != undefined || this.agricultoresCacheDB != null){
      this.agricultoresCacheDB.destroy().then(function (response) {
        console.log("CacheDB reset");
      }).catch(function (err) {
        console.log(err);
      });
    }
  }

  public startDB(){
    this.agricultoresCacheDB = new pouchDB("AgricultoresCacheDB");
  }

  public addTask = (data) => {
    data.forEach((agricultor) => {
      this.renameKey(agricultor,'id','_id');
      this.agricultoresCacheDB.put(agricultor);
    });

    // this.close();

  }

  async getFormById(id): Promise<Agricultor>{
    let registro = await this.agricultoresCacheDB.get(id);
    const form: Agricultor = {
      id: registro._id,
      secciones: registro.secciones
    }
    return form;
  }

  public getAllAgricultores = () =>  new Promise((resolve, reject) => {

    this.agricultoresCacheDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(({rows}) => {
      resolve(rows);
    }).catch( () => {
      reject(null);
    })
  })

  open(message: string): void {
    Swal.fire({
      title: message,
      allowEscapeKey: false,
      allowOutsideClick: false,
      timer: 99999999999,
      didOpen: () => {
        Swal.showLoading()
      }
    });
  }

  close(): void {
    setTimeout(async () => {
      Swal.close();
    }, 20000);
  }

}

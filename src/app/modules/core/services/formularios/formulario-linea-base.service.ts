import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormularioType } from 'src/app/interfaces/formulario';
import { FormularioLineaBase } from 'src/app/interfaces/formularioLineaBase';
import { FormularioService } from './formulario.service';
import { ExportacionesService } from './../exportaciones/exportaciones.service';
import { Permiso } from 'src/app/interfaces/tecnico';
import { OfflineService } from '../network/offline.service';

import Swal from 'sweetalert2';
const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();

@Injectable({
  providedIn: 'root'
})
export class FormularioLineaBaseService extends FormularioService {

  cachedFormulariosObs : Observable<FormularioLineaBase[]>;

  lineaBaseCacheDB: any;

  constructor(
    private firebase: AngularFirestore,
    private exportacionService: ExportacionesService,
    private offlineService: OfflineService
  ) {
    super(firebase);
    this.startDB();
  }

  async get(id: string): Promise<FormularioLineaBase> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return new Promise(async (resolve, reject) => {
      const docRef = this.firebase.firestore.collection(`/${collectionName}/lineaBase/diccionarios`).doc(id);
      const formulario = (await docRef.get()).data()["diccionario"] as FormularioLineaBase;
      resolve(formulario);
    });
  }

  list(): Observable<FormularioLineaBase[]> {

    if(this.offlineService.status == 'ONLINE'){
      
      const loggedTecnico = JSON.parse(localStorage.getItem("user"));
      const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
      const formsLb =  this.firebase.collection(`/${collectionName}/lineaBase/diccionarios`).snapshotChanges().pipe(
        map((formularios: any[]) => {
          return formularios.map((formulario) => {
            return formulario.payload.doc.data()["diccionario"] as FormularioLineaBase;
          });
        })
      );

      return formsLb;
    }else{
      
      return of(this.offlineService.cachedLBForm);
    }
    
  }

  listByAgricultor(agricultorId: string): Observable<FormularioLineaBase[]> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return this.firebase.collection(`/${collectionName}/lineaBase/estructuras`, ref => ref.where('agricultorId', '==' , agricultorId ))
      .snapshotChanges().pipe(
        map((formularios: any[]) => {
          return formularios.map((formulario) => {
              return formulario.payload.doc.data() as FormularioLineaBase;
          });
        })
    );
  }

  async getAllFormularios(): Promise<FormularioLineaBase[]> {

    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return new Promise<FormularioLineaBase[]>(async (resolve, reject) => {
      try {
        const formularios: FormularioLineaBase[] = []
        const collRef = this.firebase.firestore.collection(`/${collectionName}/lineaBase/diccionarios`);
        const formulariosData = (await collRef.get()).docs;
        for (const formulario of formulariosData) {
          formularios.push((formulario.data()["diccionario"] as FormularioLineaBase))
        }
        this.addTask(formularios);
        resolve(formularios);
      } catch (e) {
        reject(e);
      }
    });
  }

  set(item: FormularioLineaBase): Promise<void> {
    const formularioLineaBase = item as FormularioLineaBase;
    return new Promise<void>(async (resolve, reject) => {
      if (formularioLineaBase.id === "" || formularioLineaBase.id === undefined) {
        formularioLineaBase.id = this.firebase.createId();
        await this.create(formularioLineaBase);
      } else {
        await this.setWithPermiso(formularioLineaBase);
      }
      resolve();
    });
  }

  private create(formularioLineaBase: FormularioLineaBase): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await this.setWithPermiso(formularioLineaBase, Permiso.Real);
        await this.setWithPermiso(formularioLineaBase, Permiso.Ficticio);
        resolve();
      } catch(e) {
        console.log(e);
        throw(e);
      }
    });
  }

  private setWithPermiso(formularioLineaBase: FormularioLineaBase, codedPermiso?: Permiso): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const permiso: Permiso = codedPermiso ? codedPermiso : loggedTecnico.permiso;
        const collectionName = permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
        await this.firebase.collection(`/${collectionName}/lineaBase/diccionarios`).doc(formularioLineaBase.id).set({
          id: formularioLineaBase.id,
          diccionario: formularioLineaBase
        });
        await this.firebase.firestore.collection(`/${collectionName}/lineaBase/estructuras`).doc(formularioLineaBase.id).set({
          id: formularioLineaBase.id,
          agricultor: formularioLineaBase.agricultor.secciones.datosPersonales.preguntas.nombre.respuesta,
          agricultorId: formularioLineaBase.agricultor.id,
          fechaVisita: formularioLineaBase.fechaVisita,
          tecnico: formularioLineaBase.tecnico.nombre
        });
        resolve();
      } catch(e) {
        console.log(e);
        throw(e);
      }
    });
  }

  delete(formulario: FormularioLineaBase): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const docRefEstructuraReal = this.firebase.firestore.collection("/formularios/lineaBase/estructuras").doc(formulario.id);
          transaction.delete(docRefEstructuraReal);
          const docRefEstructuraFicticio = this.firebase.firestore.collection("/formulariosFicticios/lineaBase/estructuras").doc(formulario.id);
          transaction.delete(docRefEstructuraFicticio);
          const docRefReal = this.firebase.firestore.collection("/formularios/lineaBase/diccionarios").doc(formulario.id);
          transaction.delete(docRefReal);
          const docRefFicticio = this.firebase.firestore.collection("/formulariosFicticios/lineaBase/diccionarios").doc(formulario.id);
          transaction.delete(docRefFicticio);
          return Promise.resolve();
        });
        resolve("Formulario de linea base eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

  async export(id: string): Promise<void> {
    try {
      const formulario = await this.get(id);
      const result = await this.exportacionService.exportFormulario(formulario, FormularioType.formularioLineaBase);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async exportAll(): Promise<void> {
    try {
      // const formularios = await this.localData.pipe(take(1)).toPromise();
      const formularios = await this.getAllFormularios();
      const result = await this.exportacionService.exportarAllFormularios(formularios, FormularioType.formularioLineaBase);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  public deleteDB(){
    if(this.lineaBaseCacheDB != undefined || this.lineaBaseCacheDB != null){
      this.lineaBaseCacheDB.destroy().then(function (response) {
        console.log("CacheDB reset");
      }).catch(function (err) {
        console.log(err);
      });
    }
  }

  public startDB(){
    this.lineaBaseCacheDB = new pouchDB("LineaBaseCacheDB");
  }

  public addTask = (data) => {
    data.forEach((formLineaBase) => {
      this.renameKey(formLineaBase,'id','_id');
      this.lineaBaseCacheDB.put(formLineaBase);
    });
  }

  async getFormById(id): Promise<FormularioLineaBase>{

    let registro = await this.lineaBaseCacheDB.get(id);
    const form: FormularioLineaBase = {
      id: registro._id,
      agricultor: registro.agricultor,
      tecnico: registro.tecnico,
      fechaVisita: registro.fechaVisita,
      secciones: registro.secciones
    }
    return form;
  }

  public getAllLineaBase = () =>  new Promise((resolve, reject) => {

    this.lineaBaseCacheDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(({rows}) => {
      resolve(rows);
    }).catch( () => {
      reject(null);
    })
  })

}

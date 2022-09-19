import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { FormularioType } from 'src/app/interfaces/formulario';
import { FormularioVerificacion } from 'src/app/interfaces/formularioVerificacion';
import { Permiso } from 'src/app/interfaces/tecnico';
import { ExportacionesService } from '../exportaciones/exportaciones.service';
import { FormularioService } from './formulario.service';

@Injectable({
  providedIn: 'root'
})
export class FormularioVerificacionService extends FormularioService {

  constructor(
    private firebase: AngularFirestore,
    private exportacionService: ExportacionesService
  ) {
    super(firebase);
  }

  async get(id: string): Promise<FormularioVerificacion> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return new Promise(async (resolve, reject) => {
      const docRef = this.firebase.firestore.collection(`/${collectionName}/verificacion/diccionarios`).doc(id);
      const formulario = (await docRef.get()).data()["diccionario"] as FormularioVerificacion;
      resolve(formulario);
    });
  }

  list(): Observable<FormularioVerificacion[]> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return this.firebase.collection(`/${collectionName}/verificacion/estructuras`).snapshotChanges().pipe(
      map(formularios => {
        return formularios.map((formulario) => {
          return formulario.payload.doc.data() as FormularioVerificacion;
        });
      })
    );
  }

  listByAgricultor(agricultorId: string): Observable<FormularioVerificacion[]> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return this.firebase.collection(`/${collectionName}/verificacion/estructuras`, ref => ref.where('agricultorId', '==' , agricultorId ))
    .snapshotChanges().pipe(
        map(formularios => {
          return formularios.map((formulario) => {
            return formulario.payload.doc.data() as FormularioVerificacion;
          });
        })
    );
  }

  getAllFormularios(): Promise<FormularioVerificacion[]> {
    const loggedTecnico = JSON.parse(localStorage.getItem("user"));
    const collectionName = loggedTecnico.permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
    return new Promise<FormularioVerificacion[]>(async (resolve, reject) => {
      try {
        const formularios: FormularioVerificacion[] = []
        const collRef = this.firebase.firestore.collection(`/${collectionName}/verificacion/diccionarios`);
        const formulariosData = (await collRef.get()).docs;
        for (const formulario of formulariosData) {
          formularios.push((formulario.data()["diccionario"] as FormularioVerificacion))
        }
        resolve(formularios);
      } catch (e) {
        reject(e);
      }
    });
  }

  set(item: FormularioVerificacion): Promise<void> {
    const formularioVerificacion = item as FormularioVerificacion;
    return new Promise<void>(async (resolve, reject) => {
      if (formularioVerificacion.id === "" || formularioVerificacion.id === undefined) {
        formularioVerificacion.id = this.firebase.createId();
        await this.create(formularioVerificacion);
      } else {
        await this.setWithPermiso(formularioVerificacion);
      }
      resolve();
    });
  }

  private create(formularioVerificacion: FormularioVerificacion): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await this.setWithPermiso(formularioVerificacion, Permiso.Real);
        await this.setWithPermiso(formularioVerificacion, Permiso.Ficticio);
        resolve();
      } catch(e) {
        console.log(e);
        throw(e);
      }
    });
  }

  private setWithPermiso(formularioVerificacion: FormularioVerificacion, codedPermiso?: Permiso): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const loggedTecnico = JSON.parse(localStorage.getItem("user"));
        const permiso: Permiso = codedPermiso ? codedPermiso : loggedTecnico.permiso;
        let collectionName = permiso === Permiso.Real ? "formularios" : "formulariosFicticios";
        await this.firebase.collection(`/${collectionName}/verificacion/diccionarios`).doc(formularioVerificacion.id).set({
          id: formularioVerificacion.id,
          diccionario: formularioVerificacion
        });
        await this.firebase.firestore.collection(`/${collectionName}/verificacion/estructuras`).doc(formularioVerificacion.id).set({
          id: formularioVerificacion.id,
          agricultor: formularioVerificacion.agricultor.secciones.datosPersonales.preguntas.nombre.respuesta,
          agricultorId: formularioVerificacion.agricultor.id,
          fechaVisita: formularioVerificacion.fechaVisita,
          tecnico: formularioVerificacion.tecnico.nombre
        });
        resolve();
      } catch(e) {
        console.log(e);
        throw(e);
      }
    });
  }

  delete(formulario: FormularioVerificacion): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.firebase.firestore.runTransaction(async transaction => {
          const docRefEstructuraReal = this.firebase.firestore.collection("/formularios/verificacion/estructuras").doc(formulario.id);
          transaction.delete(docRefEstructuraReal);
          const docRefEstructuraFicticio = this.firebase.firestore.collection("/formulariosFicticios/verificacion/estructuras").doc(formulario.id);
          transaction.delete(docRefEstructuraFicticio);
          const docRefReal = this.firebase.firestore.collection("/formularios/verificacion/diccionarios").doc(formulario.id);
          transaction.delete(docRefReal);
          const docRefFicticio = this.firebase.firestore.collection("/formulariosFicticios/verificacion/diccionarios").doc(formulario.id);
          transaction.delete(docRefFicticio);
          return Promise.resolve();
        });
        resolve("Formulario de verificacion eliminado correctamente");
      } catch (e) {
        console.log(e);
        reject("Ha ocurrido un error");
      }
    });
  }

  async export(id: string): Promise<void> {
    try {
      const formulario = await this.get(id);
      const result = await this.exportacionService.exportFormulario(formulario, FormularioType.formularioVerificacion);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async exportAll(): Promise<void> {
    try {
      // const formularios = await this.localData.pipe(take(1)).toPromise();
      const formularios = await this.getAllFormularios();
      const result = await this.exportacionService.exportarAllFormularios(formularios, FormularioType.formularioVerificacion);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}

import { Injectable } from '@angular/core';
import { Agricultor } from 'src/app/interfaces/agricultor';
const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();

@Injectable({
  providedIn: 'root'
})
export class OfflineService {

  status: string;
  cachedAgrForm: any;
  private db: any;

  constructor() {
    this.startDB();
  }

  public renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  public deleteDB(){
    this.db.destroy().then(function (response) {
      console.log("CacheDB reset");
    }).catch(function (err) {
      console.log(err);
    });
  }

  public startDB(){
    this.db = new pouchDB('ADSanDB');
  }

  public addTask = (data) => {

    data.forEach((agricultor) => {
      this.renameKey(agricultor,'id','_id');
      this.db.put(agricultor);
    });
  }

  async getFormById(id): Promise<Agricultor>{

    let registro = await this.db.get(id);
    const form: Agricultor = {
      id: registro._id,
      secciones: registro.secciones
    }
    return form;
  }

  public getAll = () =>  new Promise((resolve, reject) => {

    this.db.allDocs({
      include_docs: true,
      attachments: true
    }).then(({rows}) => {
      resolve(rows);
    }).catch( () => {
      reject(null);
    })
  })

}

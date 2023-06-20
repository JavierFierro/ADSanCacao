import { Injectable } from '@angular/core';

const PouchDB = require('pouchdb-browser');
const pouchDB = PouchDB.default.defaults();

@Injectable({
  providedIn: 'root'
})
export class PendingFormsService {

  pendingFormsCacheDB: any;

  badgeCount:any = "0";

  listaFormPendientes:any[] = [];

  constructor() { 
    this.startDB();
    this.updateData();
  }

  public startDB(){
    this.pendingFormsCacheDB = new pouchDB("PendingFormsDB");
  }

  public getAllPendingForms = () =>  new Promise((resolve, reject) => {

    this.pendingFormsCacheDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(({rows}) => {
      resolve(rows);
    }).catch( () => {
      reject(null);
    })
  });

  public renameKey ( obj, oldKey, newKey ) {
    obj[newKey] = obj[oldKey];
    delete obj[oldKey];
  }

  public addTask = (data) => {
    this.renameKey(data,'id','_id');
    this.pendingFormsCacheDB.put(data);
    this.updateData();
  }

  public updateData(){
    this.getAllPendingForms().then((forms: any[]) => {
      this.listaFormPendientes = forms;
      this.badgeCount = forms.length;
    });
  }
}

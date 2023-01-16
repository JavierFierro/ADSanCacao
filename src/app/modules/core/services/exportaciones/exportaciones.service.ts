import { Injectable } from '@angular/core';
import { Formulario, FormularioType, isExportable } from 'src/app/interfaces/formulario';
import { saveAs } from "file-saver";
import { formularioLineaBaseMapper } from 'src/environments/mappers/formularioLineaBase';
import { formularioVerificacionMapper } from 'src/environments/mappers/formularioVerificacion';
import { agricultorMapper } from 'src/environments/mappers/agricultor';

@Injectable({
  providedIn: 'root'
})
export class ExportacionesService {

  constructor() { }

  async exportFormulario(formulario: isExportable, formularioType: FormularioType): Promise<boolean> {
    try {
      const dataFormulario = await this.prepareOneDataRecursive(formulario);
      const header = this.mapHeader(dataFormulario, formularioType);
      const arrayDataFormulario = [dataFormulario];
      const indiceMaximo = this.maxFormularioKeys(arrayDataFormulario);
      const csvArray = await this.generateCSVArray(arrayDataFormulario, header, indiceMaximo);
      const blob = new Blob([csvArray], { type: 'text/csv' })
      saveAs(blob, `${formularioType}_${formulario["id"]}.csv`);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async exportarAllFormularios(formularios: isExportable[], formularioType: FormularioType): Promise<boolean> {
    try {
      const dataFormulario = await this.prepareAllDataRecursive(formularios);
      const indiceMaximo = this.maxFormularioKeys(dataFormulario);
      const header = this.mapHeader(dataFormulario[indiceMaximo], formularioType);
      const csvArray = await this.generateCSVArray(dataFormulario, header, indiceMaximo);
      const blob = new Blob([csvArray], { type: 'text/csv' })
      saveAs(blob, `${formularioType}_TODOS.csv`);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async exportAllAgricultores(agricultores: isExportable[], formularioType: FormularioType): Promise<boolean> {
    try {
      const dataFormulario = await this.prepareAllDataRecursiveAgricultor(agricultores);
      const indiceMaximo = this.maxFormularioKeys(dataFormulario);
      const header = this.mapHeader(dataFormulario[indiceMaximo], formularioType);
      const csvArrayText = await this.generateCSVArray(dataFormulario, header, indiceMaximo);
      const blob = new Blob([csvArrayText], { type: 'text/csv' });
      saveAs(blob, `${formularioType}_TODOS.csv`);
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private generateCSVArray(dataFormulario: any[], header: string[], indiceMaximo?: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const replacer = (key: any, value: any) => value === null ? 'N/A' : value; // specify how you want to handle null values here
      const headerData = indiceMaximo !== undefined ? Object.keys(dataFormulario[indiceMaximo]) : Object.keys(dataFormulario);
      const title = 'Formulario exportado a CSV';
      const csv = dataFormulario.map(row => headerData.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'));
      csv.unshift(header.join(';'));
      csv.unshift(title);
      const csvArray = csv.join('\r\n');
      resolve(csvArray);
    });
  }

  private mapHeader(object: Object, formularioType: FormularioType): string[] {
    try {
      const formularioMapperBlank = this.pickMapper(formularioType)
      const header = Object.keys(object);
      let arrayHeaders = [];
      for (let key of header) {
        if (formularioMapperBlank[key] !== undefined) {
          arrayHeaders.push(formularioMapperBlank[key].codigo);
        } else if (key === 'id' || key === 'nombre' || key === 'idformulario' || key === 'tecnico' || key === 'fechaVisita') {
          arrayHeaders.push(key.toUpperCase());
        } 
      }
      return arrayHeaders;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  private pickMapper(formularioType: FormularioType): any {
    let formularioMapperBlank: any;
    switch (formularioType) {
      case FormularioType.agriculor:
          formularioMapperBlank = agricultorMapper;
          break;
      case FormularioType.formularioLineaBase:
          formularioMapperBlank = formularioLineaBaseMapper;
          break;
      case FormularioType.formularioVerificacion:
          formularioMapperBlank = formularioVerificacionMapper;
          break;
      default:
          break;
    }
    return formularioMapperBlank;
  }

  private maxFormularioKeys(listaFormularios: any[]) {
    let arrayCantidadKeys = []
    for (let value of listaFormularios) {
      arrayCantidadKeys.push(Object.keys(value).length);
    }
    let maxKeys = Math.max(...arrayCantidadKeys);
    let indx = arrayCantidadKeys.indexOf(maxKeys);
    return indx;
  }

  private async prepareAllDataRecursive(formularios: isExportable[]): Promise<any[]> {
    let dataFormulario = [];
    for (let formulario of formularios) {
      const element = {
        idformulario: formulario["id"],
        id: formulario["agricultor"]["id"],
        nombre: formulario["agricultor"]["secciones"]["datosPersonales"]["preguntas"]["nombre"]["respuesta"],
        tecnico: formulario["tecnico"]["nombre"],
        fechaVisita: formulario["fechaVisita"],
        };
      let objSeccion = formulario["secciones"];
      for (let nombreSeccion in objSeccion) {
        this.planObjectRecursive(objSeccion[nombreSeccion], element);
      }
      dataFormulario.push(element);
    }
    return dataFormulario
  }

  private async prepareAllDataRecursiveAgricultor(agricultores: isExportable[]): Promise<any[]> {
    let dataFormulario = [];
    for (let data of agricultores) {
      const element = {
        id: data["id"]
      };
      let objSeccion = data["secciones"];
      for (let nombreSeccion in objSeccion) {
        this.planObjectRecursive(objSeccion[nombreSeccion], element);
      }
      dataFormulario.push(element);
    }
    return dataFormulario;
  }

  private planObjectRecursive(object: any, element: any) {
    for (let nombrePregunta in object['preguntas']) {
      if (Array.isArray(object['preguntas'][nombrePregunta]['respuesta'])) {
        let arrayString = object['preguntas'][nombrePregunta]['respuesta'].toString();
        element[nombrePregunta] = arrayString;
      } else if (object['preguntas'][nombrePregunta]['arreglo'] !== undefined) {
        let contador = 1;
        for (let objDinamico of object['preguntas'][nombrePregunta]['arreglo']) {
          for (let keyObjetoDinamico in objDinamico) {
            element[keyObjetoDinamico + contador] = objDinamico[keyObjetoDinamico]['respuesta'];
          }
          contador++;
        }
      } else {
        element[nombrePregunta] = object['preguntas'][nombrePregunta]['respuesta'];
      }
      if (object['preguntas'][nombrePregunta]['preguntas'] !== undefined) {
        this.planObjectRecursive(object['preguntas'][nombrePregunta], element);
      }
    }
    for (let nombreSeccion in object['secciones']) {
      let newSeccionObj = object['secciones'][nombreSeccion];
      this.planObjectRecursive(newSeccionObj, element);
    }
  }

  private async prepareOneDataRecursive(formulario: isExportable) {
    const dataFormulario = {
      idformulario: formulario["id"],
      id: formulario["agricultor"]["id"],
      nombre: formulario["agricultor"]["secciones"]["datosPersonales"]["preguntas"]["nombre"]["respuesta"],
      tecnico: formulario["tecnico"]["nombre"],
      fechaVisita: formulario["fechaVisita"],
    };
    let objSeccion = formulario["secciones"];
    for (let nombreSeccion in objSeccion) {
      this.planObjectRecursive(objSeccion[nombreSeccion], dataFormulario);
    }
    return dataFormulario;
  }
}

import { Agricultor } from "./agricultor";
import { Tecnico } from "./tecnico";

export interface isExportable {}

export enum FormularioType {
  agriculor = "agricultor",
  formularioLineaBase = "formularioLineaBase",
  formularioVerificacion = "formularioVerificacion"
}

export interface Formulario extends isExportable {
  id: string,
  agricultor: Agricultor,
  tecnico: Tecnico,
  fechaVisita: string
  secciones: any,
}
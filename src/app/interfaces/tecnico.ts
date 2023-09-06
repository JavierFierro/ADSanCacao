export enum Permiso {
  Ficticio = "compl",
  Real = "admin"
}

export interface Tecnico {
  id: string,
  nombre: string,
  correo: string,
  permiso: Permiso,
  rol: string
}
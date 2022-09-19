export enum Permiso {
  Ficticio = "ficticio",
  Real = "real"
}

export interface Tecnico {
  id: string,
  nombre: string,
  correo: string,
  permiso: Permiso
}
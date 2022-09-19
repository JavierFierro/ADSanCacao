import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'agricultores',
    name: 'Agricultores',
    type: 'link',
    icon: 'person'
  },
  {
    state: 'formularios',
    name: 'Formularios',
    type: 'sub',
    icon: 'assignment',
    children: [
      {
        state: 'formulariosLineaBase',
        name: 'Linea Base',
        type: 'link'
      },
      {
        state: 'formulariosVerificacion',
        name: 'Verificación',
        type: 'link'
      }
    ]
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}

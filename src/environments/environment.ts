// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { firebase } from "./config/firebase";
import { agricultor } from "./config/constantes/agricultoresConstantes";
import { menuItems } from "./config/menuItems";
import { agricultorMapper } from "./mappers/agricultor";
import { formularioLineaBaseMapper } from "./mappers/formularioLineaBase";
import { formularioLineaBase } from "./config/constantes/formularioLineaBase";
import { formularioVerificacion } from "./config/constantes/formularioVerificacion";
import { Permiso } from "src/app/interfaces/tecnico";

export const environment = {
  production: false,
  menuItems: menuItems,
  firebase,
  constantes: {
    agricultor,
    formularioLineaBase,
    formularioVerificacion
  },
  mappers: {
    agricultorMapper,
    formularioLineaBaseMapper
  },
  apiUrl:"https://cacaoback.herokuapp.com"
  // apiUrl:"http://localhost:8080"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

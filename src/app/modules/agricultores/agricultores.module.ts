import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgricultoresComponent } from './components/agricultores/agricultores.component';
import { AgricultoresRoutes } from './agricultores.routing';
import { DemoMaterialModule } from './../../demo-material-module';
import { EditAgricultorComponent } from './components/edit-agricultor/edit-agricultor.component';
import { DatosPersonalesComponent } from './components/sections/datos-personales/datos-personales.component';
import { InformacionFincaComponent } from './components/sections/informacion-finca/informacion-finca.component';
import { HectareajeComponent } from './components/sections/hectareaje/hectareaje.component';
import { CacaoCNNComponent } from './components/sections/cacao-cnn/cacao-cnn.component';
import { CacaoNacionalComponent } from './components/sections/cacao-nacional/cacao-nacional.component';
import { CacaoNacionalNuevosClonesComponent } from './components/sections/cacao-nacional-nuevos-clones/cacao-nacional-nuevos-clones.component';
import { OrigenPlantasComponent } from './components/sections/origen-plantas/origen-plantas.component';
import { CroquisComponent } from './components/sections/croquis/croquis.component';
import { CanvasComponent } from 'src/app/shared/canvas/canvas.component';
import { PriorizacionParticipacionProyectosComponent } from '../formulario-linea-base/components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AgricultoresComponent,
    EditAgricultorComponent,
    DatosPersonalesComponent,
    InformacionFincaComponent,
    HectareajeComponent,
    CacaoCNNComponent,
    CacaoNacionalComponent,
    CacaoNacionalNuevosClonesComponent,
    OrigenPlantasComponent,
    PriorizacionParticipacionProyectosComponent,
    CroquisComponent,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(AgricultoresRoutes)
  ]
})
export class AgricultoresModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulariosLineaBaseComponent } from './components/formularios-linea-base/formularios-linea-base.component';
import { FormulariosLineaBaseRoutes } from './formulario-linea-base.routing';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { EditLineaBaseComponent } from './components/edit-linea-base/edit-linea-base.component';

import { InformacionFamiliaComponent } from './components/sections/informacion-familia/informacion-familia.component';
import { PracticasAgricolasComponent } from './components/sections/practicas-agricolas/practicas-agricolas.component';
import { SaludSeguridadOcupacionalComponent } from './components/sections/salud-seguridad-ocupacional/salud-seguridad-ocupacional.component';
import { CosechaComponent } from './components/sections/cosecha/cosecha.component';
import { VentaComponent } from './components/sections/venta/venta.component';
import { NivelAsociatividadComponent } from './components/sections/nivel-asociatividad/nivel-asociatividad.component';
import { CondicionesLaboralesComponent } from './components/sections/condiciones-laborales/condiciones-laborales.component';
import { ServiciosBasicosComponent } from './components/sections/servicios-basicos/servicios-basicos.component';
import { ConservacionRecursosManejoDesechosComponent } from './components/sections/conservacion-recursos-manejo-desechos/conservacion-recursos-manejo-desechos.component';
import { IncrementarProductividadComponent } from './components/sections/incrementar-productividad/incrementar-productividad.component';
import { MejorarCalidadCacaoComponent } from './components/sections/mejorar-calidad-cacao/mejorar-calidad-cacao.component';
import { DiversificacionIngresosComponent } from './components/sections/diversificacion-ingresos/diversificacion-ingresos.component';
import { PreguntasAdicionalesComponent } from './components/sections/preguntas-adicionales/preguntas-adicionales.component';
// import { PriorizacionParticipacionProyectosComponent } from './components/sections/priorizacion-participacion-proyectos/priorizacion-participacion-proyectos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FormulariosLineaBaseComponent,
    EditLineaBaseComponent,
    InformacionFamiliaComponent,
    PracticasAgricolasComponent,
    SaludSeguridadOcupacionalComponent,
    CosechaComponent,
    VentaComponent,
    NivelAsociatividadComponent,
    CondicionesLaboralesComponent,
    ServiciosBasicosComponent,
    ConservacionRecursosManejoDesechosComponent,
    IncrementarProductividadComponent,
    MejorarCalidadCacaoComponent,
    DiversificacionIngresosComponent,
    PreguntasAdicionalesComponent,
    // PriorizacionParticipacionProyectosComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(FormulariosLineaBaseRoutes)
  ]
})
export class FormularioLineaBaseModule { }

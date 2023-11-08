import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadPageRoutingModule } from './actividad-routing.module';

import { ActividadPage } from './actividad.page';

import { ComponenteModule } from '../componente/componente.module';
import { DetalleActividadComponent } from './modals/detalle-actividad/detalle-actividad.component';

@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadPageRoutingModule
  ],
  declarations: [ActividadPage, DetalleActividadComponent]
})
export class ActividadPageModule {}

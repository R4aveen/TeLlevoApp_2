import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadChoferPageRoutingModule } from './actividad-chofer-routing.module';

import { ActividadChoferPage } from './actividad-chofer.page';

import { ComponentecModule } from '../componentec/componentec.module';

import { DetalleActividadComponent } from './modals/detalle-actividad/detalle-actividad.component';

@NgModule({
  imports: [
    ComponentecModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadChoferPageRoutingModule
  ],
  declarations: [ActividadChoferPage, DetalleActividadComponent]
})
export class ActividadChoferPageModule {}

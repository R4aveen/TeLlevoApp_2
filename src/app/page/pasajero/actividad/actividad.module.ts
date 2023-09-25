import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadPageRoutingModule } from './actividad-routing.module';

import { ActividadPage } from './actividad.page';

import { ComponenteModule } from '../componente/componente.module';

@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadPageRoutingModule
  ],
  declarations: [ActividadPage]
})
export class ActividadPageModule {}

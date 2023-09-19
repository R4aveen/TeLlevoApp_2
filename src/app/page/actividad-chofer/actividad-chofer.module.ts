import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadChoferPageRoutingModule } from './actividad-chofer-routing.module';

import { ActividadChoferPage } from './actividad-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadChoferPageRoutingModule
  ],
  declarations: [ActividadChoferPage]
})
export class ActividadChoferPageModule {}

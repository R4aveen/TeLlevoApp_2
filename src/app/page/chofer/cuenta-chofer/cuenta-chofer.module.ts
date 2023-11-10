import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaChoferPageRoutingModule } from './cuenta-chofer-routing.module';

import { CuentaChoferPage } from './cuenta-chofer.page';

import { ComponentecModule } from '../componentec/componentec.module';

@NgModule({
  imports: [
    ComponentecModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaChoferPageRoutingModule
  ],
  declarations: [CuentaChoferPage]
})
export class CuentaChoferPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaPageRoutingModule } from './cuenta-routing.module';

import { CuentaPage } from './cuenta.page';

import { ComponenteModule } from '../componente/componente.module';
@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaPageRoutingModule
  ],
  declarations: [CuentaPage]
})
export class CuentaPageModule {}

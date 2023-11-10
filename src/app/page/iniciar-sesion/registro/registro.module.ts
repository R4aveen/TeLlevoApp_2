import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { FormPasajeroComponent } from './modals/form-pasajero/form-pasajero.component';
import { FormChoferComponent } from './modals/form-chofer/form-chofer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,

  ],
  declarations: [RegistroPage,    FormPasajeroComponent,
    FormChoferComponent,]
})
export class RegistroPageModule {}

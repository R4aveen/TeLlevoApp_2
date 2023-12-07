import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionChoferPageRoutingModule } from './configuracion-chofer-routing.module';

import { ConfiguracionChoferPage } from './configuracion-chofer.page';

/////



///

import { TablasChoferComponent } from '../componentec/tablas-chofer/tablas-chofer.component';
import { ComponentecModule } from '../componentec/componentec.module';
import { AgregarDireccionParticularModalComponent } from './modals/agregar-direccion-particular-modal/agregar-direccion-particular-modal.component';
import { EditarPerfilModalComponent } from './modals/editar-perfil-modal/editar-perfil-modal.component';
import { FavoritosModalComponent } from './modals/favorito/favorito-modal.component';
import { BilleteraModalComponent } from './modals/billetera/billetera-modal.component';
@NgModule({
  imports: [
    CommonModule,
    ComponentecModule,
    FormsModule,
    IonicModule,
    ConfiguracionChoferPageRoutingModule,
  ],
  declarations: [ConfiguracionChoferPage,
                AgregarDireccionParticularModalComponent, 
                EditarPerfilModalComponent,
                FavoritosModalComponent,
                BilleteraModalComponent,
                ]
})
export class ConfiguracionChoferPageModule {}

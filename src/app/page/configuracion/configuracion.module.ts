import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';

import { ConfiguracionPage } from './configuracion.page';
import { ComponenteModule } from '../componente/componente.module';

import { AgregarDireccionLaboralModalComponent } from './modals/agregar-direccion-laboral-modal/agregar-direccion-laboral-modal.component';
import { AgregarDireccionParticularModalComponent } from './modals/agregar-direccion-particular-modal/agregar-direccion-particular-modal.component';
import { EditarPerfilModalComponent } from './modals/editar-perfil-modal/editar-perfil-modal.component';
@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ConfiguracionPageRoutingModule
  ],
  declarations: [ConfiguracionPage, AgregarDireccionLaboralModalComponent, AgregarDireccionParticularModalComponent, EditarPerfilModalComponent]
})
export class ConfiguracionPageModule {}

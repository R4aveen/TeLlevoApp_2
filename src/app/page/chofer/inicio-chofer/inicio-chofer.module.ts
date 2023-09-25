import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioChoferPageRoutingModule } from './inicio-chofer-routing.module';
import { ComponentecModule } from '../componentec/componentec.module'; // Importa ComponentecModule aquí
import { InicioChoferPage } from './inicio-chofer.page';

@NgModule({
  imports: [
    ComponentecModule, // Importa el módulo aquí
    CommonModule,
    FormsModule,
    IonicModule,
    InicioChoferPageRoutingModule,
  ],
  declarations: [InicioChoferPage], // No necesitas declarar los componentes nuevamente
})
export class InicioChoferPageModule {}

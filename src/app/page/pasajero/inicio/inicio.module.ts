import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';
import { ComponenteModule } from '../componente/componente.module';
import { ModalExampleComponent } from './modals/buscar.component';

@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, ModalExampleComponent]
})
export class InicioPageModule {}

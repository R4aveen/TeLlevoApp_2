import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioChoferPageRoutingModule } from './inicio-chofer-routing.module';

import { ComponenteModule } from '../componente/componente.module';
import { PanelChoferComponent } from '../componente/panel-chofer/panel-chofer.component';
import { InicioChoferPage } from './inicio-chofer.page';

@NgModule({
  imports: [
    ComponenteModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InicioChoferPageRoutingModule,
  ],
  declarations: [InicioChoferPage,PanelChoferComponent,]
})
export class InicioChoferPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PanelChoferComponent } from './panel-chofer/panel-chofer.component';
import { TablasChoferComponent } from './tablas-chofer/tablas-chofer.component';
import { }

@NgModule({
  declarations: [
    PanelChoferComponent,
    TablasChoferComponent,
    // Aquí declara tus otros componentes personalizados si los tienes
  ],
  imports: [
    CommonModule,
    IonicModule,
    // Otros módulos que puedas necesitar
  ],
  exports: [
    PanelChoferComponent,
    TablasChoferComponent,
    // Exporta tus componentes personalizados aquí
  ],
})
export class ComponentecModule {}

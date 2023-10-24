import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablassComponent } from './tablass/tablass.component';
import { IonicModule } from '@ionic/angular';

import { ValoracionComponent } from './valoracion/valoracion.component';

import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { PanelDespegableComponent } from './panel-despegable/panel-despegable.component';

import { CortarImagenComponent } from './cortar-imagen/cortar-imagen.component';

@NgModule({
  declarations: [
    TablassComponent,
    ValoracionComponent,
    GooglemapsComponent,
    PanelDespegableComponent,
    CortarImagenComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TablassComponent,
    ValoracionComponent,
    GooglemapsComponent,
    PanelDespegableComponent,
    CortarImagenComponent,
  ]
})
export class ComponenteModule { }

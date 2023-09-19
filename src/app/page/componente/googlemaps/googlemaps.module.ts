import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { GooglemapsComponent } from './googlemaps.component';

@NgModule({
  declarations: [
    GooglemapsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    GooglemapsComponent
  ]
})
export class GooglemapsModule { }

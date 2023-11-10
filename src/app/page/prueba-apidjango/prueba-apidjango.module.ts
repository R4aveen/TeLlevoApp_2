import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaAPIDjangoPageRoutingModule } from './prueba-apidjango-routing.module';

import { PruebaAPIDjangoPage } from './prueba-apidjango.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    PruebaAPIDjangoPageRoutingModule
  ],
  declarations: [PruebaAPIDjangoPage]
})
export class PruebaAPIDjangoPageModule {}

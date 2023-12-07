import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaAPIDjangoPage } from './prueba-apidjango.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaAPIDjangoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaAPIDjangoPageRoutingModule {}

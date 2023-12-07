import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadChoferPage } from './actividad-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadChoferPageRoutingModule {}

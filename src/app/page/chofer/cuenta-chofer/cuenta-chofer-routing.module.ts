import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaChoferPage } from './cuenta-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaChoferPageRoutingModule {}

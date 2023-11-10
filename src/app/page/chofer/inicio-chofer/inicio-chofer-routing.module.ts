import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioChoferPage } from './inicio-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: InicioChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioChoferPageRoutingModule {}

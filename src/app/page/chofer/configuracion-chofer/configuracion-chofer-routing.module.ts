import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionChoferPage } from './configuracion-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionChoferPageRoutingModule {}

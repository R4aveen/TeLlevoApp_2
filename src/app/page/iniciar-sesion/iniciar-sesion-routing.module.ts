import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarSesionPage } from './iniciar-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarSesionPage
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSesionPageRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { TablassComponent } from './page/pasajero/componente/tablass/tablass.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./page/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/pasajero/inicio/inicio.module').then( m => m.InicioPageModule)

  },
  {
    path: 'actividad',
    loadChildren: () => import('./page/pasajero/actividad/actividad.module').then( m => m.ActividadPageModule)

  },
  {
    path: 'cuenta',
    loadChildren: () => import('./page/pasajero/cuenta/cuenta.module').then( m => m.CuentaPageModule)

  },
  {
    path: 'configuracion',
    loadChildren: () => import('./page/pasajero/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)

  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./page/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./page/iniciar-sesion/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciar',
    loadChildren: () => import('./page/iniciar-sesion/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'componente',
    loadChildren: () => import('./page/pasajero/componente/componente.module').then( m => m.ComponenteModule)
  },
  {
    path: 'inicio-chofer',
    loadChildren: () => import('./page/chofer/inicio-chofer/inicio-chofer.module').then( m => m.InicioChoferPageModule)
  },
  {
    path: 'actividad-chofer',
    loadChildren: () => import('./page/chofer/actividad-chofer/actividad-chofer.module').then( m => m.ActividadChoferPageModule)
  },
  {
    path: 'cuenta-chofer',
    loadChildren: () => import('./page/chofer/cuenta-chofer/cuenta-chofer.module').then( m => m.CuentaChoferPageModule)
  },
  
  {
    path: 'configuracion-chofer',
    loadChildren: () => import('./page/chofer/configuracion-chofer/configuracion-chofer.module').then( m => m.ConfiguracionChoferPageModule)
  },
  {
    path: 'prueba-apidjango',
    loadChildren: () => import('./page/prueba-apidjango/prueba-apidjango.module').then( m => m.PruebaAPIDjangoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules} ) // Agregar preloadingStrategy aquí si lo necesitas
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


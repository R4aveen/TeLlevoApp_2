import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPerfilModalComponent } from './modals/editar-perfil-modal/editar-perfil-modal.component';
import { AgregarDireccionParticularModalComponent } from './modals/agregar-direccion-particular-modal/agregar-direccion-particular-modal.component';
import { AgregarDireccionLaboralModalComponent } from './modals/agregar-direccion-laboral-modal/agregar-direccion-laboral-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})

export class ConfiguracionPage {
  
  constructor(private modalCtrl: ModalController, private router: Router) {}
  async abrirEditarPerfilModal() {
    const modal = await this.modalCtrl.create({
      component: EditarPerfilModalComponent,
      // Puedes pasar parámetros si es necesario
    });
    return await modal.present();
  }

  async abrirAgregarDireccionParticularModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarDireccionParticularModalComponent,
      // Puedes pasar parámetros si es necesario
    });
    return await modal.present();
  }

  async abrirAgregarDireccionLaboralModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarDireccionLaboralModalComponent,
      // Puedes pasar parámetros si es necesario
    });
    return await modal.present();
  }
  irACuenta() {
    this.router.navigate(['cuenta']);
  }
  
}

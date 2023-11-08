import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPerfilModalComponent } from './modals/editar-perfil-modal/editar-perfil-modal.component';
import { AgregarDireccionParticularModalComponent } from './modals/agregar-direccion-particular-modal/agregar-direccion-particular-modal.component';
import { AgregarDireccionLaboralModalComponent } from './modals/agregar-direccion-laboral-modal/agregar-direccion-laboral-modal.component';
import { Router } from '@angular/router';
import { FavoritosModalComponent } from './modals/favorito/favorito-modal.component';
import { BilleteraModalComponent } from './modals/billetera/billetera-modal.component';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})

export class ConfiguracionPage {
  
  constructor(private modalCtrl: ModalController, private router: Router) {}
  
  ///////// Metodos para los modals ///////////////

  async abrirEditarPerfilModal() {
    const modal = await this.modalCtrl.create({
      component: EditarPerfilModalComponent,
    });
    return await modal.present();
  }

  async abrirAgregarDireccionParticularModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarDireccionParticularModalComponent,
    });
    return await modal.present();
  }

  async abrirAgregarDireccionLaboralModal() {
    const modal = await this.modalCtrl.create({
      component: AgregarDireccionLaboralModalComponent,
    });
    return await modal.present();
  }



  async abrirFavoritoModal(){
    const modal = await this.modalCtrl.create({
      component: FavoritosModalComponent,
    });
    return await modal.present();
  }

  async abrirBilleteraModal(){
    const modal = await this.modalCtrl.create({
      component: BilleteraModalComponent,
    });
    return await modal.present();
  }


  //////// Fin de metodos para modals /////////

  
  irACuenta() {
    this.router.navigate(['cuenta']);
  }
  
}

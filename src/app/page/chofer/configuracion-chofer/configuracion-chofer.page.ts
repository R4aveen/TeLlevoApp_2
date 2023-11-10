import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditarPerfilModalComponent } from './modals/editar-perfil-modal/editar-perfil-modal.component';
import { AgregarDireccionParticularModalComponent } from './modals/agregar-direccion-particular-modal/agregar-direccion-particular-modal.component';
import { FavoritosModalComponent } from './modals/favorito/favorito-modal.component';
import { BilleteraModalComponent } from './modals/billetera/billetera-modal.component';

@Component({
  selector: 'app-configuracion-chofer',
  templateUrl: './configuracion-chofer.page.html',
  styleUrls: ['./configuracion-chofer.page.scss'],
})
export class ConfiguracionChoferPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
  }

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

  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }

}

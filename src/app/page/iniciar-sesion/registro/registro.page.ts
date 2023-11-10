import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';
import { FormChoferComponent } from './modals/form-chofer/form-chofer.component';
import { FormPasajeroComponent } from './modals/form-pasajero/form-pasajero.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string | undefined;
  correo: string | undefined;
  contrasena: string | undefined;
  confirmarContrasena: string | undefined;
  rol: string = 'custom'; // Valor predeterminado

  constructor(
    private registroService: RegistroService,
    private router: Router,
    private modalCtrl: ModalController,
  ) {}


  async abrirFormularioChofer() {
    const modal = await this.modalCtrl.create({
      component: FormChoferComponent,
    });
    return await modal.present();
  }
  async abrirFormularioPasajero() {
    const modal = await this.modalCtrl.create({
      component: FormPasajeroComponent,
    });
    return await modal.present();
  }
  inicio(){
    this.router.navigate(['iniciar']);
  }

  ngOnInit() {
    
  }
}

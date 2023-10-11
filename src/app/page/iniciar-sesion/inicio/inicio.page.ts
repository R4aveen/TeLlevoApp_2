import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre:string='';
  password:string='';

  constructor(
    private alertCtrl:AlertController,
    private router: Router,
    private toastCtrl:ToastController,
  ) { }
  

  ngOnInit() {
  }

  async login(){
    if (this.nombre=="jose" && this.password=="jose1234"){
    this.router.navigate(['inicio']);
    }
    else {
      const toast = await this.toastCtrl.create({
        message: 'Usuario o contraseña incorrecto',
        duration: 3000, // Duración en milisegundos
        position: 'bottom', // Posición del mensaje en la pantalla
        color: 'danger', // Color del mensaje (opcional)
      });
      await toast.present();}
  }

  

}
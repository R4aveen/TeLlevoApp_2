import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { ModalExampleComponent } from './modals/buscar.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router, private modalCtrl: ModalController) {}
  nombre:string="";

  ngOnInit() {
    const usuario = localStorage.getItem("usuario_pasajero")
    if (usuario!=null) {
      this.nombre=usuario
    }
  }


  irACuenta() {
    this.router.navigate(['cuenta']);
  }




  
}

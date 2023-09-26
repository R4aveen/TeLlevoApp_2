import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-chofer',
  templateUrl: './inicio-chofer.page.html',
  styleUrls: ['./inicio-chofer.page.scss'],
})
export class InicioChoferPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {}


  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }

}

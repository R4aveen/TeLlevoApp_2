import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import Swiper from 'swiper';
import { Router } from '@angular/router';

import { ModalExampleComponent } from './modals/buscar.component';

import * as mapbox from 'mapbox-gl';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public map: mapbox.Map;

  public style = 'mapbox://styles/mapbox/streets-v11';

  constructor(private navCtrl: NavController, 
              private router: Router,
               private modalCtrl: ModalController,
               
               ) {}

  ngOnInit() {

  }

  ionViewWillEnter(){
    if (!this.map){
      this.construirMapa();
    }
  }

  construirMapa(){

    this.map = new mapbox.Map({
      accessToken: environment.TOKEN,
      container:'mapa-box',
      style:'mapbox://styles/mapbox/streets-v11',
      zoom:15,
      center:[
        -70.5849933,
        -33.5974785
      ]
    });
    const marker = new mapbox.Marker()
            .setLngLat([ -70.57901364994967, -33.5977186102555])
            .addTo(this.map);
  }




  irACuenta() {
    this.router.navigate(['cuenta']);
  }



/// hola este es un comentario

  
}

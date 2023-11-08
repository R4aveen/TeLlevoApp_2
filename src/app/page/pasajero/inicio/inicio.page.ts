import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import Swiper from 'swiper';
import { Router } from '@angular/router';

import * as mapbox from 'mapbox-gl';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  implements OnInit{


  public map: mapbox.Map;


  constructor(private navCtrl: NavController,
              private router: Router,
              private alerCtrl: AlertController           
            ) {

            }

  ngOnInit() {
    this.construirMapa();
  }

  construirMapa(){
    this.map = new mapbox.Map({
      accessToken:environment.TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom:15,
      center:[
        -33.5899805,
        -70.5984354
      ]
    });
    const marker = new mapbox.Marker()
              .setLngLat([30.5, 50.5])
              .addTo(this.map);
  }


  irACuenta() {
    this.router.navigate(['cuenta']);
  }



}




 
  










  /////////////// Otras funciones





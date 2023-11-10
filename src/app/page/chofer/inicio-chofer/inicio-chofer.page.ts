import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular'; // Asegúrate de importar NavController
import Swiper from 'swiper';
import { Router } from '@angular/router';

import * as mapbox from 'mapbox-gl';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inicio-chofer',
  templateUrl: './inicio-chofer.page.html',
  styleUrls: ['./inicio-chofer.page.scss'],
})
export class InicioChoferPage implements OnInit {

  public map: mapbox.Map;

  public style = 'mapbox://styles/mapbox/streets-v11';

  private panelAbierto = true; // Variable para rastrear el estado del panel

  constructor(private navCtrl: NavController, 
              private router: Router,
               private modalCtrl: ModalController,
               
               ) {}
  ngOnInit() {}


  ionViewWillEnter(){
    if (!this.map){
      this.construirMapac();
    }
  }

  
  construirMapac(){

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
            .addTo(this.map) ;

            this.map.addControl(new mapbox.NavigationControl());
  }


  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }

  togglePanel() {
    this.panelAbierto = !this.panelAbierto;

    // Realiza las acciones necesarias para abrir o cerrar el panel desplegable
    const panelDespegable = document.querySelector('app-panel-chofer'); // Reemplaza con el selector correcto
    if (panelDespegable) {
      if (this.panelAbierto) {
        panelDespegable.classList.add('abierto');
      } else {
        panelDespegable.classList.remove('abierto');
      }
    }
  }

}

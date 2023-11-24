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


  lat:number=-33.56240688984817;
  lng:number=-70.67436606066005;

  public map: mapbox.Map;

  public style = 'mapbox://styles/mapbox/streets-v12';

  private panelAbierto = true; // Variable para rastrear el estado del panel

  constructor(private navCtrl: NavController, 
              private router: Router,
               private modalCtrl: ModalController,
               
               ) {}

  ngOnInit() {
  }

  // -70.5849933,
  // -33.5974785

  ionViewWillEnter(){
    if (!this.map){
      this.construirMapa();
    }
  }

  
  ok() {
    //this.buildMap();
    this.nuevoMapa();
  }

  construirMapa() {
    // TEXTO EN LA POSICION
    const popup = new mapbox.Popup().setHTML(
      `<h6>aqui estoy</h6>
        <span>esta es mi ubicacion</span>
        `
    );
    //// MANDAR MAPA
    this.map = new mapbox.Map({
      accessToken: environment.TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 15,
      center: [this.lng, this.lat],
    });

    // MARCADOR
    new mapbox.Marker()
      .setLngLat({
         lat:this.lat,lng: this.lng})
      .setPopup(popup)
      .addTo(this.map);
    const marker1 = new mapbox.Marker()
      .setLngLat([12.554729, 55.70651])
      .addTo(this.map);


  }
  //https://api.mapbox.com/directions/v5/mapbox/cycling/-122.42,37.78;-77.03,38.91?access_token=pk.eyJ1IjoicjR2ZWVlbiIsImEiOiJjbG9xMjNwdmswZHhsMm5udXJhZWdtMXZqIn0.y3jYTk9dbMoa8pdxK8oHUw

  //https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoicjR2ZWVlbiIsImEiOiJjbG9xMjNwdmswZHhsMm5udXJhZWdtMXZqIn0.y3jYTk9dbMoa8pdxK8oHUw

  nuevoMapa() {
    // mapboxgl.accessToken ='pk.eyJ1IjoicjR2ZWVlbiIsImEiOiJjbG9xMjNwdmswZHhsMm5udXJhZWdtMXZqIn0.y3jYTk9dbMoa8pdxK8oHUw';
    const mapa = new mapbox.Map({
      accessToken:'pk.eyJ1IjoicjR2ZWVlbiIsImEiOiJjbG9xMjNwdmswZHhsMm5udXJhZWdtMXZqIn0.y3jYTk9dbMoa8pdxK8oHUw',
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.lng,this.lat], // starting position
      zoom: 15,
    });
    // set the bounds of the map
    const bounds = [
      [-123.069003, 45.395273],
      [-122.303707, 45.612333],
    ];
    //mapa.setMaxBounds(bounds);

    // an arbitrary start will always be the same
    // only the end or destination will change
    const start = [-122.662323, 45.523751];

    // this is where the code for the next step will go
    const marker = new mapbox.Marker({draggable:true})
      .setLngLat([this.lng,this.lat])
      .addTo(mapa);
  }

  async getRoute(end: any) {
    const map = new mapbox.Map({
      accessToken:
        'pk.eyJ1IjoicjR2ZWVlbiIsImEiOiJjbG9xMjNwdmswZHhsMm5udXJhZWdtMXZqIn0.y3jYTk9dbMoa8pdxK8oHUw',
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-122.662323, 45.523751], // starting position
      zoom: 12,
    });

   
  }

  
  irACuenta() {
    this.router.navigate(['cuenta']);
  }



  togglePanel() {
    this.panelAbierto = !this.panelAbierto;

    // Realiza las acciones necesarias para abrir o cerrar el panel desplegable
    const panelDespegable = document.querySelector('app-panel-despegable'); // Reemplaza con el selector correcto
    if (panelDespegable) {
      if (this.panelAbierto) {
        panelDespegable.classList.add('abierto');
      } else {
        panelDespegable.classList.remove('abierto');
      }
    }
  }
/// hola este es un comentario

  
}

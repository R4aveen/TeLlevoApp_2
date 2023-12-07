import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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
  private panelAbierto = true;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {}

  ionViewWillEnter(): void {
    if (!this.map) {
      this.construirMapa1();
    }
  }

  construirMapa1() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      this.map = new mapbox.Map({
        accessToken: environment.TOKEN,
        container: 'mapa-box',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: 15,
      });

      const marcador = new mapbox.Marker().setLngLat([lng, lat]).addTo(this.map);

      this.map.addControl(new mapbox.NavigationControl());
      this.map.addControl(new mapbox.FullscreenControl());
      this.map.addControl(
        new mapbox.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );

      // Escuchar evento de llegada al destino
      this.map.on('load', () => {
        // Reemplazar con las coordenadas del destino o punto de término del viaje
        const destino = [-70.57902808465514, -33.59778231829415];

        this.map.addSource('destino', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: destino,
            },
            properties: {}, // Agregar esta línea para solucionar el error
          },
        });

        this.map.addLayer({
          id: 'destino-layer',
          type: 'circle',
          source: 'destino',
          paint: {
            'circle-radius': 10,
            'circle-color': '#FF0000',
          },
        });

        // Configurar distancia para considerar que se llegó al destino
        const distanciaLlegada = 50; // Ajustar según la precisión necesaria en metros

        // Escuchar cambios en la posición del usuario
        this.map.on('geolocate', (event) => {
          const distancia = this.calcularDistancia(
            event.coords.longitude,
            event.coords.latitude,
            destino[0],
            destino[1]
          );

          if (distancia < distanciaLlegada) {
            // Llegó al destino, puedes realizar las acciones necesarias
            console.log('Llegaste al destino');
          }
        });
      });
    });
  }

  calcularDistancia(lon1: number, lat1: number, lon2: number, lat2: number): number {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;

    return distancia * 1000; // Distancia en metros
  }

  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }
}

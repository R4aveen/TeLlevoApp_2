import { Component, OnInit } from '@angular/core';
import { ModalExampleComponent } from '../../inicio-chofer/modals/buscar.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { ViajeAPI } from 'src/app/interfaces/viaje_api';
import { APIViajeDjangoService } from 'src/app/service/servicio-apidjango.service';
import { ToastController } from '@ionic/angular';

import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

import { ServicioChoferesService } from 'src/app/servicio-choferes.service'; 

@Component({
  selector: 'app-panel-chofer',
  templateUrl: './panel-chofer.component.html',
  styleUrls: ['./panel-chofer.component.scss'],
})
export class PanelChoferComponent implements OnInit {
  // ... Otras declaraciones

  fechaActual: Date;
  desde_lat: number = 0.0;
  desde_long: number = 0.0;
  hasta_lat: number = 0.0;
  hasta_long: number = 0.0;
  pasajeros: number = 0;
  costo: number = 0;

  hayUltimosViajes: boolean = false; // Cambia según tus necesidades
  message = 'This modal example uses the modalController to present and dismiss modals.';

  actividades: { id: number; descripcion: string; favorito: boolean }[] = [];


  
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private modalCtrl: ModalController,
    private APIV: APIViajeDjangoService,
    private toast: ToastController,
    private servicioChoferes: ServicioChoferesService,
  ) {
    this.fechaActual = new Date();
  }



  iniciarViaje() {
    console.log('Iniciando un nuevo viaje');
  }

  id: number = 0;

  ngOnInit() {
    const id_chofer = localStorage.getItem('id_chofer');
    if (id_chofer != null) {
      this.id = parseInt(id_chofer);
    }
  }



  ionViewDidEnter() {
    const mySwiper = new Swiper('.custom-swiper-container', {
      initialSlide: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      },
      pagination: {
        el: '.custom-swiper-pagination',
        clickable: true,
      },
    });
  }

  irACuenta() {
    this.router.navigate(['cuenta']);
  }

  //////////

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }
  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  async mostrarToast(mensaje: string, color: string = 'success') {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }

  async grabar() {
    console.log('Después de obtener coordenadas');
    console.log('desde_lat:', this.desde_lat);
    console.log('desde_long:', this.desde_long);
    console.log('hasta_lat:', this.hasta_lat);
    console.log('hasta_long:', this.hasta_long);
    // Verificar que las coordenadas sean válidas antes de hacer la solicitud
    if (this.desde_lat === 0 || this.desde_long === 0 || this.hasta_lat === 0 || this.hasta_long === 0) {
      this.mostrarToast('Las coordenadas no son válidas. Por favor, ingrese coordenadas válidas.', 'danger');
      return; // No continuar con la solicitud si las coordenadas no son válidas
    }
  
    let viaje: ViajeAPI = {
      id_viaje: 6,
      fecha: `${this.fechaActual.getFullYear()}-${(this.fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaActual.getDate().toString().padStart(2, '0')}`,
      costo: this.costo,
      hora_inicio: `${this.fechaActual.getHours().toString().padStart(2, '0')}:${this.fechaActual.getMinutes().toString().padStart(2, '0')}`,
      hora_termino: `${this.fechaActual.getHours().toString().padStart(2, '0')}:${this.fechaActual.getMinutes().toString().padStart(2, '0')}`,
      calificacion: 5,
      desde_long: this.desde_long,
      desde_lat: this.desde_lat,
      hasta_long: this.hasta_long,
      hasta_lat: this.hasta_lat,
      activo: 1,
      id_chofer: this.id,
      pasajeros: [1]
    };
  
    console.log('Antes de realizar la solicitud HTTP');
  
    this.APIV.grabar(viaje).subscribe(
      (nuevoViaje: any) => {
        console.log('Datos del viaje grabados en la API', nuevoViaje);
        this.mostrarToast('Viaje iniciado correctamente');
        this.cerrarModal();
    
        const actividad = {
          id: nuevoViaje.id_viaje,
          descripcion: `${nuevoViaje.fecha} ${nuevoViaje.hora_inicio}`,
          favorito: false,
        };
        this.actividades.push(actividad);
      },
      (error) => {
        console.error('Error al grabar datos:', error);
        if (error.status === 400) {
          // Manejar el error 404 (Not Found) específicamente si es relevante para tu aplicación
        } else {
          this.mostrarToast('Error al grabar los datos. Inténtalo de nuevo', 'danger');
        }
      }
    );
  }

  ir() {
    var duoc = [-70.57902808465514, -33.59778231829415];
    var map = new mapboxgl.Map({
      accessToken: environment.TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [duoc[0], duoc[1]],
      zoom: 13,
    });

    this.obtenerCoordenadas('partida').then((coordenadasPartida) => {
      this.obtenerCoordenadas('destino').then((coordenadasDestino) => {
        this.dibujarRuta(map, coordenadasPartida, coordenadasDestino);
      });
    });
  }
  
  dibujarRuta(map: mapboxgl.Map, coordenadasPartida: number[], coordenadasDestino: number[]) {
    var marker1 = new mapboxgl.Marker().setLngLat([coordenadasPartida[0], coordenadasPartida[1]]).addTo(map);
    var marker2 = new mapboxgl.Marker().setLngLat([coordenadasDestino[0], coordenadasDestino[1]]).addTo(map);
  
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${coordenadasPartida[0]},${coordenadasPartida[1]};${coordenadasDestino[0]},${coordenadasDestino[1]}?steps=true&geometries=geojson&access_token=${environment.TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        var route = data.routes[0].geometry;
  
        // Añade la ruta al mapa
        map.on('load', function () {
          map.addLayer({
            id: 'route',
            type: 'line',
            source: {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: route,
              },
            },
            layout: {
              'line-join': 'round',
              'line-cap': 'round',
            },
            paint: {
              'line-color': '#3887be',
              'line-width': 5,
              'line-opacity': 0.75,
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  obtenerCoordenadas(tipo: 'partida' | 'destino'): Promise<number[]> {
    const direccion = tipo === 'partida' ? this.direccionPartida : this.direccionDestino;

    return new Promise((resolve) => {
      fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${direccion}.json?access_token=${environment.TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          const route = data;
          const largo = route['features'].length;

          if (largo > 0) {
            const lng = route['features'][0]['center'][0];
            const lat = route['features'][0]['center'][1];
            resolve([lng, lat]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  buscarPunto(tipo: 'partida' | 'destino') {
    const direccion = tipo === 'partida' ? this.direccionPartida : this.direccionDestino;

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${direccion}.json?access_token=${environment.TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        const route = data;
        const largo = route['features'].length;

        if (largo > 0) {
          const lng = route['features'][0]['center'][0];
          const lat = route['features'][0]['center'][1];
          const coordenadas = [lng, lat];

          if (tipo === 'partida') {
            this.desde_long = lng;
            this.desde_lat = lat;
          } else {
            this.hasta_long = lng;
            this.hasta_lat = lat;
          }

          this.mostrarMapa(coordenadas[0], coordenadas[1]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  direccionPartida: string = '';
  direccionDestino: string = '';

  mostrarMapa(lng: number, lat: number) {
    const map = new mapboxgl.Map({
      accessToken: environment.TOKEN,
      container: 'mapa-box',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 13,
    });

    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
  }

  buscar() {
    this.obtenerCoordenadas('partida').then((coordenadasPartida) => {
      this.desde_lat = coordenadasPartida[1];
      this.desde_long = coordenadasPartida[0];

      this.obtenerCoordenadas('destino').then((coordenadasDestino) => {
        this.hasta_lat = coordenadasDestino[1];
        this.hasta_long = coordenadasDestino[0];

        this.mostrarMapa(this.desde_long, this.desde_lat);
        this.mostrarMapa(this.hasta_long, this.hasta_lat);
      });
    });
  }
}
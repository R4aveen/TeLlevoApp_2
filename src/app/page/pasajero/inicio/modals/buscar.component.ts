import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';

// importaciones para el mapa
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class ModalExampleComponent {
  isChofer: boolean = true; // Inicialmente, establecemos el valor en 'chofer'
  randomData: any;
  randomName!: string;
  randomVehicle!: string;
  randomPatente!: string;
  randomValoracion!: string;
  
  viajeTomado = false;
  randomNombre = '';

  constructor(
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController,
    private pickerController: PickerController,
    
  ) {
    this.randomData = [];
  }

  async mostrarMensajeProgramar() {
    const picker = await this.pickerController.create({
      columns: [
        {
          name: 'hora',
          options: [
            { text: '00', value: '00' },
            { text: '01', value: '01' },
            { text: '02', value: '02' },
            { text: '03', value: '03' },
            { text: '04', value: '04' },
            { text: '05', value: '05' },
            { text: '06', value: '06' },
            { text: '07', value: '07' },
            { text: '08', value: '08' },
            { text: '09', value: '09' },
            { text: '10', value: '10' },
            { text: '11', value: '11' },
          ],
        },
        {
          name: 'minutos',
          options: [
            { text: '00', value: '00' },
            { text: '10', value: '10' },
            { text: '15', value: '15' },
            { text: '25', value: '25' },
            { text: '30', value: '30' },
            { text: '45', value: '45' },
            { text: '55', value: '55' },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: (value) => {
            const horaSeleccionada = value.hora.text;
            const minutosSeleccionados = value.minutos.text;
            this.mostrarAlertaProgramada(horaSeleccionada, minutosSeleccionados);
          },
        },
      ],
    });

    await picker.present();
  }
  
  async mostrarAlertaProgramada(horaSeleccionada: string, minutosSeleccionados: string) {
    const randomNombre = this.generateRandomName();
    const alert = await this.alertController.create({
      header: 'Viaje Programado',
      message: `Su viaje ha sido programado para las ${horaSeleccionada}:${minutosSeleccionados} por el chofer ${randomNombre}`,
      buttons: [
        {
          text: 'Regresar',
          handler: () => {
            this.navCtrl.pop();
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarMensaje() {
    const randomNombre = this.generateRandomName();
    const alert = await this.alertController.create({
      header: 'Viaje Tomado',
      message: `Su viaje ha sido tomado por el chofer ${randomNombre}`,
      buttons: [
        {
          text: 'Regresar',
          handler: () => {
            this.navCtrl.pop();
          },
        },
      ],
    });

    await alert.present();
  }

  tomarViaje() {
    this.viajeTomado = true;
    this.randomNombre = this.generateRandomName();
  }

  volver() {
    this.navCtrl.pop();
  }

  generateRandomName() {
    const names = ['Juan', 'Pablo', 'Javier', 'María', 'Ana'];
    return names[Math.floor(Math.random() * names.length)];
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss('confirm');
  }
  
  toggleChanged() {
    // Cambia el valor booleano cuando se activa o desactiva el toggle
    this.isChofer = !this.isChofer;
  }
    
  

  public data = [
    { name: 'Parque Bustamante', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1z-8Ns2OiN41oBARmMV9e-1Q1Qtg&hl=es' },
    { name: 'Mall Vespucio', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1CWvdUCNE609cb2N58e_jIbGtXvI&hl=en_US' },
    { name: 'Hospital Sotero del Rio', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=16Ssjmc78Sqd751gsZsuSsYF3qqE&hl=en_US' },
    { name: 'Duoc Uc Puente Alto', imageUrl: 'https://images.adsttc.com/media/image_maps/5127/07cd/b3fc/4b11/a700/099b/large/open-uri20170522-28666-17etxl4.jpg?1495465430' },
    { name: 'Duoc Uc San Joaquin', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1yBArGLINfMOSZ-ua8jtbrClgdcw&hl=es' },
    { name: 'Mc Donalds', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1X7fNtm7iwd0KQAQIiPY17sP6P3k&hl=en_US' },
    { name: 'Cinepolis', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1J3ibFrleCpjCiEnbzeN9dM-_B64&hl=en_US' },
    { name: 'Casa', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1Kf9U7RoroMn-yX8_-rU7RDWUYj8&hl=en_US' },
    { name: 'Trabajo', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1tWKNOo-VTwQfrwHnVkPydql5fa0' },
    { name: 'Particular', imageUrl: 'https://www.google.com/maps/d/thumbnail?mid=1jcQOezxJttAYxjh2c0mBLhUUDTk&hl=en_US' },
  ];
  public results: any[] = [];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    if (query.trim() !== '') {
      const matchingItems = this.data.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      this.results = matchingItems;
      this.showForm = true;
      this.generateRandomData();
    } else {
      this.results = [];
      this.showForm = false;
    }
  }
  
  showForm = false;
  selectedName = '';
  selectedVehicle = '';
  selectedPatente = '';
  selectedValoracion: number = 0;

  generateRandomData() {
    const names = ['Juan', 'Pablo', 'Javier', 'María', 'Ana'];
    const vehicles = ['Carro', 'Moto', 'Camión'];
    const patentes = ['ABC-123', 'XYZ-789', 'DEF-456'];
  
    this.randomName = names[Math.floor(Math.random() * names.length)];
    this.randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)];
    this.randomPatente = patentes[Math.floor(Math.random() * patentes.length)];
    this.selectedValoracion = Math.random() * 5;
  }



  
  lngFin:number=0;
  latFin:number=0;
  ir() {
    // aqui se obtiene la posision de usuariioo
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        var map = new mapboxgl.Map({
            accessToken: environment.TOKEN,
            container: 'mapa-box',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 13,
        });

        var startPoint = [lng, lat]; // Coordenadas del punto de inicio (ubicación actual del usuario xd)
        var endPoint = [this.lngFin, this.latFin];
        console.log(endPoint);

        var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
        var marker2 = new mapboxgl.Marker().setLngLat([endPoint[0], endPoint[1]]).addTo(map);

        // Utiliza la API de direcciones para obtener la ruta entre los dos puntos
        fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${startPoint[0]},${startPoint[1]};${endPoint[0]},${endPoint[1]}?steps=true&geometries=geojson&access_token=${environment.TOKEN}`
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
    });
}

  direccion:string='';

  buscar() {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.direccion}.json?access_token=${environment.TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        const features = data.features;
        
        if (features.length > 0) {
          // Obtén las coordenadas del primer resultado de la búsqueda
          const coordinates = features[0].center;
          
          // Establece las coordenadas como el punto de inicio (lngFin, latFin)
          this.lngFin = coordinates[0];
          this.latFin = coordinates[1];
  
          // Llama a la función para mostrar el mapa con el nuevo punto de inicio
          this.mostrarMapa();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  mostrarMapa() {
    const map = new mapboxgl.Map({
      accessToken: environment.TOKEN,
      container: 'mapa-box', // El ID del contenedor donde se mostrará el mapa
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.lngFin, this.latFin],
      zoom: 13,
    });
  
    // Añade un marcador en el punto de destino
    new mapboxgl.Marker().setLngLat([this.lngFin, this.latFin]).addTo(map);

    
  }
}

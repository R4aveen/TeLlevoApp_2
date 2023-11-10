import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { PickerController } from '@ionic/angular';

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
    private pickerController: PickerController
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
}

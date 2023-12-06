import { Component, OnInit } from '@angular/core';
import { ModalExampleComponent } from '../../inicio-chofer/modals/buscar.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { ViajeAPI } from 'src/app/interfaces/viaje_api';
import { APIViajeDjangoService } from 'src/app/service/servicio-apidjango.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-panel-chofer',
  templateUrl: './panel-chofer.component.html',
  styleUrls: ['./panel-chofer.component.scss'],
})
export class PanelChoferComponent  implements OnInit {
  fechaActual : Date;
  desde_lat: number = 0.0;
  desde_long: number = 0.0;
  hasta_lat: number = 0.0;
  hasta_long: number = 0.0;
  pasajeros: number = 0;
  costo: number = 0;

  hayUltimosViajes: boolean = false; // Cambia según tus necesidades
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private navCtrl: NavController, private router: Router, private modalCtrl: ModalController,
              private APIV:APIViajeDjangoService, 
              private toast : ToastController,) {this.fechaActual = new Date(); }

  id: number=0;
  

  ngOnInit() {const id_chofer = localStorage.getItem("id_chofer")
  if (id_chofer!=null) {
    this.id=parseInt(id_chofer)
  }}

  iniciarViaje() {
    console.log("Iniciando un nuevo viaje");
    // Agrega aquí el código para iniciar un nuevo viaje si es necesario
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
 
  grabar(){
    let viaje:ViajeAPI={
      id_viaje: 6,
      fecha: `${this.fechaActual.getFullYear()}-${(this.fechaActual.getMonth() + 1).toString().padStart(2, '0')}-${this.fechaActual.getDate().toString().padStart(2, '0')}`,
      costo : this.costo,
      hora_inicio: `${this.fechaActual.getHours().toString().padStart(2, '0')}:${this.fechaActual.getMinutes().toString().padStart(2, '0')}`,
      hora_termino: `${this.fechaActual.getHours().toString().padStart(2, '0')}:${this.fechaActual.getMinutes().toString().padStart(2, '0')}`,
      calificacion : 5,
      desde_long : this.desde_long,
      desde_lat : this.desde_lat,
      hasta_long : this.hasta_long,
      hasta_lat : this.hasta_lat,
      activo : 1,
      id_chofer : this.id,
      pasajeros : [1]
    }
    
    console.log(viaje);
    this.APIV.grabar(viaje).subscribe(
      () => {
        console.log('Datos del viaje grabados en la API');
        this.mostrarToast('Viaje iniciado correctamente');
        this.cerrarModal();
        
      },
      (error) => {
        console.error('Error al grabar datos:', error);
        this.mostrarToast('Error al grabar los datos. Inténtalo de nuevo', 'danger');
      }
    );
    }}


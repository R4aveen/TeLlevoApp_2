import { Component, OnInit } from '@angular/core';
import { ModalExampleComponent } from '../../inicio/modals/buscar.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-panel-despegable',
  templateUrl: './panel-despegable.component.html',
  styleUrls: ['./panel-despegable.component.scss'],
})
export class PanelDespegableComponent  implements OnInit {

  hayUltimosViajes: boolean = false; // Cambia según tus necesidades
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private navCtrl: NavController, private router: Router, private modalCtrl: ModalController) {}

  ngOnInit() {}

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

  
}

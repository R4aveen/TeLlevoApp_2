import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-direccion-particular-modal',
  templateUrl: './agregar-direccion-particular-modal.component.html',
  styleUrls: ['./agregar-direccion-particular-modal.component.scss'],
})
export class AgregarDireccionParticularModalComponent {
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarDireccionParticular() {
    // Lógica para agregar dirección particular
    this.modalCtrl.dismiss({ direccionAgregada: true });
  }
}

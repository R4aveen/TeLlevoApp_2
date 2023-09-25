import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-direccion-laboral-modal',
  templateUrl: './agregar-direccion-laboral-modal.component.html',
  styleUrls: ['./agregar-direccion-laboral-modal.component.scss'],
})
export class AgregarDireccionLaboralModalComponent {
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarDireccionLaboral() {
    // Lógica para agregar dirección laboral
    this.modalCtrl.dismiss({ direccionAgregada: true });
  }
}

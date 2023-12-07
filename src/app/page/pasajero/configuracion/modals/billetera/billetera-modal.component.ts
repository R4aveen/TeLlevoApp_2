import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-billetera-modal',
  templateUrl: './billetera-modal.component.html',
  styleUrls: ['./billetera-modal.component.scss'],
})
export class BilleteraModalComponent {
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    // Lógica para guardar los cambios del perfil
    this.modalCtrl.dismiss({ cambiosGuardados: true });
  }
}
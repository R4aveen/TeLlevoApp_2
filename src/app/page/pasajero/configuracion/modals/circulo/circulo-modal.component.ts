import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-circulo-modal',
  templateUrl: './circulo-modal.component.html',
  styleUrls: ['./circulo-modal.component.scss'],
})
export class CirculoModalComponent {
  items: any[] = [
    { uid: 1, subject: 'Elemento 1' },
    { uid: 2, subject: 'Elemento 2' },
    // Agrega más elementos según sea necesario
  ];

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    // Lógica para guardar los cambios del perfil
    this.modalCtrl.dismiss({ cambiosGuardados: true });
  }

  // Método para manejar la eliminación del elemento
  borrarItem(item: any) {
    // Filtrar la matriz para eliminar el elemento con el UID correspondiente
    this.items = this.items.filter((el) => el.uid !== item.uid);
  }
}

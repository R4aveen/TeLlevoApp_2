import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorito-modal',
  templateUrl: './favorito-modal.component.html',
  styleUrls: ['./favorito-modal.component.scss'],
})
export class FavoritosModalComponent {
  listaFavoritos: any[] = [
    { id: 1, nombre: 'Favorito 1' },
    { id: 2, nombre: 'Favorito 2' },
    { id: 3, nombre: 'Favorito 3' },
  ];

  public alertButtons = ['Volver a repetir'];
  public mostrarAlerta: boolean = false;
  public favoritoSeleccionado: any;

  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  mostrarConfirmacion(favorito: any) {
    this.favoritoSeleccionado = favorito;
    this.mostrarAlerta = true;
  }

  iniciarViaje() {
    console.log('Iniciando el viaje para:', this.favoritoSeleccionado.nombre);
    this.mostrarAlerta = false;
  }
}

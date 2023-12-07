import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FavoritosService } from './servicio/favoritos-service.service';

@Component({
  selector: 'app-favorito-modal',
  templateUrl: './favorito-modal.component.html',
  styleUrls: ['./favorito-modal.component.scss'],
})
export class FavoritosModalComponent {
  selectedTab: string = 'all';
  listaElementos: any[] = [
    { id: 1, nombre: 'Ejemplo 1' },
    { id: 2, nombre: 'Ejemplo 2' },
    { id: 3, nombre: 'Ejemplo 3' },
  ];
  listaFavoritos: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private favoritosService: FavoritosService
  ) {
    // Obtener los favoritos del servicio al inicializar el componente
    this.listaFavoritos = this.favoritosService.obtenerFavoritos();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    // Puedes guardar los favoritos en el servicio si es necesario
    this.favoritosService.agregarFavorito({ id: 4, nombre: 'Favorito 1' });
    this.modalCtrl.dismiss({ cambiosGuardados: true });
  }
}
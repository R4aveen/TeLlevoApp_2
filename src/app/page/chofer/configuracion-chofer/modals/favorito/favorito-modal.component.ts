import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorito-modal', // El selector que utilizas para el componente
  templateUrl: './favorito-modal.component.html', // La ruta a la plantilla HTML
  styleUrls: ['./favorito-modal.component.scss'], // Rutas a los estilos si los tienes
})
export class FavoritosModalComponent {
  selectedTab: string = 'all';
  listaElementos: any[] = [
    { id: 1, nombre: 'Ejemplo 1' },
    { id: 2, nombre: 'Ejemplo 2' },
    { id: 3, nombre: 'Ejemplo 3' },
  ];
  listaFavoritos: any[] = [
    { id: 4, nombre: 'Favorito 1' },
    { id: 5, nombre: 'Favorito 2' },
  ];
  
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    // Lógica para guardar los cambios del perfil
    this.modalCtrl.dismiss({ cambiosGuardados: true });
  }
}
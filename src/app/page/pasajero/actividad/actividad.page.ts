import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DetalleActividadComponent } from './modals/detalle-actividad/detalle-actividad.component';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.page.html',
  styleUrls: ['./actividad.page.scss'],
})
export class ActividadPage {
  actividades: any[] = [  // Aquí declaras el tipo explícitamente como un arreglo de objetos any
    { descripcion: '19-09-2023 17:50', favorito: false },
    { descripcion: '07-09-2023 13:50', favorito: true },
    { descripcion: '07-09-2023 13:50', favorito: true },
  ];

  constructor(private modalCtrl: ModalController, private router: Router) {}


  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: DetalleActividadComponent,
      componentProps: {

      },
    });
    return await modal.present();
  }
 
  agregarFavorito(actividad: any) {
    actividad.favorito = !actividad.favorito;
    console.log('Agregar a favoritos:', actividad);
  }

  irACuenta() {
    this.router.navigate(['cuenta']);
  }
  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  
}

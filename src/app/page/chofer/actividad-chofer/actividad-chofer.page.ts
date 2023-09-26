import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DetalleActividadComponent } from './modals/detalle-actividad/detalle-actividad.component';
@Component({
  selector: 'app-actividad-chofer',
  templateUrl: './actividad-chofer.page.html',
  styleUrls: ['./actividad-chofer.page.scss'],
})
export class ActividadChoferPage implements OnInit {
  actividades = [
    { descripcion: '19-09-2023 17:50', favorito: false },
    { descripcion: '07-09-2023 13:50', favorito: true },]

  constructor(private modalCtrl: ModalController, private router: Router) {}

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: DetalleActividadComponent, // Componente modal que se abrirá
      componentProps: {
        // Puedes pasar datos al componente modal si es necesario
        // Por ejemplo: datosViaje: miDatoViaje
      },
    });
    return await modal.present();
  }
  agregarFavorito(actividad: any) {
    actividad.favorito = !actividad.favorito;
    console.log('Agregar a favoritos:', actividad);
  }

  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }
  
  ngOnInit() {
  }

}

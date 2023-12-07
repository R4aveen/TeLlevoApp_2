import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DetalleActividadComponent } from './modals/detalle-actividad/detalle-actividad.component';
import { APIViajeDjangoService } from 'src/app/service/servicio-apidjango.service';


@Component({
  selector: 'app-actividad-chofer',
  templateUrl: './actividad-chofer.page.html',
  styleUrls: ['./actividad-chofer.page.scss'],
})
export class ActividadChoferPage implements OnInit {
  actividades: { descripcion: string; favorito: boolean }[] = [];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private APIV: APIViajeDjangoService
  ) {}

  async ngOnInit() {
    const viajes = await this.APIV.listar().toPromise();
    if (viajes) {
      this.actividades = viajes.map((viaje) => ({
        id: viaje.id_viaje,
        descripcion: `${viaje.fecha} ${viaje.hora_inicio}`,
        favorito: false,
      }));
    } else {
      console.error('No se obtuvieron datos de viajes.');
    }
  }

async abrirModal(descripcion: string) {
  const viajeEspecifico = this.actividades.find((act) => act.descripcion === descripcion);

  if (viajeEspecifico) {
    const modal = await this.modalCtrl.create({
      component: DetalleActividadComponent,
      componentProps: {
        viaje: viajeEspecifico,
      },
    });

    modal.onDidDismiss().then((data) => {
      // Resto del código...
    });

    return await modal.present();
  } else {
    console.error('No se encontró el viaje específico.');
  }
}

  agregarFavorito(actividad: any) {
    actividad.favorito = !actividad.favorito;
    console.log('Agregar a favoritos:', actividad);
  }

  irACuenta() {
    this.router.navigate(['cuenta-chofer']);
  }
}
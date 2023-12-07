import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { APIViajeDjangoService } from 'src/app/service/servicio-apidjango.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.scss'],
})
export class DetalleActividadComponent implements OnInit {
  viaje: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private viajeService: APIViajeDjangoService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id_viaje = params['id']; 
      if (id_viaje) {
        this.viajeService.obtenerDetallesViaje(id_viaje).subscribe(
          (detalles) => {
            this.viaje = detalles;
          },
          (error) => {
            console.error('Error al obtener detalles del viaje', error);
          }
        );
      }
    });
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}

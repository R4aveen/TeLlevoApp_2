import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.component.html',
  styleUrls: ['./detalle-actividad.component.scss'],
})
export class DetalleActividadComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, ) { }

  ngOnInit() {}
  
  cerrarModal() {
    this.modalCtrl.dismiss();
  }
}

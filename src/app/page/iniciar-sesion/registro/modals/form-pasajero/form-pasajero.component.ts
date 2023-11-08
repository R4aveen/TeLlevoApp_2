import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { PasajeroAPI } from 'src/app/interfaces/pasajero-api';
import { APIPasajeroDjangoService } from 'src/app/service/servicio-apidjango.service';

@Component({
  selector: 'app-form-pasajero',
  templateUrl: './form-pasajero.component.html',
  styleUrls: ['./form-pasajero.component.scss'],
})
export class FormPasajeroComponent  implements OnInit {

  usuario: string="";
  nombre: string="";
  apellido: string="";
  correo: string="";
  direccion: string="";
  contrasena: string="";
  confirmarContrasena: string="";
  telefono: number=9 ;

  constructor(private modalCtrl : ModalController, 
              private APIP:APIPasajeroDjangoService, 
              private toast : ToastController,
              private router: Router,) { }

  ngOnInit() {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  async mostrarToast(mensaje: string, color: string = 'success') {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 3000, 
      position: 'bottom', 
      color: color,
    });
    toast.present();
  }
  grabar(){
    let pasajero:PasajeroAPI={
      id: 3,
      nombre: this.nombre,
      apellido: this.apellido,
      usuario: this.usuario,
      pass_field: this.contrasena,
      direccion: this.direccion,
      correo: this.correo,
      telefono: this.telefono
    }
    this.APIP.grabar(pasajero).subscribe(
      () => {
        console.log('Datos del usuario grabados en la API');
        this.mostrarToast('Datos grabados correctamente');
        this.cerrarModal();
        this.router.navigate(['inicio']);
        
      },
      (error) => {
        console.error('Error al grabar datos:', error);
        this.mostrarToast('Error al grabar los datos. Inténtalo de nuevo', 'danger');
      }
    );
    }}

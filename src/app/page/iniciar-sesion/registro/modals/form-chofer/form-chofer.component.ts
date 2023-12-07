import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { ChoferAPI } from 'src/app/interfaces/chofer-api';
import { APIChoferDjangoService } from 'src/app/service/servicio-apidjango.service';

@Component({
  selector: 'app-form-chofer',
  templateUrl: './form-chofer.component.html',
  styleUrls: ['./form-chofer.component.scss'],
})

export class FormChoferComponent  implements OnInit {

  
  nombre: string="";
  apellido: string="";
  usuario: string="";
  contrasena: string="";
  confirmarContrasena: string="";
  direccion: string="";
  correo: string="";
  telefono: number=9 ;
  patente: string="";

  constructor(private modalCtrl : ModalController,
              private APIC:APIChoferDjangoService, 
              private toast : ToastController,
              private router: Router,
              ) { }

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
    let chofer:ChoferAPI={
    id_chofer:1,
    nombre_chofer:this.nombre,
    apellido_chofer:this.apellido,
    usuario_chofer:this.usuario,
    pass_chofer:this.contrasena,
    direccion:this.direccion,
    correo:this.correo,
    telefono:this.telefono,
    patente:this.patente,
    }
    this.APIC.grabar(chofer).subscribe(
      () => {
        console.log('Datos del usuario grabados en la API');
        this.mostrarToast('Datos grabados correctamente');
        this.cerrarModal();
        this.router.navigate(['inicio_chofer']);
        
      },
      (error) => {
        console.error('Error al grabar datos:', error);
        this.mostrarToast('Error al grabar los datos. Inténtalo de nuevo', 'danger');
        this.mostrarToast(error, 'danger');

      }
    );
    }}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { APIPasajeroDjangoService } from 'src/app/service/servicio-apidjango.service';
import { APIChoferDjangoService } from 'src/app/service/servicio-apidjango.service';
import { PasajeroAPI } from 'src/app/interfaces/pasajero-api';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre:string='';
  password:string='';

  constructor(
    private alertCtrl:AlertController,
    private router: Router,
    private toastCtrl:ToastController,
    private pasajeroService:APIPasajeroDjangoService,
    private choferService:APIChoferDjangoService,
  ) { }
  

  ngOnInit() {
  }

  async login(){
    const usuario = this.nombre;
    const contraseña = this.password;
    if (usuario && contraseña) {
      this.pasajeroService.buscarPasajero(usuario, contraseña).subscribe(
        (pasajero) => {
          const p = this.existeP(pasajero,this.nombre,this.password)
          if (p==1) {
            this.router.navigate(['inicio']);
          } else{
            if (usuario && contraseña) {
              this.choferService.buscarChofer(usuario, contraseña).subscribe(
                (chofer) => {
                  const c = this.existeC(chofer,this.nombre,this.password)
        
                  if (c==1) {
                    this.router.navigate(['inicio-chofer']);
                  } else{
                    this.mostrarMensajeError("Usuario o contraseña incorrecto");
                  }
                },
                (error) => {
                  this.mostrarMensajeError("Error de autenticación. Inténtalo de nuevo."+error);
                }
              );
            } else {
              this.mostrarMensajeError("Por favor, ingresa usuario y contraseña.");
            }
          }
        },
        (error) => {
          this.mostrarMensajeError("Error de autenticación. Inténtalo de nuevo."+error);
        }
      );
    } else {
      this.mostrarMensajeError("Por favor, ingresa usuario y contraseña.");
    }
  }
    
 existeP(pasajero:any,nombre: string, password :string){  
    const Pasajeros =JSON.parse(JSON.stringify(pasajero))
    for (let index = 0; index < Pasajeros.length; index++) {
      const element = Pasajeros[index];
      const usuario=(element.usuario)
      const pass=(element.pass_field)
      if (usuario==nombre && pass==password) {
        localStorage.setItem("id_pasajero",element.id);
        localStorage.setItem("usuario_pasajero",element.usuario);
        localStorage.setItem("direccion_pasajero",element.direccion);
        localStorage.setItem("correo_pasajero",element.correo);
        console.log(localStorage)
        return 1
      }
      
    }
    return 0
   } 

   existeC(chofer:any,nombre: string, password :string){  
    const choferes =JSON.parse(JSON.stringify(chofer))
    for (let index = 0; index < choferes.length; index++) {
      const element = choferes[index];
      const usuario=(element.usuario_chofer)
      const pass=(element.pass_chofer)
      if (usuario==nombre && pass==password) {
        localStorage.setItem("id_chofer",element.id_chofer);
        localStorage.setItem("usuario_chofer",element.usuario_chofer);
        localStorage.setItem("direccion_chofer",element.direccion);
        localStorage.setItem("correo_chofer",element.correo);
        console.log(localStorage)
        return 1
      }
    }
    return 0
   } 

  async mostrarMensajeError(mensaje:string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000, 
      position: 'bottom', 
      color: 'danger', 
    });
    await toast.present();
  }

}
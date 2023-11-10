import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta-chofer',
  templateUrl: './cuenta-chofer.page.html',
  styleUrls: ['./cuenta-chofer.page.scss'],
})
export class CuentaChoferPage implements OnInit {

  constructor(
    private alertCtrl:AlertController,
    private router: Router
  ) { }
  nombre:string="";
  correo:string="";

  pag1() {
    this.router.navigate(['/splash']); // Usar una ruta absoluta con '/' al inicio
  }
  
  ngOnInit() {
    const usuario = localStorage.getItem("usuario_chofer")
    if (usuario!=null) {
      this.nombre=usuario
    }
    const correo = localStorage.getItem("correo_chofer")
    if (correo!=null) {
      this.correo=correo
    }
  }

  openFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Aquí puedes procesar la imagen cargada, por ejemplo, mostrarla en el avatar
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatarImg = document.querySelector('.custom-avatar img') as HTMLImageElement | null;
        if (avatarImg && e.target) {
          avatarImg.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }

}

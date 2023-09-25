import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  constructor(
    private alertCtrl:AlertController,
    private router: Router
  ) { }

  pag1() {
    this.router.navigate(['/splash']); // Usar una ruta absoluta con '/' al inicio
  }
  
  ngOnInit() {
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

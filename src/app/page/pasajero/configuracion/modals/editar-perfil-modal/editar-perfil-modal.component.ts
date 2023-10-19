import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil-modal',
  templateUrl: './editar-perfil-modal.component.html',
  styleUrls: ['./editar-perfil-modal.component.scss'],
})
export class EditarPerfilModalComponent {
  constructor(private modalCtrl: ModalController) {}

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  guardarCambios() {
    // Lógica para guardar los cambios del perfil
    this.modalCtrl.dismiss({ cambiosGuardados: true });
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

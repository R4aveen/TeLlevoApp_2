// editar-perfil-modal.component.ts
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil-modal',
  templateUrl: './editar-perfil-modal.component.html',
  styleUrls: ['./editar-perfil-modal.component.scss'],
})
export class EditarPerfilModalComponent {
  constructor(private modalCtrl: ModalController) {}

  selectedFile: File | null = null;
  croppedImage: string | null = null;

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
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;
          const maxSize = 500; 

          let width = img.width;
          let height = img.height;

          if (width > maxSize || height > maxSize) {
            if (width > height) {
              height *= maxSize / width;
              width = maxSize;
            } else {
              width *= maxSize / height;
              height = maxSize;
            }
          }

          // Centrar y recortar la imagen
          const x = (width - maxSize ) / 500;
          const y = (height - maxSize) / 500;

          canvas.width = maxSize;
          canvas.height = maxSize;
          ctx.drawImage(img, x, y, maxSize, maxSize, 0, 0, maxSize, maxSize);

          this.croppedImage = canvas.toDataURL('image/jpeg'); 
        };

        img.src = e.target!.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

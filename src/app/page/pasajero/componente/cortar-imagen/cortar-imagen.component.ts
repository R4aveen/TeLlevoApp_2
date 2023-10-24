import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@Component({
  selector: 'app-cortar-imagen',
  templateUrl: './cortar-imagen.component.html',
  styleUrls: ['./cortar-imagen.component.scss'],
})
export class CortarImagenComponent {
  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper!: ImageCropperComponent;

  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }

  fileChangeListener($event: any): void {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (loadEvent: any) => {
      image.src = loadEvent.target.result;
      this.cropper.setImage(image);
    };

    myReader.readAsDataURL(file);
  }
}

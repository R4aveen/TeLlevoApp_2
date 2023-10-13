import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirculoModalComponent } from './circulo-modal.component';
import { SwiperComponent } from './swiper/swiper.component'; // Asegúrate de importar el componente

@NgModule({
  declarations: [CirculoModalComponent, SwiperComponent], // Añade SwiperComponent a las declaraciones
  imports: [CommonModule],
})
export class CirculoModalModule {}

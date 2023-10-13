import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent {
  @Input() itemText: string | undefined; // Texto del elemento
  @Output() deleted = new EventEmitter<void>(); // Evento emitido cuando se borra el elemento

  constructor() {}

  // Método para manejar la eliminación del elemento
  borrarItem() {
    // Puedes agregar lógica personalizada aquí si es necesario
    // Por ejemplo, llamar a un servicio para eliminar el elemento en tu backend

    // Emitir el evento de eliminación
    this.deleted.emit();
  }
}

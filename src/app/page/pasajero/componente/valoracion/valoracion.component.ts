import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.scss'],
})
export class ValoracionComponent {
  @Input() rating: number = 0; // Valoración inicial
  stars: string[] = [];
  randomColor: string | undefined; // Agrega una propiedad para el color de relleno aleatorio

  constructor() {
    this.generateStars();
    this.generateRandomColor(); // Genera un color aleatorio al inicializar el componente
  }

  private generateStars() {
    // Genera un arreglo de estrellas llenas o vacías en base a la valoración
    for (let i = 1; i <= 5; i++) {
      if (i <= this.rating) {
        this.stars.push('star');
      } else {
        this.stars.push('star-outline');
      }
    }
  }

  private generateRandomColor() {
    // Genera un color hexadecimal aleatorio
    this.randomColor = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  }
}

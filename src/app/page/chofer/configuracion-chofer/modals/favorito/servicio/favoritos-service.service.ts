import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private favoritos: any[] = [];

  agregarFavorito(item: any) {
    this.favoritos.push(item);
  }

  quitarFavorito(item: any) {
    const index = this.favoritos.findIndex((fav) => fav.id === item.id);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
    }
  }

  obtenerFavoritos() {
    return this.favoritos;
  }
}
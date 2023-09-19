import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private datosRegistro: any = {};

  constructor() {}

  guardarDatosRegistro(datos: any) {
    this.datosRegistro = (datos);
  }

  getDatosRegistro() {
    return this.datosRegistro;
  }
}

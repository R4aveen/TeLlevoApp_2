import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { PasajeroAPI } from '../interfaces/pasajero-api';

import { ChoferAPI } from '../interfaces/chofer-api';

import { Observable } from 'rxjs';

import { ViajeAPI } from '../interfaces/viaje_api';

@Injectable({
  providedIn: 'root'
})

export class APIPasajeroDjangoService {

  constructor(private http:HttpClient) { }

  url:string="https://apidjango.pythonanywhere.com"
  urlPasajeroRec:string=this.url+"/api/pasajero/"
  listar(){
    return this.http.get<PasajeroAPI[]>(this.urlPasajeroRec)
  }
  grabar(pasajero: PasajeroAPI){
    return this.http.post(this.urlPasajeroRec,pasajero)
  }

  buscarPasajero(usuario: string, contrasena: string): Observable<PasajeroAPI> {
    const url = `${this.urlPasajeroRec}?usuario=${usuario}&pass=${contrasena}`;
    return this.http.get<PasajeroAPI>(url);
  }
  autenticarPasajero(usuario: string, contrasena: string): Observable<PasajeroAPI> {
    const url = `${this.urlPasajeroRec}?usuario=${usuario}&contrasena=${contrasena}`;
    return this.http.get<PasajeroAPI>(url);
  }
  
  
}

@Injectable({
  providedIn: 'root'
})
export class APIChoferDjangoService {

  constructor(private http:HttpClient) { }

  url:string="https://apidjango.pythonanywhere.com"
  urlChoferRec:string=this.url+"/api/chofer/"
  listar(){
    return this.http.get<ChoferAPI[]>(this.urlChoferRec)
  }
  grabar(chofer: ChoferAPI){
    return this.http.post(this.urlChoferRec,chofer)
  }

  buscarChofer(usuario: string, contrasena: string): Observable<ChoferAPI> {
    const url = `${this.urlChoferRec}?usuario_chofer=${usuario}&pass_chofer=${contrasena}`;
    return this.http.get<ChoferAPI>(url);
  }
}

@Injectable({
  providedIn: 'root',
})
export class APIViajeDjangoService {
  constructor(private http: HttpClient) {}

  url: string = 'https://apidjango.pythonanywhere.com';
  urlViajeRec: string = this.url + '/api/viaje/';

  listar() {
    return this.http.get<ViajeAPI[]>(this.urlViajeRec);
  }

  grabar(viaje: ViajeAPI) {
    return this.http.post(this.urlViajeRec, viaje);
  }

  buscarChofer(id_chofer: string): Observable<ViajeAPI> {
    const url = `${this.urlViajeRec}?id_chofer=${id_chofer}`;
    return this.http.get<ViajeAPI>(url);
  }

  // Nuevo método para obtener detalles de viaje por ID
  obtenerDetallesViaje(id_viaje: string): Observable<any> {
    const url = `${this.urlViajeRec}?id_viaje=${id_viaje}/`; 
    return this.http.get<ViajeAPI>(url);
  }
  
  actualizarFavorito(idViaje: number, favorito: boolean): Observable<any> {
    const url = `${this.urlViajeRec}/${idViaje}`;
    return this.http.patch(url, { favorito });
  }
}

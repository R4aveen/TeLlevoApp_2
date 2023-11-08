import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { PasajeroAPI } from '../interfaces/pasajero-api';

import { ChoferAPI } from '../interfaces/chofer-api';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class APIPasajeroDjangoService {

  constructor(private http:HttpClient) { }

  url:string="http://127.0.0.1:8000"
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
  
  
}

@Injectable({
  providedIn: 'root'
})
export class APIChoferDjangoService {

  constructor(private http:HttpClient) { }

  url:string="http://127.0.0.1:8000"
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


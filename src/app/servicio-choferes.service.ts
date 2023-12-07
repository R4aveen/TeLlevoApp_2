import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChoferAPI } from '../app/interfaces/chofer-api';

@Injectable({
  providedIn: 'root',
})
export class ServicioChoferesService {
  private apiUrl = 'https://apidjango.pythonanywhere.com'; 

  constructor(private http: HttpClient) {}

  obtenerChoferesCercanos(latitud: number, longitud: number): Observable<ChoferAPI[]> {

    const endpoint = `${this.apiUrl}/https://apidjango.pythonanywhere.com/api/chofer?latitud=${latitud}&longitud=${longitud}`;
    return this.http.get<ChoferAPI[]>(endpoint);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioInversoService {

  private apiUrl = 'https://nominatim.openstreetmap.org/reverse';

  constructor(private http: HttpClient) {}

  obtenerLugarDesdeCoordenadas(latitud: number, longitud: number): Observable<any> {
    const params = {
      format: 'json',
      lat: latitud.toString(),
      lon: longitud.toString(),
    };

    return this.http.get<any>(this.apiUrl, { params });
  }
}

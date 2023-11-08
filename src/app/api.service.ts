import { Injectable } from '@angular/core';

import {HttpClient,
        HttpHeaders,
        HttpErrorResponse,
        } from '@angular/common/http';
import { Observable, retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'aplication/json',
      'Access-Control-Allow-Origin': '**',
    }),
  };

  apiURL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBk8MOJ18mV_JU898qJFgBuzuLjjLfXCf4&address=';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL + '/posts/').pipe(retry(3));
    
  }

  // buscar la direccion

  getPost(direccion:string): Observable<any> {
    return this.http.get(this.apiURL + direccion).pipe(retry(3));
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.apiURL + '/posts/', post, this.httpOptions).pipe(retry(3));
  }

  updatePost(id: string, post: any): Observable<any> {
    return this.http.put(this.apiURL + '/posts/' + id, post, this.httpOptions).pipe(retry(3));
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(this.apiURL + '/posts/' + id, this.httpOptions);
  }
  recu(): Observable<any> {
    return this.http.get('https://mindicador.cl/api/dolar').pipe(retry(3));
  }

}

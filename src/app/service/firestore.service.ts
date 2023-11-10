import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  crearConexion(){
    this.firestore.collection('receta');

  }

  recuperarTodo (){
    this.firestore.collection('receta').valueChanges()
    .subscribe((res)=>{
      console.log("Datos:"+res);
    })
  }

}

import { Component, OnInit } from '@angular/core';

import { APIPasajeroDjangoService } from 'src/app/service/servicio-apidjango.service';

import { PasajeroAPI } from 'src/app/interfaces/pasajero-api';

@Component({
  selector: 'app-prueba-apidjango',
  templateUrl: './prueba-apidjango.page.html',
  styleUrls: ['./prueba-apidjango.page.scss'],
})
export class PruebaAPIDjangoPage implements OnInit {

  constructor(private APIP:APIPasajeroDjangoService) { }

  listado:PasajeroAPI[]=[]

  ngOnInit() {
  }
  
  listar(){
    this.APIP.listar().subscribe((data)=>{
      console.log(data)
      this.listado=JSON.parse(JSON.stringify(data))
    })
  }

  grabar(){
    let pasajero:PasajeroAPI={
      id:2,
      nombre:'Andrea',
      apellido:'Colon',
      usuario:'andreacolon1',
      pass_field:'andrea1991',
      direccion:'concha y toro 1570',
      correo:'and.colon@duocuc.cl',
      telefono:937543621
    }
    this.APIP.grabar(pasajero).subscribe(()=>{
      console.log('grabo API')
    })
  }

}

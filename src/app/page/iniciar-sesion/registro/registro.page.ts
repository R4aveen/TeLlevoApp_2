import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre: string | undefined;
  correo: string | undefined;
  contrasena: string | undefined;
  confirmarContrasena: string | undefined;
  rol: string = 'custom'; // Valor predeterminado

  constructor(
    private registroService: RegistroService,
    private router: Router
  ) {}

  registrar() {

    const datosRegistro = {
      nombre: this.nombre,
      correo: this.correo,
      contrasena: this.contrasena,
      confirmarContrasena: this.confirmarContrasena,
    };

    
    this.registroService.guardarDatosRegistro(datosRegistro);

    // Redirige al usuario según la selección de rol
    if (this.rol === 'custom') {
      // Redirige a la página de inicio para "Pasajero"
      this.router.navigate(['/inicio']);
    } else if (this.rol === 'custom-checked') {
      // Redirige a la página de inicio-chofer para "Chofer"
      this.router.navigate(['/inicio-chofer']);
    }
  }

  verDatosRegistrados() {
    const datos = this.registroService.getDatosRegistro();
    console.log('Datos registrados:', datos);
  }

  ngOnInit() {
    // Código de inicialización si es necesario
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponenteModule } from './page/pasajero/componente/componente.module';

///// CHOFER COMPONENTES

import { ComponentecModule } from './page/chofer/componentec/componentec.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


//////////// FIREBASE //////////////
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';



/** Liberrias  */
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            IonicModule.forRoot(), 
            AppRoutingModule,
            ComponenteModule,
            ComponentecModule,
            AngularFireModule.initializeApp(environment.firebaseConfig), /// SE INICIALIZA DESDE LA CARPETA COMPACTA DE FIRE NO FIRESTORE
            AngularFireAuthModule,
            HttpClientModule
          ],
  providers: [Geolocation,
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

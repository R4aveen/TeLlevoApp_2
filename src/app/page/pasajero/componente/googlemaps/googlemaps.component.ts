import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GooglemapsService } from './googlemaps.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent  implements OnInit {

  @Input() position = {
    lat: -2.898116,
    lng: -78.99958149999999
  };

  label = {
    titulo: 'Ubucacion',
    subtitulo: 'Estas aqui'
  }

  map:any;
  marker:any;
  infowindow:any;
  positionSet:any;

  //@ViewChild('map') divMap: ElementRef;

  constructor(
    private renderer: Renderer2,
  //  @Inject(DOCUMENT) private document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController
  ) { }




  ngOnInit() {}

}

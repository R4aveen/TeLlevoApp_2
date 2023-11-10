// tablass.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tablass',
  templateUrl: './tablass.component.html',
  styleUrls: ['./tablass.component.scss'],
})
export class TablassComponent implements OnInit {
  constructor(private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  isTabActive(tabName: string): boolean {
    return this.router.url.includes(tabName);
  }

  navigateTo(tabName: string): void {
    this.router.navigate([tabName], { relativeTo: this.route });
  }

  inicio(){
    this.router.navigate(['inicio']);
  }
  actividad(){
    this.router.navigate(['actividad']);
  }
  configuracion(){
    this.router.navigate(['configuracion']);
  }

}

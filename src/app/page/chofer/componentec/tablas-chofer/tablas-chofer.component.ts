import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tablas-chofer',
  templateUrl: './tablas-chofer.component.html',
  styleUrls: ['./tablas-chofer.component.scss'],
})
export class TablasChoferComponent  implements OnInit {
  constructor(private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  isTabActive(tabName: string): boolean {
    return this.router.url.includes(tabName);
  }

  navigateTo(tabName: string): void {
    this.router.navigate([tabName], { relativeTo: this.route });
  }

  inicio(){
    this.router.navigate(['inicio-chofer']);
  }
  actividad(){
    this.router.navigate(['actividad-chofer']);
  }
  configuracion(){
    this.router.navigate(['configuracion-chofer']);
  }

}

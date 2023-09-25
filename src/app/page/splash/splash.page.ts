import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements AfterViewInit {
  @ViewChild('card2', { read: ElementRef, static: false }) card2ElementRef: ElementRef | undefined;

  private card2Image: any; 
  private card2Animation: any; 
  private navigateTimer: any; 

  constructor(
    private animationCtrl: AnimationController,
    private router: Router,
  ) {}

  ngAfterViewInit() {
    if (this.card2ElementRef) {
      this.card2Image = this.card2ElementRef.nativeElement;

      this.card2Animation = this.animationCtrl
        .create()
        .addElement(this.card2Image)
        .fill('none')
        .duration(3000) 
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);

      this.playCard2Animation();

      this.navigateTimer = setTimeout(() => {
        this.router.navigate(['iniciar']);
      }, 5000);
    }
  }

  async playCard2Animation() {
    if (this.card2Animation) {
      await this.card2Animation.play(); 
    }
  }

  ngOnDestroy() {

    clearTimeout(this.navigateTimer);
  }
}

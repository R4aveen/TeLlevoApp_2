import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebaAPIDjangoPage } from './prueba-apidjango.page';

describe('PruebaAPIDjangoPage', () => {
  let component: PruebaAPIDjangoPage;
  let fixture: ComponentFixture<PruebaAPIDjangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebaAPIDjangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarSesionPage } from './iniciar-sesion.page';

describe('IniciarSesionPage', () => {
  let component: IniciarSesionPage;
  let fixture: ComponentFixture<IniciarSesionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciarSesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

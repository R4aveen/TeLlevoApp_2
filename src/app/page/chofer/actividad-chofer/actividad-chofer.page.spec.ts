import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadChoferPage } from './actividad-chofer.page';

describe('ActividadChoferPage', () => {
  let component: ActividadChoferPage;
  let fixture: ComponentFixture<ActividadChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActividadChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

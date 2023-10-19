import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActividadPage } from './actividad.page';

describe('ActividadPage', () => {
  let component: ActividadPage;
  let fixture: ComponentFixture<ActividadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActividadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

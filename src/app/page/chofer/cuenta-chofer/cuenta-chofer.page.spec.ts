import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuentaChoferPage } from './cuenta-chofer.page';

describe('CuentaChoferPage', () => {
  let component: CuentaChoferPage;
  let fixture: ComponentFixture<CuentaChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CuentaChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

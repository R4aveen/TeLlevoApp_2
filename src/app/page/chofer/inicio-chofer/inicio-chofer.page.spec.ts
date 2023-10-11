import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioChoferPage } from './inicio-chofer.page';

describe('InicioChoferPage', () => {
  let component: InicioChoferPage;
  let fixture: ComponentFixture<InicioChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

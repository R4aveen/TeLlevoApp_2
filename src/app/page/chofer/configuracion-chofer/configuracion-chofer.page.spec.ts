import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionChoferPage } from './configuracion-chofer.page';

describe('ConfiguracionChoferPage', () => {
  let component: ConfiguracionChoferPage;
  let fixture: ComponentFixture<ConfiguracionChoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiguracionChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

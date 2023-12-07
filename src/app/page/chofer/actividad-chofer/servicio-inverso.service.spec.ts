import { TestBed } from '@angular/core/testing';

import { ServicioInversoService } from './servicio-inverso.service';

describe('ServicioInversoService', () => {
  let service: ServicioInversoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInversoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

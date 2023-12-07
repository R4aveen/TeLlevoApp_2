import { TestBed } from '@angular/core/testing';

import { ServicioChoferesService } from './servicio-choferes.service';

describe('ServicioChoferesService', () => {
  let service: ServicioChoferesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioChoferesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

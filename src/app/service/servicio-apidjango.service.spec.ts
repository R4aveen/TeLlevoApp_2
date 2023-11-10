import { TestBed } from '@angular/core/testing';

import { APIPasajeroDjangoService } from './servicio-apidjango.service';
import { APIChoferDjangoService } from './servicio-apidjango.service';

describe('ServicioAPIDjangoService', () => {
  let service: APIPasajeroDjangoService;
  let serviceC: APIChoferDjangoService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIPasajeroDjangoService);
    serviceC = TestBed.inject(APIChoferDjangoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(serviceC).toBeTruthy();
  });
});

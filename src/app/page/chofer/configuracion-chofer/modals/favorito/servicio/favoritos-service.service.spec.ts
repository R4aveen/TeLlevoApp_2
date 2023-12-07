import { TestBed } from '@angular/core/testing';

import { FavoritosService } from './favoritos-service.service';

describe('FavoritosServiceService', () => {
  let service: FavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

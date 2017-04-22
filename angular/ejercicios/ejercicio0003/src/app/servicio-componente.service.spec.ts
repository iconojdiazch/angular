import { TestBed, inject } from '@angular/core/testing';

import { ServicioComponenteService } from './servicio-componente.service';

describe('ServicioComponenteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioComponenteService]
    });
  });

  it('should ...', inject([ServicioComponenteService], (service: ServicioComponenteService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ServicioGlobalService } from './servicio-global.service';

describe('ServicioGlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioGlobalService]
    });
  });

  it('should ...', inject([ServicioGlobalService], (service: ServicioGlobalService) => {
    expect(service).toBeTruthy();
  }));
});

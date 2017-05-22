import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('debería devolver una lista de números', inject(
    [TestService],
    (service: TestService) => {
      expect(service.obtenerNumeros().length > 0).toBe(true);
    }
  )
  );
});

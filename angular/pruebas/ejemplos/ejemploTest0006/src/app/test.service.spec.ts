import { TestBed, inject, async } from '@angular/core/testing';

import { TestService } from './test.service';

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [TestService] });
});
it('debería esperar a obtener el valor del servicio',
  async(
    inject(
      [TestService],
      (testService: TestService) => {
        testService.obtenerValorTimeout().then(
          value => expect(value).toBe('valor con timeout simulado')
        );
      }
    )
  )
);
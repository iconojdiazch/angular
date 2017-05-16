import { TestBed, inject } from '@angular/core/testing';

import { SecundarioService } from './secundario.service';

describe('SecundarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecundarioService]
    });
  });

  it('debería devolver el valor correcto', inject([SecundarioService], (servicio: SecundarioService) => {
    expect(servicio.obtenerValor()).toBe('abc');
  }));
});

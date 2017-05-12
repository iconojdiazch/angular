import { TestBed, inject } from '@angular/core/testing';

import { PrincipalService } from './principal.service';
import { SecundarioService } from './secundario.service';

describe('PrincipalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrincipalService, SecundarioService]
    });
  });

  it('debería devolver el valor correcto',
    inject([PrincipalService, SecundarioService],
      (servicio: PrincipalService, servicio1: SecundarioService) => {
        expect(servicio.obtenerValor()).toBe(servicio1.obtenerValor());
      }
    )
  );
});

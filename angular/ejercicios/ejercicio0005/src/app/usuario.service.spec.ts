import { TestBed, inject } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';

import { HttpModule } from '@angular/http';
import { async } from "@angular/core/testing";

describe('UsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [UsuarioService]
    });
  });

  it('should ...', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));

  it('debería devolver algo', async(
    inject(
      [UsuarioService],
      (service: UsuarioService) => {
        service.getUsuario().subscribe(
          dato => expect(dato).toBeTruthy()
        );
      }
    )
  )
  )
});

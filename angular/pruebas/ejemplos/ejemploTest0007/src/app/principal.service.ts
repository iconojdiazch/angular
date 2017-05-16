import { Injectable } from '@angular/core';
import { SecundarioService } from './secundario.service';

@Injectable()
export class PrincipalService {

  constructor(private secundarioService: SecundarioService) { }
  obtenerValor(): string {
    return this.secundarioService.obtenerValor();
  }
}

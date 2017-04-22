import { Injectable } from '@angular/core';

@Injectable()
export class ServicioGlobalService {

  constructor() { }
  mayusculas(texto: string) {
    return `Desde un servicio global: ${texto.toUpperCase()}`;
  }
}

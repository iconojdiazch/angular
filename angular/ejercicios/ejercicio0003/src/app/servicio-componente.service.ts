import { Injectable } from '@angular/core';

@Injectable()
export class ServicioComponenteService {

  constructor() { }
  mayusculas(texto: string) {
    return `Desde un servicio asociado a un componente: ${texto.toUpperCase()}`;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() {
    console.log('TestService creado');
  }
  obtenerNumeros(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
}

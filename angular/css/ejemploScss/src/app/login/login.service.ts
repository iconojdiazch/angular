import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  mayusculas(texto: string) {
    return texto.toUpperCase();
  }
}

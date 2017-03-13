import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  login(usuario, clave) {
    if (usuario === "abc" && clave === "abc")
      return true;
    else
      return false;
  }
}

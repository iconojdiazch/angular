import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {

  constructor() { }
  isLoggedIn: boolean = true;
  user = {
    name: 'Un usuario cualquiera'
  };
}
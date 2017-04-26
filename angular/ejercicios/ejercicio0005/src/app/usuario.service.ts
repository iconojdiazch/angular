import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Usuario} from './usuario';

@Injectable()
export class UsuarioService {
  private usuarioUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: Http) { }
  getUsuario() {
    return this.http.get(this.usuarioUrl).map(response => response.json() as Usuario);
  }

}

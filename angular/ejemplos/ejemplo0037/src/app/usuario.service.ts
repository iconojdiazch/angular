import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Usuario } from './usuario';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {
  private url = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: Http) { }

  obtenerUsuario() {
    return this.http.get(this.url).map(r => r.json() as Usuario);
  }
}

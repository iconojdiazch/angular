import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
  private usuarioGetUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  private usuarioPostUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usuarioPutUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  private usuarioDeleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: Http) { }
  getUsuario() {
    return this.http.get(this.usuarioGetUrl).map(response => response.json() as Usuario);
  }
  postUsuario() {
    return this.http.post(this.usuarioPostUrl, {
      title: 'foo',
      body: 'bar',
      userId: 1
    }).map(response => response.json() as Usuario);
  }
  putUsuario() {
    return this.http.put(this.usuarioPutUrl, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }).map(response => response.json() as Usuario);
  }
  deleteUsuario() {
    return this.http.delete(this.usuarioDeleteUrl).map(response => response.json() as Usuario);
  }
}

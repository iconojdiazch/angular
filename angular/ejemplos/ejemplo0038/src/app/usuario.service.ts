import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// No es necesario con HttpClient
// import 'rxjs/add/operator/map';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {
  private usuarioGetUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  private usuarioPostUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usuarioPutUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  private usuarioDeleteUrl = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }
  getUsuario() {
    return this.http.get<Usuario>(this.usuarioGetUrl);
  }
  postUsuario() {
    return this.http.post<Usuario>(this.usuarioPostUrl, {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }
  putUsuario() {
    return this.http.put<Usuario>(this.usuarioPutUrl, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }
  deleteUsuario() {
    return this.http.delete<Usuario>(this.usuarioDeleteUrl);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http: Http) { }
  getReposUsuario(nombre: string) {
    return this.http.get(`https://api.github.com/users/${nombre}/repos`).map(response => response.json());
  }
}
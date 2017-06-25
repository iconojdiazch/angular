import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {
  private gitHubUrl = 'https://api.github.com/users/iconojdiazch/repos';
  constructor(private http: Http) { }
  getRepos() {
    return this.http.get(this.gitHubUrl).map(response => response.json());
  }
}
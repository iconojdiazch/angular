import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InitService {

  constructor(private http: Http) { 
    console.log("En el constructor de InitService");
  }

  getWikiUrl() {
    return this.http.get('src/app/wikipediaurl.json')
      .map(response => response.json());
  }
}

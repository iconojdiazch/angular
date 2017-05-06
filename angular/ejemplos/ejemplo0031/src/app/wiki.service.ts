import { Injectable } from '@angular/core';

import { InitService } from './init.service'
import { WikipediaDesc } from './wikipedia-desc';

import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {
  private wikipediaDesc: WikipediaDesc;
  constructor(private initService: InitService, private jsonp: Jsonp) {
    console.log("En el constructor de WikiService");
    this.initService.getWikiUrl().subscribe(
      data => {
        console.log("En WikiService. Datos recibidos del servidor");
        console.log(data);
        this.wikipediaDesc = data;
        console.log("En WikiService. Conversión a WikipediaDesc");
        console.log(this.wikipediaDesc);
      }
    );
  }
  buscar(palabra: string) {
    let parametrosBusqueda = new URLSearchParams();
    parametrosBusqueda.set('search', palabra);
    parametrosBusqueda.set('action', this.wikipediaDesc.action);
    parametrosBusqueda.set('format', this.wikipediaDesc.format);
    parametrosBusqueda.set('callback', this.wikipediaDesc.callback);

    return this.jsonp
      .get(this.wikipediaDesc.url, { search: parametrosBusqueda })
      .map(response => <string[]>response.json()[1]);
  }
}

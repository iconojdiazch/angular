import { Component, OnInit } from '@angular/core';

import { InitService } from './init.service';
import { WikiService } from './wiki.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'app works!';
  url: string;
  mostrar:boolean=true;
  cambiar(){
    this.mostrar = !this.mostrar;
  }
  constructor(private initService: InitService, private wikiService: WikiService) { }
  ngOnInit(): void {
    this.initService.getWikiUrl().subscribe(
      data => {
        console.log("En AppComponent");
        console.log(data);
        this.url = data.url;
      }
    );
  }
  private items: Observable<string[]>;
  buscar(termino:string):void{
    this.items = this.wikiService.buscar(termino);
  }

}

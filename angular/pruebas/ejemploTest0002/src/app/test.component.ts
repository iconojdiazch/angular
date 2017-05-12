import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1>{{titulo}}</h1>`
})
export class TestComponent implements OnInit {

  titulo: string = 'Componente para test'
  constructor() { 
    console.log("En el constructor de TestComponent");
  }

  ngOnInit() {
  }

}

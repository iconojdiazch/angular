import { Component, OnInit } from '@angular/core';

import { TestService } from './test.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  numeros: number[];
  constructor(private ts: TestService) {
    console.log('AppComponent creado');
  }
  ngOnInit() {
    this.numeros = this.ts.obtenerNumeros();
  }
}

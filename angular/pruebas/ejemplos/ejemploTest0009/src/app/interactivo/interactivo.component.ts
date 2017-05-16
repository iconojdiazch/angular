import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactivo',
  template: `
    <button (click)="clicked()">Pincha</button>
    <span>{{mensaje}}</span>
  `
})
export class InteractivoComponent implements OnInit {
  activado:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clicked() { this.activado = !this.activado; }
  get mensaje() { return `El botón está ${this.activado ? 'On' : 'Off'}`; }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-navegacion',
  templateUrl: './boton-navegacion.component.html',
  styleUrls: ['./boton-navegacion.component.css']
})
export class BotonNavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navegar() {
    window.location.href = 'https://google.es';
  }
}

import { Component, OnInit } from '@angular/core';

import { ServicioGlobalService } from './servicio-global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private servicio: ServicioGlobalService;

  title = 'app works!';

  mensaje = 'servcio global';

  constructor(s: ServicioGlobalService) {
    this.servicio = s;
  }
  
  ngOnInit() {
    this.mensaje = this.servicio.mayusculas(this.mensaje);
  }
}

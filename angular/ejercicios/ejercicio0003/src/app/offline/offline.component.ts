import { Component, OnInit } from '@angular/core';
import { ServicioComponenteService } from '../servicio-componente.service';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.css'],
  providers: [ServicioComponenteService]
})
export class OfflineComponent implements OnInit {

  private servicio: ServicioComponenteService;

  mensaje = 'servcio asociado a un componente';

  constructor(s: ServicioComponenteService) {
    this.servicio = s;
  }

  ngOnInit() {
    this.mensaje = this.servicio.mayusculas(this.mensaje);
  }

}

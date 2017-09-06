import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit {
  mensaje: string = "De momento nada";
  subscipcion: Subscription;

  constructor(private cs: ConexionService) {
    console.log("En el constructor de DestinoComponent");
  }

  ngOnInit() {
    console.log("En el método ngOnInit de DestinoComponent");
    this.subscipcion = this.cs.mensajeSourceObservable.subscribe(
      texto => this.mensaje = texto
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ConexionService } from "../conexion.service";

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css']
})
export class OrigenComponent implements OnInit {
  texto: string;
  constructor(private cs: ConexionService) { 
    console.log("En el constructor de OrigenComponent");
  }

  ngOnInit() {
  }

  enviarMensaje() {
    console.log(`Enviando '${this.texto}' desde el componente origen`);
    this.cs.propagarMensaje(this.texto);
  }
}

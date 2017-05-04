import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-form',
  templateUrl: './nombre-form.component.html',
  styleUrls: ['./nombre-form.component.css']
})
export class NombreFormComponent implements OnInit {
  private texto:string='';
  constructor() { }

  ngOnInit() {
  }
  enviar(): void {
    console.log(`Formulario enviado. Valor del campo de texto:${this.texto}`);
  }
}

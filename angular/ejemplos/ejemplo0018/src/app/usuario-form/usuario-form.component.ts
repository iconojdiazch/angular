import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario';

@Component({
  selector: 'usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  private paises: string[] = ['España', 'Alemania',
    'Francia', 'Austria'];
  private modelo: Usuario = new Usuario('', '', '');
  private enviado: boolean = false;
  onSubmit(): void {
    this.enviado = true;
  }
  constructor() { }

  ngOnInit() {
  }

}

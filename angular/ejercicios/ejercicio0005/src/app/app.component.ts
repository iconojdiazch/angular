import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      data => {
        this.usuario = data;
        console.log(this.usuario);
      }
    );
  }
}

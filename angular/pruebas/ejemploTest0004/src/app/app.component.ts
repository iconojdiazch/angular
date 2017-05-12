import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  template: '<h3 class="saludo" ><i>{{saludo}}</i></h3>'
})
export class AppComponent implements OnInit {
  saludo = 'sin inicializar';
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.saludo = this.usuarioService.isLoggedIn ?
      'Bienvenido, ' + this.usuarioService.user.name :
      'Por favor, realize un log in.';
  }
}

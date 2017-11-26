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
  usuarioGet: Usuario = new Usuario();
  usuarioPost: Usuario = new Usuario();
  usuarioPut: Usuario = new Usuario();
  usuarioDelete: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }
  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(
      data => {
        this.usuarioGet = data;
        console.log('GET:');
        console.log(this.usuarioGet);
      }
    );
    this.usuarioService.postUsuario().subscribe(
      data => {
        this.usuarioPost = data;
        console.log('POST:');
        console.log(this.usuarioPost);
      }
    );
    this.usuarioService.putUsuario().subscribe(
      data => {
        this.usuarioPut = data;
        console.log('PUT:');
        console.log(this.usuarioPut);
      }
    );
    this.usuarioService.deleteUsuario().subscribe(
      data => {
        this.usuarioDelete = data;
        console.log('DELETE:');
        console.log(this.usuarioDelete);
      }
    );
  }
}

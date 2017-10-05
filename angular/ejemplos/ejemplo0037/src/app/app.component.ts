import { Component, OnInit, OnDestroy } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { Subscription } from 'rxjs/Subscription';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

  subscipcionUsuario: Subscription;
  usuario: Usuario = new Usuario();
  usuarioObservable = Observable.of(new Usuario());

  private readonly lleganDatos: (Usuario) => void =
  u => {
    console.log('Datos recibidos. Título:' + JSON.stringify(u.title));
    this.usuario = u;
  }

  constructor(private us: UsuarioService) { }

  ngOnInit() {
    this.subscipcionUsuario = this.us.obtenerUsuario().subscribe(
      this.lleganDatos,
      error => console.log(error),
      () => console.log('Observable completado')
    );
    this.usuarioObservable = this.us.obtenerUsuario();
  }

  ngOnDestroy() {
    this.subscipcionUsuario.unsubscribe();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Componente principal';
  msg: string = 'Nada';
  principalMensaje = 'Mensaje enviado por el componente principal';
  mostrarMensaje(msg) {
    this.msg = msg;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  valores: string = '';
  imagenUrl: string = "http://lorempixel.com/400/200/animals";
  activo: boolean = true;
  esVisible: boolean = false;
  onClick(evento) {
    console.log("Pulsado", evento);
  }
  onKeyUp(valor: string) {
    this.valores += valor + ' | ';
  }
  cambiarFondo(): void {
    this.esVisible = !this.esVisible;
  }
}

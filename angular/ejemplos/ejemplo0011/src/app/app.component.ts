import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app works!';
  imagenUrl: string = "http://lorempixel.com/400/200/animals";
  activo: boolean = true;  
  onClick(evento){
    console.log("Pulsado",evento);
  }
}

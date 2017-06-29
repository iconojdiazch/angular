import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'app works!';
  private mensajes: string[] = [
    "Uso de fuentes alternativas (ver index.html)",
    "Empleo de estilos globales (ver styles.css)",
    "Almacenamiento de imágenes en el directorio 'assets'"
  ];
  private masInfo = false;
  saberMas(){
    this.masInfo = !this.masInfo;
  }
}

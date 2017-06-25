import { Component } from '@angular/core';
import { LoginService } from "app/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  texto: string = 'abc';
  constructor(s: LoginService) {
    this.texto = s.mayusculas(this.texto);
  }
}

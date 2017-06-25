import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/login/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  texto: string = 'xyz';
  constructor(private s: LoginService) { }

  ngOnInit() {
    this.texto = this.s.mayusculas(this.texto);
  }

}

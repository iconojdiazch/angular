import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      usuario: new FormControl("abc", Validators.required),
      clave: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
  login(): void {
    console.log(this.form.value);
  }
}

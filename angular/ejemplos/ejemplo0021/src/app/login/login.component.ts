import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClaveValidator } from './../clave-validator';

import { LoginService } from './../login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;
  constructor(private fb: FormBuilder, private ls: LoginService) {
    this.form = this.fb.group(
      {
        usuario: ['', Validators.required],
        clave: ['', Validators.compose(
          [Validators.required, ClaveValidator.sinEspacios]
        )]
      }
    );
  }

  ngOnInit() {
  }
  login(): void {
    console.log(this.form.value);
    const resultado = this.ls.login(this.form.controls['usuario'].value,
      this.form.controls['clave'].value);
    if (!resultado) {
      this.form.controls['clave'].setErrors({
        invalidLogin: true
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClaveValidator } from './../clave-validator';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private form: FormGroup;
  constructor(private fb: FormBuilder) {
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
  }
}

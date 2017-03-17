import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { UsuarioModel } from './../usuariomodel';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  private form: FormGroup;
  private titulo: string;
  private usuarioModel = new UsuarioModel();

  constructor(fb: FormBuilder, private rt: Router, private af: AngularFire) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.titulo = 'Nuevo Usuario';
  }
  
  enviar() {
    this.af.database.list('/').push({
      name: this.usuarioModel.username,
      email: this.usuarioModel.email
    });
    this.rt.navigate(['']);
  }
}

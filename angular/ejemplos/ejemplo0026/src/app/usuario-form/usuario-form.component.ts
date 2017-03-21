import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFire } from 'angularfire2';

import { UsuarioModel } from './../usuariomodel';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  private id;
  private form: FormGroup;
  private titulo: string;
  private usuarioModel = new UsuarioModel();
  private item;

  constructor(private fb: FormBuilder, private rt: Router, private art: ActivatedRoute, private af: AngularFire) {
    this.form = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.art.params.subscribe(params => {
      this.id = params["id"];
    });
    if (!this.id) {
      this.titulo = "Nuevo Usuario";
    }
    else {
      this.titulo = "Editar Usuario";
      this.item = this.af.database.object(this.id);
    }
  }

  enviar() {
    if (this.id) {
      this.af.database.object(this.id).update({
        name: this.usuarioModel.username,
        email: this.usuarioModel.email
      });
    }
    else {
      this.af.database.list('/').push({
        name: this.usuarioModel.username,
        email: this.usuarioModel.email
      });
    }
    this.rt.navigate(['']);
  }
}

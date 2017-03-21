import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';

import { Router } from '@angular/router';

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  private usuarios;
  constructor(private af: AngularFire, private rt: Router) { }

  ngOnInit() {
    this.usuarios = this.af.database.list('/');
  }

  nuevo() {
    this.rt.navigate(['nuevo']);
  }

  borrar(usuario) {
    if (confirm("¿Seguro que quieres borrar a " + usuario.name + "?")) {
      this.af.database.object(usuario.$key).remove()
        .then(x => console.log("Borrado"))
        .catch(error => {
          alert("No se ha podido borrar el usuario " + usuario.name);
          console.log("ERROR", error)
        });
    }
  }
}

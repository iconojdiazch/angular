import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  id;
  nombre;
  susbcripcion;
  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.susbcripcion = this._route.params.subscribe(params => {
      this.id = params["id"];
      this.nombre = params["name"];
    });
  }
  ngOnDestroy() {
    this.susbcripcion.unsubscribe();
  }
  volver(): void {
    this._router.navigate(['spotify']);
  }
}

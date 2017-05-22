import { Component, OnInit } from '@angular/core';

import { WikiService } from './../wiki.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-wiki-optimizado',
  templateUrl: './wiki-optimizado.component.html',
  styleUrls: ['./wiki-optimizado.component.css']
})
export class WikiOptimizadoComponent implements OnInit {
  constructor(private wikiService: WikiService) { }

  items: Observable<string[]>;
  canalTerminos = new Subject<string>();
  buscar(termino: string) { this.canalTerminos.next(termino); }

  mostrar: boolean = true;
  cambiar() {
    this.mostrar = !this.mostrar;
  }
  ngOnInit() {
    this.items = this.canalTerminos
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((termino: string) => this.wikiService.buscar(termino));
  }
}
/*
1.- debounceTime: espera a que el usuario para de teclear por al menos 300 milisegundos.

2.- distinctUntilChanged: asegura que el servicio sea invocado solo si el nuevo término de búsqueda es diferente del anterior.

3.- switchMap: llama al servicio con nuevo término de búsqueda y coordina el canal de respuestas.

4.- El papel de switchMap es particularmente importante. El servicio devuelve un nuevo Observable<string[]> para cada solicitud de búsqueda.
El usuario podría lanzar varias solicitudes antes de que el servidor haya tenido tiempo de responder,
lo que significa que podría llegar al cliente un cúmulo de respuestas en cualquier momento y en cualquier orden.

5.- SwitchMap devuelve su propio Observable que combina todas las respuestas del servicio,
las ordena según fuer hechas las peticiones y entrega a los suscriptores sólo los resultados de búsqueda más recientes.
*/
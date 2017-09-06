import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ConexionService {
  private mensajeSource: Subject<string> = new Subject<string>();
  mensajeSourceObservable: Observable<string> = this.mensajeSource.asObservable();

  constructor() {
    console.log("En el constructor de ConexionService");
  }
  propagarMensaje(texto) {
    this.mensajeSource.next(texto);
  }

}

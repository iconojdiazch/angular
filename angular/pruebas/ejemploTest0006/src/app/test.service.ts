import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class TestService {

  constructor() { }
  obtenerValor(): string {
    return 'valor real';
  }
  obtenerValorAsincrono(): Promise<string> {
    return Promise.resolve('valor asíncrono');
  }
  obtenerValorTimeout(): Promise<string> {
    return Promise.resolve('valor con timeout simulado');
  }
  obtenerValorObservable(): Observable<string> {
    return Observable.create(
      observer => {
        observer.next('valor usando un observable');
        observer.complete();
      }
    );
  }
}

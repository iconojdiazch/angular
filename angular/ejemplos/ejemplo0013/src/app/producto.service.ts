import { Injectable } from '@angular/core';
import { MOCK_DATOS, Data } from './datos';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/delay';

@Injectable()
export class ProductoService {
  // Este método es síncrono. Cuando lo invocamos, Angular se ve
  // Obligado a esperar a que termine, y eso afecta al tiempo  
  // de carga de la página.
  // En un caso más realista, se debería retornar una promesa u observable,  
  getProductos(): Data[] {
    return MOCK_DATOS;
  }

  getProductosAsync(): Promise<Data[]> {
    return Promise.resolve(MOCK_DATOS);
  }

  // El método delay permite simular un retardo
  getProductosObservable(): Observable<Data> {
    return Observable.create(
      observer => {
        MOCK_DATOS.map(elemento => observer.next(elemento))
        observer.complete();
      }
    ).delay(100);
  }
}

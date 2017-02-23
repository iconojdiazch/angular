import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

import { Producto } from './producto';

@Injectable()
export class ProductoObservableService {
    private productosUrl = 'api/productos';

    constructor(private http: Http) { }
    getProductosObservable(): Observable<Producto[]> {
        return this.http.get(this.productosUrl)
            .map(response => response.json().data as Producto[]);
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Producto } from './producto';

@Injectable()
export class ProductoService {
    private productosUrl = 'api/productos';

    constructor(private http: Http) { }

    getProductos(): Promise<Producto[]> {
        return this.http.get(this.productosUrl)
            .toPromise()
            .then(response => response.json().data as Producto[])
            .catch(this.procesarError);
    }

    private procesarError(error: any): Promise<any> {
        console.error('Ha ocurrido un error', error);
        return Promise.reject(error.message || error);
    }
}

/*
* Se considera una buena práctica emplear el 'decorator' Injectable. Si lo quitamos, el programa
* sigue funcionando, con la presente versión de Angular 2
*/
/*
* 'getProductos' devuelve ahora una promesa, la cual representa una computación asíncrona
*/
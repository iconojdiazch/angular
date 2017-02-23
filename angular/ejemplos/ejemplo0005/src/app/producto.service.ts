import {Injectable} from '@angular/core';

import {Producto} from './producto';
import {PRODUCTOS} from './mock-productos';

@Injectable()
export class ProductoService {
    getProductos(): Promise<Producto[]> {
        return Promise.resolve(PRODUCTOS);
    }
}

/*
* Se considera una buena práctica emplear el 'decorator' Injectable. Si lo quitamos, el programa
* sigue funcionando, con la presente versión de Angular 2
*/
/*
* 'getProductos' devuelve ahora una promesa, la cual representa una computación asíncrona
*/
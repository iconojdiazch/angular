import {Injectable} from '@angular/core';

import {Producto} from './producto';
import {PRODUCTOS} from './mock-productos';

@Injectable()
export class ProductoService {
    getProductos(): Producto[] {
        return PRODUCTOS;
    }
}

/*
* Se considera una buena práctica emplear el 'decorator' Injectable. Si lo quitamos, el programa
* sigue funcionando, con la presente versión de Angular 2
*/
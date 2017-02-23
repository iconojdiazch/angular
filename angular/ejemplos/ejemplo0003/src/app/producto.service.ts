import {Injectable} from '@angular/core';

@Injectable()
export class ProductoService {
    getProductos(): string[] {
        return ['Producto uno', 'Producto dos', 'Producto tres'];
    }
}

/*
* Se considera una buena práctica emplear el 'decorator' Injectable. Si lo quitamos, el programa
* sigue funcionando, con la presente versión de Angular 2
*/
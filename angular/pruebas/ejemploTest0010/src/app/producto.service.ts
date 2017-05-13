import { Injectable } from '@angular/core';

import { Producto } from './producto';
import { PRODUCTOS } from './mock-productos';

@Injectable()
export class ProductoService {
  constructor(){
    console.log('ProductoService instanciado');
  }
  getProductos(): Promise<Producto[]> {
    return Promise.resolve(PRODUCTOS);
  }
}

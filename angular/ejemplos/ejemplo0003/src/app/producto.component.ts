import { Component } from '@angular/core';

import { ProductoService } from './producto.service';

@Component({
    selector: 'productos',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css'],
    providers: [ProductoService]
})
export class ProductoComponent {
    titulo: string = 'Listado de productos';
    lista: string[];
    constructor(private ps: ProductoService) {
        this.lista = ps.getProductos();
    }
}
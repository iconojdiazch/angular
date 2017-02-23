import { Component, OnInit } from '@angular/core';

import { ProductoService } from './producto.service';

import { Producto } from './producto';

@Component({
    selector: 'productos',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css'],
    providers: [ProductoService]
})

export class ProductoComponent implements OnInit {
    titulo: string = 'Listado de productos';
    lista: Producto[];
    constructor(private productoService: ProductoService) { }
    todosLosProductos() {
        this.lista = this.productoService.getProductos();
    }
    ngOnInit(): void {
        this.todosLosProductos();
    }
}
/*
* La 'interface' OnInit forma parte de las retrollamadas (callbacks)
* de ciclo de vida. Angular llama a ngOnInit en el momento exacto.
* No se considera una buena práctica llamar a métodos de servicios
* que adquieren datos del lado servidor (en la vida real) dentro del constructor
*/
import { Component, OnInit } from '@angular/core';

import { ProductoService } from './producto.service';

import { Producto } from './producto';

import { ProductoObservableService } from './producto.observable.service';

import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'productos',
    templateUrl: './producto.component.html',
    styleUrls: ['./producto.component.css'],
    providers: [ProductoService, ProductoObservableService]
})

export class ProductoComponent implements OnInit {
    titulo: string = 'Listado de productos';
    lista: Producto[];
    listaObservable: Observable<Producto[]>;

    constructor(private productoService: ProductoService, private pos: ProductoObservableService) { }
    todosLosProductos() {
        this.productoService.getProductos().then(productos => this.lista = productos);
    }
    todosLosProductosObservable() {
        this.listaObservable = this.pos.getProductosObservable();
    }
    ngOnInit(): void {
        this.todosLosProductos();
        this.todosLosProductosObservable();
    }
}
/*
* La 'interface' OnInit forma parte de las retrollamadas (callbacks)
* de ciclo de vida. Angular llama a ngOnInit en el momento exacto.
* No se considera una buena práctica llamar a métodos de servicios
* que adquieren datos del lado servidor (en la vida real) dentro del constructor
*/
/*
* En el método 'todosLosProductos' obtenemos los datos cuando (then) la promesa
* que devuelve 'getProductos' se resuelva
*/
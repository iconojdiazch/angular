import { Component } from '@angular/core';

@Component({
    selector: 'productos1',
    templateUrl: './producto1.component.html',
    styleUrls: ['./producto1.component.css']
})

export class Producto1Component {
    titulo = 'Listado de productos1';
    lista = ['Producto uno1', 'Producto dos1', 'Producto tres1'];
}
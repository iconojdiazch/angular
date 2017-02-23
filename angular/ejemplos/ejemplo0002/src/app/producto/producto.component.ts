import { Component } from '@angular/core';

@Component({
    selector: 'productos',
    template: `
    <h1>Productos</h1>
    <h2>{{titulo}}</h2>
    <h3>{{lista}}</h3>
    `,
    styles:['h2 { color: crimson; }']
})
export class ProductoComponent {
    titulo = 'Listado de productos';
    lista = ['Producto uno','Producto dos','Producto tres'];
}
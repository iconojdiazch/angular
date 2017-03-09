import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.css']
})
export class RenderComponent implements OnInit {
  private productos: any[];
  constructor() { }

  ngOnInit() {
    this.llenar();
  }
  vaciar(): void {
    this.productos = [];
  }
  llenar(): void {
    this.productos = [
      { nombre: 'Producto 1' },
      { nombre: 'Producto 2' },
      { nombre: 'Producto 3' }
    ];
  }
}

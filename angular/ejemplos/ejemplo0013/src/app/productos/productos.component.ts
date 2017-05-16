import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private productos;

  constructor(private ps: ProductoService) { }

  ngOnInit() {
    this.productos = this.ps.getProductos();
  }

}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {Producto} from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() producto: Producto = new Producto(1,'abc');
  @Output() seleccionado = new EventEmitter<Producto>();
  click() { this.seleccionado.emit(this.producto); }
}

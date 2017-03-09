import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testpipe',
  templateUrl: './testpipe.component.html',
  styleUrls: ['./testpipe.component.css']
})
export class TestpipeComponent implements OnInit {
  private productos: any[];
  constructor() { }

  ngOnInit() {
    this.productos = [
      {
        foto: "http://loremflickr.com/150/150?random=1",
        nombre: "Producto 1",
        fecha: new Date(2017, 0, 30),
        descripcion: "Descripción del producto uno"
      }
    ];
  }

}

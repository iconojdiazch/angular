import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Data } from '../datos';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  private productos: Data[] = [];

  constructor(private ps: ProductoService) { }

  ngOnInit() {
    // Llamada a un método síncrono
    //this.productos = this.ps.getProductos();
    // Llamada a un método asíncrono que devuelve una promesa
    /*    this.ps.getProductosAsync().then(
          (valores) => {
            this.productos = valores;
          }
        );*/
    // Llamada a un método asíncrono que devuelve un Observable
    this.ps.getProductosObservable().subscribe(
      data => {
        console.log('Ha llegado un dato: ' + JSON.stringify(data));
        this.productos.push(data)
      },
      err => { console.log('Ha ocurrido un error: ' + err) },
      () => { console.log('Fin') }
    );    
  }

}

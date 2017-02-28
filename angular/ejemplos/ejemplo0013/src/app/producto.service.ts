import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {  
  getProductos() {
    return [
      {
        imagenUrl: "http://loremflickr.com/150/150?random=1",
        nombre: "Mascota 1",
        fecha: "Mayo 31, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 4,
        revisiones: 2
      },
      {
        imagenUrl: "http://loremflickr.com/150/150?random=2",
        nombre: "Mascota 2",
        fecha: "Octubre 31, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 2,
        revisiones: 12
      },
      {
        imagenUrl: "http://loremflickr.com/150/150?random=3",
        nombre: "Mascota 3",
        fecha: "Febrero 30, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 5,
        revisiones: 2
      }];
  }
}

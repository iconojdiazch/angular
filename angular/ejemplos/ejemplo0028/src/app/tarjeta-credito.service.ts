import { Injectable } from '@angular/core';

@Injectable()
export class TarjetaCreditoService {

  constructor() { }
  getTarjeta(): string {
    return '2131313133123174098';
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarjetaCredito'
})
export class TarjetaCreditoPipe implements PipeTransform {

transform(textoTarjeta: string): string {
    const digitosVisibles = 4;
    let seccionOculta = textoTarjeta.slice(0, -digitosVisibles);
    let seccionVisible = textoTarjeta.slice(-digitosVisibles);
    return seccionOculta.replace(/./g, '*') + seccionVisible;
  }

}

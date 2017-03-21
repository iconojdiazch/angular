import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarjetaCredito'
})
export class TarjetaCreditoPipe implements PipeTransform {

transform(textoTarjeta: string): string {
    const digitosVisibles = 4;
    const seccionOculta = textoTarjeta.slice(0, -digitosVisibles);
    const seccionVisible = textoTarjeta.slice(-digitosVisibles);
    return seccionOculta.replace(/./g, '*') + seccionVisible;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar'
})
export class CustompipePipe implements PipeTransform {

  transform(texto: string, limite: number): string {
    return texto.substring(0, limite) + "...";
  }
}

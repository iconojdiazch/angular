import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar'
})
export class ConcatenarPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (args)
      return value.toUpperCase() + args;
    else
      return value.toUpperCase();
  }

}

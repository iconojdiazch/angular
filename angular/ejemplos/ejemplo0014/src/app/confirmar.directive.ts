import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmar]'
})
export class ConfirmarDirective {

  @Input() appConfirmar = () => { };
  @Input() mensaje = '¿Estás seguro?';

  constructor() { }

  @HostListener('click', ['$event'])
  daIgual(event: Event) {
    const c = window.confirm(this.mensaje);
    if (c) {
      this.appConfirmar();
    }
  }
}

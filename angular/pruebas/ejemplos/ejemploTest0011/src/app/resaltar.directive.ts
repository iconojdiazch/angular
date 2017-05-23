import { Directive, OnChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnChanges {
  porDefecto = 'rgb(255, 0, 0)';
  @Input('appResaltar') colorFondo: string;

  constructor(private el: ElementRef) {
    // Es posible definir propiedades arbitrarias
    el.nativeElement.style.arbitraria = true;
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.colorFondo || this.porDefecto;
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { Producto } from '../producto';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ProductoComponent anidado', () => {
  let testHost: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;
  let productoEl: DebugElement;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComponent, PrincipalComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // En el proceso de creación de PrincipalComponent Angular instancia también
    // un ProductoComponent, debido a la etiqueta 'app-producto' de la plantilla Html
    fixture  = TestBed.createComponent(PrincipalComponent);
    testHost = fixture.componentInstance;
    productoEl   = fixture.debugElement.query(By.css('.producto'));
    fixture.detectChanges();
  });

  // Comprobar que en el template html el tubo (pipe) que hemos escrito funciona
  // en cuanto Angular ejecuta el enlace de datos
  it('debería mostrar el nombre del producto', () => {
    const nombreEsperado = testHost.producto.nombre.toUpperCase();
    expect(productoEl.nativeElement.textContent).toContain(nombreEsperado);
  });

  it('debería generarse un evento click', () => {    
    click(productoEl);
    // el producto seleccionado debería ser el mismo que el que Angular
    // proporciona al ejecutar el enlace de datos
    expect(testHost.seleccionado).toBe(testHost.producto);
  });
});

////// Componente principal //////
import { Component } from '@angular/core';

@Component({
  template: `<app-producto  [producto]="producto"  (seleccionado)="onSelected($event)"></app-producto>`
})
class PrincipalComponent {
  producto = new Producto(42, 'Nombre Test');
  seleccionado: Producto;
  onSelected(p: Producto) { this.seleccionado = p; }
}

const ButtonClickEvents = {
   left:  { button: 0 },
   right: { button: 2 }
};

function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
  if (el instanceof HTMLElement) {
    el.click();
  } else {
    el.triggerEventHandler('click', eventObj);
  }
}
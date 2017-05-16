import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoComponent } from './producto.component';
import { Producto } from '../producto';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('ProductoComponent', () => {
  let comp: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  let productoEsperado: Producto;
  let productoEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    comp = fixture.componentInstance;
    productoEl = fixture.debugElement.query(By.css('.producto'));

    // simular que otro componente nos ha suministrado un producto
    productoEsperado = new Producto(42, 'Nombre Test');
    comp.producto = productoEsperado;
    fixture.detectChanges(); // forzar el enlace de datos de la propiedad @Input
  });

  // Test original generado por "ng generate component Producto"
  it('Angular2 debería crear el componente', () => {
    expect(comp).toBeTruthy();
  });

  // Comprobar que en el template html el tubo (pipe) que hemos escrito funciona
  // en cuanto Angular ejecuta el enlace de datos
  it('debería mostrar el nombre del producto', () => {
    const nombreEsperado = productoEsperado.nombre.toUpperCase();
    expect(productoEl.nativeElement.textContent).toContain(nombreEsperado);
  });

  it('debería generarse un evento click', () => {
    let productoSeleccionado: Producto;
    comp.seleccionado.subscribe((producto: Producto) => productoSeleccionado = producto);

    productoEl.triggerEventHandler('click', null);
    expect(productoSeleccionado).toBe(productoEsperado);
  });
});

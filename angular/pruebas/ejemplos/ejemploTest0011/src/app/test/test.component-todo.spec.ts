import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement, Component } from "@angular/core";
import { ResaltarDirective } from '../resaltar.directive';
import { By } from "@angular/platform-browser";

// Probar un solo caso de uso es poco probable
// que explore la gama completa de lo que se puede hacer con una directiva.
// Encontrar y probar todos los componentes que usan la directiva
// es tedioso y dado a errores.
// Una solución es crear un componente de prueba artificial
// que demuestre todas las formas posibles de aplicar la directiva.

@Component({
  template: `
  <h2 appResaltar ="yellow">Color Amarillo</h2>
  <h2 appResaltar>Valor por defecto</h2>
  <h2>Sin resaltar</h2>
  <input #campoDeTexto [appResaltar]="campoDeTexto.value" value="cyan"/>`
})
class PruebaComponent { }

describe('PruebaComponent', () => {
  let component: PruebaComponent;
  let fixture: ComponentFixture<PruebaComponent>;
  let des: DebugElement[];
  let h2SinDirectiva: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ResaltarDirective, PruebaComponent]
    }).createComponent(PruebaComponent);
    fixture.detectChanges(); // Forzar el enlace de datos inicial
    // Todos los elementos relacionados con 'ResaltarDirective' (método queryAll)
    // queryAll devuelve un Array: DebugElement[]
    des = fixture.debugElement.queryAll(By.directive(ResaltarDirective));
    // El elemento h2 que no usa la directiva
    h2SinDirectiva = fixture.debugElement.query(By.css('h2:not([appResaltar])'));
  });

  it('La directiva debería emplearse en tres elementos de la plantilla html', () => {
    expect(des.length).toBe(3);
  });

  it('El color del primer h2 debería ser "yellow"', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  it('El color del segundo h2 debería ser el valor por defecto', () => {
    const dir = des[1].injector.get(ResaltarDirective);
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe(dir.porDefecto);
  });

  it('debería enlazar el valor del campo input con el color de fondo', () => {
    const input = des[2].nativeElement as HTMLInputElement;
    expect(input.style.backgroundColor).toBe('cyan', 'color de fondo inicial');
    // generar un evento DOM para que Angular responda al cambio en el valor del campo input
    input.value = 'green';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(input.style.backgroundColor).toBe('green', 'color de fondo cambiado');
  });
  
  it('el elemento h2 sin directiva no debería tener ninguna propiedad arbitraria', () => {
    expect(h2SinDirectiva.properties['arbitraria']).toBeUndefined();
  });

});

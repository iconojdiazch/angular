import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestComponent } from './test.component';
import { async } from '@angular/core/testing';

describe('TestComponent', () => {

  let componente: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let elementoHtml: HTMLElement;

  // Usamos un beforeEach asíncrono para dar tiempo a que Angular pueda leer el archivo html y css del componente
  // El problema es que 'TestBed.createComponent' es síncrono, mientras que la lectura del template html
  // y el archivo css es asíncrona. Podría ocurrir que cuando el entorno de testing intenta crear el componente
  // sus archivos constituyentes todavía se estén leyendo
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent], // el componente que queremos probar
    })
      .compileComponents();  // compilar el template y el css de forma asíncrona. Devuelve una promesa
  }));

  // Una vez creado el entorno de testing de Angular (TestBed) y todos los elementos del componente
  // compilados, podemos volver a los tests síncronos
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);

    componente = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h1'));
    elementoHtml = de.nativeElement;
  });

  it('debería mostrar el título original', () => {
    fixture.detectChanges();
    expect(elementoHtml.textContent).toContain(componente.titulo);
  });

  it('debería mostrar un título diferente y detectar el cambio', () => {
    componente.titulo = 'Nuevo título';
    fixture.detectChanges();
    expect(elementoHtml.textContent).toContain('Nuevo título');
  });

  it('la propiedad título no aparece en el dom hasta que invocamos "detectChanges" manualmente', () => {
    expect(elementoHtml.textContent).toEqual('');
  });
});
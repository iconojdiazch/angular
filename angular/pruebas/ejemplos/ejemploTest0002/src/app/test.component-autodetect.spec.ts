import { TestComponent } from './test.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('TestComponent Auto detect', () => {

  let componente: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let elementoHtml: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ // TestBed crea el módulo de testing de Angular2
      declarations: [TestComponent], // Componente que queremos probar
      providers: [ //Auto detección
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });

    fixture = TestBed.createComponent(TestComponent); // Crear el componente

    componente = fixture.componentInstance; // Acceder a una instancia del componente

    // Buscar el <h1> del template asociado al componente mediante un selector CSS
    de = fixture.debugElement.query(By.css('h1'));
    elementoHtml = de.nativeElement;
  });
  it('debería mostrar el título original', () => {
    //fixture.detectChanges();
    // Fuerza que Angular 'mire' si ha habido cambios en el entorno de test
    // Al incluir el módulo de autodetección, la llamada a 'detectChanges' ya no es necesaria
    expect(elementoHtml.textContent).toContain(componente.titulo);
  });
  it('debería mostrar el título original después de que cambie', () => {
    const tituloAnterior = componente.titulo;
    componente.titulo = 'Nuevo título';
    // El título es el antiguo porque Angular no 've' el cambio
    expect(elementoHtml.textContent).toContain(tituloAnterior);
  });

  it('debería mostrar el nuevo título al llamar directamente a detectChanges', () => {
    componente.titulo = 'Test Title';
    fixture.detectChanges(); // llamada explícita
    expect(elementoHtml.textContent).toContain(componente.titulo);
  });
});

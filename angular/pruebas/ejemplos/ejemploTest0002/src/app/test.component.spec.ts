import { TestComponent } from './test.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TestComponent', () => {

  let componente: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let de: DebugElement;
  let elementoHtml: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ // TestBed crea el módulo de testing de Angular2
      declarations: [TestComponent] // Componente que queremos probar
    });

    fixture = TestBed.createComponent(TestComponent); // Crear el componente

    componente = fixture.componentInstance; // Acceder a una instancia del componente

    // Buscar el <h1> del template asociado al componente mediante un selector CSS
    de = fixture.debugElement.query(By.css('h1'));
    elementoHtml = de.nativeElement;
  });
  it('debería mostrar el título original', () => {
    fixture.detectChanges();  // Fuerza que Angular 'mire' si ha habido cambios en el entorno de test
    expect(elementoHtml.textContent).toContain(componente.titulo);
  });

  it('debería poder mostrar un título diferente', () => {
    componente.titulo = 'Nuevo título';
    fixture.detectChanges(); // Angular detecta el cambio en la propiedad 'título'
    expect(elementoHtml.textContent).toContain('Nuevo título');
  });

  it('la propiedad título no aparece en el dom hasta que invocamos "detectChanges" manualmente', () => {
    expect(elementoHtml.textContent).toEqual('');
  });
});

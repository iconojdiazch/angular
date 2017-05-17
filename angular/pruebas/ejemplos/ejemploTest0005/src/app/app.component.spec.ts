import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { async, fakeAsync, tick } from '@angular/core/testing';

import { QuoteService } from './quote.service';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let quoteService: QuoteService;
  const testQuote = 'XYZ';
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [QuoteService],
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // Obtenido del injector asociado al componente
    quoteService = fixture.debugElement.injector.get(QuoteService);

    // Colocar un espía en el método 'getQuote' para simular mejor su ejecución
    // en nuestro entorno de pruebas
    // En lugar de inyectar un stub, como en ejemploTest0004, empleamos lo que
    // llamaríamos en general un mock. Es decir, cuando llamamos a 'getQuote' en
    // el test, no se ejecuta, sino que el espía intercepta la llamada y nos devuelve
    // 'Promise.resolve(testQuote)'
    // Seguimos cumpliendo las recomendaciones de Angular: no usar los servicios reales
    // en un entorno de test
    spy = spyOn(quoteService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));

    // Obtener de la plantilla HTML el valor que nos interesa
    de = fixture.debugElement.query(By.css('.quote'));
    el = de.nativeElement;
  });

  it('no debería mostrar nada en la página antes de la ejecución de "OnInit"', () => {
    expect(el.textContent).toBe('', 'no hay nada');
    expect(spy.calls.any()).toBe(false, 'getQuote aún no ha sido invocado');
  });
  it('después de que el componente se inicialize, no deberíamos var nada tampoco', () => {
    fixture.detectChanges();
    // getQuote es asíncrono: aún no ha devuelto nada
    expect(el.textContent).toBe('...', 'no hay nada');
    expect(spy.calls.any()).toBe(true, 'getQuote invocado');
  });
  it('debería mostrar el nuevo valor una vez que la promesa resuelva (usando async)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // esperar a que todas las operaciones asíncronas terminen
      fixture.detectChanges();        // actualizar la página HTML con el nuevo valor
      expect(el.textContent).toBe(testQuote);
    });
  }));
  it('debería mostrar el nuevo valor una vez que la promesa resuelva (usando fakeAsync)', fakeAsync(() => {
    // La función 'fakeAsync' es capaz de ejecutar las operaciones asíncronas de
    // tal manera que parezcan casi síncronas. Por eso en este código no tratamos
    // con promesas explícitamente, sino que forzamos que terminen llamando a la
    // función 'tick', la cual solo puede invocarse en el contexto de 'fakeAsync'.
    // La idea de Angular es que el flujo de código en los tests que debemos escribir sea,
    // o parezca ser, síncrono
    fixture.detectChanges();
    tick();                  // esperar a que el método asícrono 'getQuote' termine
    fixture.detectChanges(); // actualizar la página HTML con el nuevo valor
    expect(el.textContent).toBe(testQuote);
  }));

});

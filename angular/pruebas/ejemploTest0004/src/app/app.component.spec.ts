import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

import { UsuarioService } from './usuario.service';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let usuarioService: UsuarioService;

  beforeEach(() => {
    // Recomendado por Angular. Usar stubs, mocks, etc...
    const usuarioServiceStub: UsuarioService = {
      isLoggedIn: true,
      user: { name: 'Usuario Test' }
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      // providers:    [ UsuarioService ]  // Angular2 aconseja que NUNCA empleemos el servicio real         
      providers: [{ provide: UsuarioService, useValue: usuarioServiceStub }]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // UsuarioService obtenido desde el 'root injector'
    //UsuarioService = TestBed.get(UsuarioService);
    // Usuario service obtenido desde el injector que representa al componente
    // Esta forma de hacer las cosas debería funcionar SIEMPRE
    usuarioService = fixture.debugElement.injector.get(UsuarioService);

    //  buscar el elemento "saludo" usando un selector CSS, en este caso una clase
    de = fixture.debugElement.query(By.css('.saludo'));
    el = de.nativeElement;
  });

  it('debería dar la bienvenida al usuario', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Bienvenido', '"Bienvenido ..."');
    expect(content).toContain('Usuario Test', 'nombre esperado');
  });

  it('debería dar la bienvenida a "ABC"', () => {
    usuarioService.user.name = 'ABC'; // el mensaje de bienvenida aún no se ha mostrado
    fixture.detectChanges();
    expect(el.textContent).toContain('ABC');
  });

  it('debería solicitar un log in si es necesario', () => {
    usuarioService.isLoggedIn = false; // el mensaje de bienvenida aún no se ha mostrado
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Bienvenido', 'no bienvenido');
    expect(content).toMatch(/log in/i, '"log in"');
  });

});



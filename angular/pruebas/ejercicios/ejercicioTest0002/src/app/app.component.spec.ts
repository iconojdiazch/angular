import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';

import { TestService } from './test.service'

describe('AppComponent', () => {
  beforeEach(async(() => {
    const testServiceStub: TestService = {
      obtenerNumeros: () => { return [42] }
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TestComponent
      ],
      //providers: [TestService],
      providers: [{ provide: TestService, useValue: testServiceStub }]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('debería mostrar un número en el tag li', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('42');
  }));
});

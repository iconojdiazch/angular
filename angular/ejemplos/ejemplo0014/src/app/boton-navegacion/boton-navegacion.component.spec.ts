import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNavegacionComponent } from './boton-navegacion.component';

describe('BotonNavegacionComponent', () => {
  let component: BotonNavegacionComponent;
  let fixture: ComponentFixture<BotonNavegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonNavegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiOptimizadoComponent } from './wiki-optimizado.component';

describe('WikiOptimizadoComponent', () => {
  let component: WikiOptimizadoComponent;
  let fixture: ComponentFixture<WikiOptimizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiOptimizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiOptimizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

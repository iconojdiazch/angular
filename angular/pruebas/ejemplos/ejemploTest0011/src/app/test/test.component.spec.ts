import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { DebugElement, Component } from "@angular/core";
import { ResaltarDirective } from '../resaltar.directive';
import { By } from "@angular/platform-browser";

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ResaltarDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener el color rojo puro en un <p>', () => {
    const de = fixture.debugElement.query(By.css('p'));
    const bgColor = de.nativeElement.style.backgroundColor;
    expect(bgColor).toBe('red');
  });
});

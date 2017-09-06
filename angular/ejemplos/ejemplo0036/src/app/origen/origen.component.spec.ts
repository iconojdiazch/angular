import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigenComponent } from './origen.component';

describe('OrigenComponent', () => {
  let component: OrigenComponent;
  let fixture: ComponentFixture<OrigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

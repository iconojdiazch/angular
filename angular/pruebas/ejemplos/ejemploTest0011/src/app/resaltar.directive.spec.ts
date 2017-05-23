import { ResaltarDirective } from './resaltar.directive';
import { ElementRef } from "@angular/core";

describe('ResaltarDirective', () => {
  let elementRefStub;
  beforeEach(() => {
    elementRefStub = {
      nativeElement: {
        style: {
          backgroundColor: 0
        }
      }
    }
  });
  it('should create an instance', () => {
    const directiva = new ResaltarDirective(elementRefStub as ElementRef);
    expect(directiva).toBeTruthy();
  });
});

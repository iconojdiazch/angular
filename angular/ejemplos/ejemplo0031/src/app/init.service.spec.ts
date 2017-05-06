import { TestBed, inject } from '@angular/core/testing';

import { InitService } from './init.service';

describe('InitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitService]
    });
  });

  it('should ...', inject([InitService], (service: InitService) => {
    expect(service).toBeTruthy();
  }));
});

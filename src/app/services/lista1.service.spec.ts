import { TestBed } from '@angular/core/testing';

import { Lista1Service } from './lista1.service';

describe('Lista1Service', () => {
  let service: Lista1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lista1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

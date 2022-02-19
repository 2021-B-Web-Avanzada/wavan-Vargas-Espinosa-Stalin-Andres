import { TestBed } from '@angular/core/testing';

import { AlertasService } from './mensajes_Informativos.service';

describe('AlertasService', () => {
  let service: AlertasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

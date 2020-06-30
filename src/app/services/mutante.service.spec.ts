import { TestBed } from '@angular/core/testing';

import { MutanteService } from './mutante.service';

describe('MutanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MutanteService = TestBed.get(MutanteService);
    expect(service).toBeTruthy();
  });
});

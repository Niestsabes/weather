import { TestBed } from '@angular/core/testing';

import { CityUtilsService } from './city-utils.service';

describe('CityUtilsService', () => {
  let service: CityUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

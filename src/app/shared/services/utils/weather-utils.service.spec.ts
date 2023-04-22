import { TestBed } from '@angular/core/testing';

import { WeatherUtilsService } from './weather-utils.service';

describe('WeatherUtilsService', () => {
  let service: WeatherUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

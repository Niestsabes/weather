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

  it('should group weather by date', () => {
    const listWeather: any[] = [
      { dt: 1651190400, // 2022-05-28 00:00:00 UTC
        main: { temp_max: 25, temp_min: 15 } },
      { dt: 1651194000, // 2022-05-28 01:00:00 UTC
        main: { temp_max: 28, temp_min: 17 } },
      { dt: 1651276800, // 2022-05-29 00:00:00 UTC
        main: { temp_max: 29, temp_min: 18 } },
      { dt: 1651363800, // 2022-05-30 01:00:00 UTC
        main: { temp_max: 26, temp_min: 16 } },
    ];
    const result = service.groupWeatherByDate(listWeather);
    expect(result.length).toBe(2);
    expect(result).toEqual([
      { dt: 1651190400, // 2022-05-28 00:00:00 UTC
        main: { temp_max: 28, temp_min: 15 } },
      { dt: 1651276800, // 2022-05-29 00:00:00 UTC
        main: { temp_max: 29, temp_min: 16 } },
    ] as any[]);
  });
});

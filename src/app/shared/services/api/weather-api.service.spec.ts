import { TestBed } from '@angular/core/testing';

import { WeatherApiService } from './weather-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherUtilsService } from '../utils/weather-utils.service';
import { environment } from 'src/environments/environment';
import { Weather } from '../../models/weather.interface';
import { WEATHER_MOCK } from 'src/app/mock/weather.mock';
import { of, delay } from 'rxjs';
import { City } from '../../models/city.interface';

describe('WeatherApiService', () => {
  let service: WeatherApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherUtilsService]
    });
    service = TestBed.inject(WeatherApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the current weather by city name', () => {
    const cityName = 'Lyon';
    const expectedWeather: Weather = WEATHER_MOCK;
    const apiUrl = `${environment.weatherApiUrl}/weather`;
    const apiKey = environment.weatherApiKey;

    const req = httpMock.expectOne(`${apiUrl}?q=${cityName}&appid=${apiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(expectedWeather);
    
    service.getCurrentWeatherByCity(cityName).subscribe(weather => {
      expect(weather).toEqual(expectedWeather);
    });
  });

  it('should return the current weather for multiple cities', (done) => {
    const city1: City = { name: 'Paris', country: 'France' };
    const city2: City = { name: 'London', country: 'United Kingdom' };
    const city3: City = { name: 'Berlin', country: 'Germany' };
    const cities = [city1, city2, city3];
    const expectedWeather: { [name: string]: Weather } = { Paris: WEATHER_MOCK, London: WEATHER_MOCK, Berlin: WEATHER_MOCK };
    
    // Spy on the getCurrentWeatherByCity method
    spyOn(service, 'getCurrentWeatherByCity').and.callFake((cityName) => {
      const weather = expectedWeather[cityName];
      return of(weather).pipe(delay(500));
    });

    service.getCurrentWeatherByCities(cities).subscribe((recordCityWeather) => {
      expect(recordCityWeather).toEqual(expectedWeather);
      done();
    });
  });
})

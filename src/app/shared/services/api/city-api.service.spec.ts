import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CityApiService } from './city-api.service';
import { CityUtilsService } from '../utils/city-utils.service';
import { environment } from 'src/environments/environment';
import { OpenCageResponse } from '../../models/opencage-response.type';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('CityApiService', () => {
  let service: CityApiService;
  let httpMock: HttpTestingController;
  let cityUtilsService: CityUtilsService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule],
      providers: [CityUtilsService]
    });
    service = TestBed.inject(CityApiService);
    httpMock = TestBed.inject(HttpTestingController);
    cityUtilsService = TestBed.inject(CityUtilsService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of cities', () => {
    expect(service.searchCities('test')).toBeTruthy();
  });

  it('should return an empty array if the search string is too short', () => {
    const search = 'ab';
    const result = service.searchCities(search);

    result.subscribe((cities) => {
      expect(cities.length).toBe(0);
    });

    const req = httpMock.expectNone(environment.opencageApiUrl);
  });

  it('should return a list of cities if the search string is long enough', () => {
    const search = 'New York';
    const opencageResponse: OpenCageResponse = {
      results: [
        {
          formatted: 'New York, NY, USA',
          components: { city: 'New York', country: 'USA' },
          geometry: { lat: 40.7127281, lng: -74.0060152 }
        }
      ],
      status: {
        code: 200,
        message: 'OK'
      }
    };
    const expectedCities = cityUtilsService.convertOpenCageResponseToCity(opencageResponse);
    
    spyOn(cityUtilsService, 'convertOpenCageResponseToCity').and.returnValue(expectedCities);
    
    service.searchCities(search).subscribe((cities) => {
      expect(cities).toEqual(expectedCities);
    });

    const req = httpMock.expectOne(`${environment.opencageApiUrl}?q=${search}&key=${environment.opencageApiKey}`);
    expect(req.request.method).toBe('GET');
    req.flush(opencageResponse);
  });
});

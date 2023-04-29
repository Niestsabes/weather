import { TestBed } from '@angular/core/testing';

import { CityUtilsService } from './city-utils.service';
import { OpenCageResponse } from '../../models/opencage-response.type';

describe('CityUtilsService', () => {
  let service: CityUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert OpenCageResponse to City[]', () => {
    const response: OpenCageResponse = {
      results: [
        { 
          components: { _type: 'city', city: 'Lyon', country: 'France' },
          formatted: "Lyon County, Kentucky, États-Unis d'Amérique",
          geometry: { lat: 36.9981232, lng: -88.0658149 }
        },
        {
          components: { _type: 'town', town: 'Grasse', country: 'France' },
          formatted: "Grasse, France",
          geometry: { lat: 36.9981232, lng: -88.0658149 }
        },
        {
          components: { _type: 'county', county: 'Vallala', country: 'Somewhere' },
          formatted: "Vallala, Somewhere",
          geometry: { lat: 45.7578137, lng: 4.8320114 }
        },
      ],
      status: { code: 200, message: 'OK' }
    }
    
    const expected = [
      { name: 'Lyon', country: 'France' }, 
      { name: 'Grasse', country: 'France' }, 
      { name: 'Vallala', country: 'Somewhere' },
    ];

    const result = service.convertOpenCageResponseToCity(response);

    expect(result).toEqual(expected);
  });

  it('should convert OpenCageResponseResult to City', () => {
    const response = { 
      components: { _type: 'city', city: 'Paris', country: 'France' },
      formatted: "Paris, France",
      geometry: { lat: 36.9981232, lng: -88.0658149 }
    }
    
    const expected = { name: 'Paris', country: 'France' };

    const result = service.convertToCity(response);

    expect(result).toEqual(expected);
  });
});

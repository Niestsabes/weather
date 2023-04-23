import { Injectable } from '@angular/core';
import { City } from '../../models/city.interface';
import { OpenCageResponse, OpenCageResponseResult } from '../../models/opencage-response.type';

@Injectable({
  providedIn: 'root'
})
export class CityUtilsService {

  constructor() { }

  public convertOpenCageResponseToCity(response: OpenCageResponse): City[] {
    const listCity = response.results.map((result) => this.convertToCity(result));
    return listCity.filter((city, index) => 
      listCity.findIndex(c => c.name === city.name && c.country === city.country) === index
      && city.name !== undefined
      && city.country !== undefined
    );
  }

  public convertToCity(response: OpenCageResponseResult): City {
    return {
      name: response.components[response.components._type],
      country: response.components.country
    };
  }
}

import { Injectable } from '@angular/core';
import { City } from '../../models/city.interface';
import { OpenCageResponse, OpenCageResponseResult } from '../../models/opencage-response.type';

@Injectable({
  providedIn: 'root'
})
export class CityUtilsService {

  constructor() { }

  public convertOpenCageResponseToCity(response: OpenCageResponse): City[] {
    const listCity = response.results
      .filter(result => result.components._type === 'city' || result.components._type === 'town')
      .map((result) => this.convertToCity(result));
    return listCity.filter(
      (city, index) =>
        listCity.findIndex((c) => c.id === city.id) === index &&
        city.id !== undefined &&
        city.name !== undefined &&
        city.country !== undefined &&
        city.coord !== undefined
    );
  }

  public convertToCity(response: OpenCageResponseResult): City {
    return {
      id: response.geometry.lat.toString() + ',' + response.geometry.lng.toString(),
      name: response.components[response.components._type],
      country: response.components.country,
      coord: {
        lat: response.geometry.lat,
        lon: response.geometry.lng
      }
    };
  }
}

import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { appConfig } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

  constructor() { }

  public searchCities(search: string): Observable<any[]> {
    if (search.length < appConfig.searchKeywordMinLength)
      return of([]);
    return of([
      { name: 'London', country: 'UK' },
      { name: 'New York', country: 'USA' },
      { name: 'Paris', country: 'France' },
      { name: 'Madrid', country: 'Spain' },
      { name: 'Rome', country: 'Italy' },
      { name: 'Berlin', country: 'Germany' },
      { name: 'Tokyo', country: 'Japan' },
      { name: 'Beijing', country: 'China' },
    ]).pipe(
      map(list => list.filter(city => city.name.includes(search)))
    );
  }
}

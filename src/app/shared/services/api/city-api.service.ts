import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { appConfig } from 'src/config/config';
import { environment } from 'src/environments/environment';
import { OpenCageResponse, OpenCageResponseResult } from '../../models/opencage-response.type';
import { City } from '../../models/city.interface';
import { CityUtilsService } from '../utils/city-utils.service';

@Injectable({
  providedIn: 'root'
})
export class CityApiService {

  constructor(
    private _http: HttpClient,
    private _cityUtilsService: CityUtilsService
  ) { }

  public searchCities(search: string): Observable<City[]> {
    if (search.length < appConfig.searchKeywordMinLength) return of([]);
    return this._http.get<OpenCageResponse>(
      environment.opencageApiUrl,
      { params: { q: search, key: environment.opencageApiKey } }
    ).pipe(
      map(response => this._cityUtilsService.convertOpenCageResponseToCity(response))
    );
  }
}

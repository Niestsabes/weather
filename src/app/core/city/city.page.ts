import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CityApiService } from 'src/app/shared/services/api/city-api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { CityCardComponent } from './components/city-card/city-card.component';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { addCity, removeCity } from 'src/app/shared/states/user/user.action';
import { selectListCity } from 'src/app/shared/states/user/user.selector';
import { City } from 'src/app/shared/models/city.interface';
import { loadWeather } from 'src/app/shared/states/weather/weather.action';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, CityCardComponent]
})
export class CityPage implements OnInit {

  public readonly listCity$ = this._store.pipe(select(selectListCity));
  public searchFormGroup: FormGroup;
  public cities: City[] = [];
  public selectedCities: City[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _cityApiService: CityApiService,
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this._store.dispatch(loadWeather());
    this.searchFormGroup = this._formBuilder.group({
      search: ['', Validators.required]
    });

    this.searchFormGroup.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this._cityApiService.searchCities(value.search))
    ).subscribe((cities: City[]) => {
      this.cities = cities;
    });

    this.listCity$.subscribe((listCity: City[]) => {
      this.selectedCities = listCity;
    });
  }

  public selectCity(city: City): void {
    if (!this.selectedCities.includes(city)) {
      this._store.dispatch(addCity({ content: city }));
    }
  }

  public removeCity(city: City): void {
    const index = this.selectedCities.indexOf(city);
    if (index >= 0) {
      this._store.dispatch(removeCity({ content: city }));
    }
  }

  public clearSearch(): void {
    this.searchFormGroup.patchValue({
      search: ''
    });
    this.cities = [];
  }
}

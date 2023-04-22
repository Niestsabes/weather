import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/models/weather.interface';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ETemperatureUnit } from '../../shared/enums/temparature-unit.enum';
import { HomeForecastComponent } from "./components/home-forecast/home-forecast.component";
import { select, Store } from '@ngrx/store';
import { selectWeather, selectWeatherData } from 'src/app/shared/states/weather/weather.selector';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { loadWeather } from 'src/app/shared/states/weather/weather.action';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, SharedModule, HomeForecastComponent]
})
export class HomePage implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public currentCity!: string;
  public latestUpdateTimestamp!: number;

  public readonly currentWeather$ = this._store.pipe(select(selectWeather));

  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadWeather());
  }

}

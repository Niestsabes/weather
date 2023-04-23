import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { WeatherForecast } from 'src/app/shared/models/weather.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { loadWeatherForecast } from 'src/app/shared/states/weather/weather.action';
import { selectWeatherForecast } from 'src/app/shared/states/weather/weather.selector';

const modules = [IonicModule, SharedModule];

@Component({
  selector: 'app-home-forecast',
  templateUrl: './home-forecast.component.html',
  styleUrls: ['./home-forecast.component.scss'],
  standalone: true,
  imports: [...modules],
})
export class HomeForecastComponent implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly imageBaseUrl = 'http://openweathermap.org/img/wn/';
  public readonly imageExtension = '.png';
  public readonly imageSize = 32;
  public readonly NbDays = 3;
  public readonly currentForecast$ = this._store.pipe(select(selectWeatherForecast));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  @Input() focusedCityName!: string;

  constructor(
    private _store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadWeatherForecast());
  }
}

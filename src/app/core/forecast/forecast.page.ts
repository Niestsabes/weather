import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { EWindUnit } from 'src/app/shared/enums/wind-unit.enum';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { DateUtilsService } from 'src/app/shared/services/utils/date-utils.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { loadWeather, loadWeatherForecast } from 'src/app/shared/states/weather/weather.action';
import { selectWeather, selectWeatherForecast } from 'src/app/shared/states/weather/weather.selector';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class ForecastPage implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly EWindUnit = EWindUnit;
  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly currentForecast$ = this._store.pipe(select(selectWeatherForecast));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));

  constructor(
		private _store: Store<AppState>,
    private _dateUtilsService: DateUtilsService,
  ) { }

  ngOnInit() {
    this._store.dispatch(loadWeather());
    this._store.dispatch(loadWeatherForecast());
  }

  public isToday(timestamp: number): boolean {
    return this._dateUtilsService.isToday(timestamp);
  }

}

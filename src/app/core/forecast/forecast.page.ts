import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { loadWeatherForecast } from 'src/app/shared/states/weather/weather.action';
import { selectWeather, selectWeatherForecast } from 'src/app/shared/states/weather/weather.selector';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class ForecastPage implements OnInit {

  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly currentForecast$ = this._store.pipe(select(selectWeatherForecast));

  constructor(
		private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this._store.dispatch(loadWeatherForecast());
  }

}

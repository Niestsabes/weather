import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { selectWeatherForecast } from 'src/app/shared/states/weather/weather.selector';

@Component({
  selector: 'app-home-short-forecast',
  templateUrl: './home-short-forecast.component.html',
  styleUrls: ['./home-short-forecast.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class HomeShortForecastComponent {

  @Input() cityId!: string;

  public readonly NB_FORECAST_VALUES = 9;
  public readonly currentForecast$ = this._store.pipe(select(selectWeatherForecast));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));

  constructor(
    private _store: Store<AppState>
  ) {}

}

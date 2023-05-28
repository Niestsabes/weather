import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { Weather } from 'src/app/shared/models/weather.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';

@Component({
  selector: 'app-home-weather-detail',
  templateUrl: './home-weather-detail.component.html',
  styleUrls: ['./home-weather-detail.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class HomeWeatherDetailComponent {

  @Input() weather!: Weather;

  public readonly userSettings$ = this._store.pipe(select(selectUserParams));

  constructor(
    private _store: Store<AppState>
  ) { }

}

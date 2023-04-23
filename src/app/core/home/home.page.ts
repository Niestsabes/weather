import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ETemperatureUnit } from '../../shared/enums/temparature-unit.enum';
import { HomeForecastComponent } from "./components/home-forecast/home-forecast.component";
import { select, Store } from '@ngrx/store';
import { selectWeather } from 'src/app/shared/states/weather/weather.selector';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { loadWeather } from 'src/app/shared/states/weather/weather.action';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, SharedModule, HomeForecastComponent]
})
export class HomePage implements OnInit {

  @ViewChild('paragraph') p: ElementRef;

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  public latestUpdateTimestamp!: number;
  public focusedCityName: string = 'Paris';

  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadWeather());
  }

}

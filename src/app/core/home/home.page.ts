import { Component, ElementRef, OnDestroy, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { HomeForecastComponent } from "./components/home-forecast/home-forecast.component";
import { select, Store } from '@ngrx/store';
import { selectWeather } from 'src/app/shared/states/weather/weather.selector';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { loadWeather } from 'src/app/shared/states/weather/weather.action';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { SubscriptionLike } from 'rxjs';
import { register } from 'swiper/element/bundle';

register();

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [IonicModule, SharedModule, HomeForecastComponent]
})
export class HomePage implements OnInit, OnDestroy {

  @ViewChild('currentWeatherCard') currentWeatherCard: ElementRef;

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  public latestUpdateTimestamp!: number;
  public idFocusedCity: number = 0;
  public listCityLabel!: string[];
  private _weatherSubscription!: SubscriptionLike;

  constructor(
    private _store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this._store.dispatch(loadWeather());
    if (this._weatherSubscription === undefined) {
      this._weatherSubscription = this.currentWeather$.subscribe({
        next: (weather) => {
          this.listCityLabel = Object.keys(weather)
          this.idFocusedCity = 0;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this._weatherSubscription !== undefined) {
      this._weatherSubscription.unsubscribe();
      this._weatherSubscription = undefined;
    }
  }

  public handleSlideChange(ev: any): void {
    this.idFocusedCity = ev.detail[0].activeIndex;
  }
}

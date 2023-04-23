import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule, Gesture, GestureController, GestureDetail } from '@ionic/angular';
import { ETemperatureUnit } from '../../shared/enums/temparature-unit.enum';
import { HomeForecastComponent } from "./components/home-forecast/home-forecast.component";
import { select, Store } from '@ngrx/store';
import { selectWeather } from 'src/app/shared/states/weather/weather.selector';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { loadWeather } from 'src/app/shared/states/weather/weather.action';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { SubscriptionLike } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, SharedModule, HomeForecastComponent]
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('currentWeatherCard') currentWeatherCard: ElementRef;

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  public latestUpdateTimestamp!: number;
  public idFocusedCity: number = 0;
  public listCityLabel!: string[];
  private _weatherSubscription!: SubscriptionLike;
  private _swipeGesture!: Gesture;

  constructor(
    private _store: Store<AppState>,
    private _gestureCtrl: GestureController
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

  ngAfterViewInit(): void {
    this._swipeGesture = this._gestureCtrl.create({
      el: this.currentWeatherCard.nativeElement,
      threshold: 50,
      gestureName: 'swipe-gesture',
      onMove: ev => this.handleWeatherSwipe(ev)
    }, true);

    this._swipeGesture.enable(true);
  }

  ngOnDestroy(): void {
    if (this._weatherSubscription !== undefined) {
      this._weatherSubscription.unsubscribe();
      this._weatherSubscription = undefined;
    }
  }

  public handleWeatherSwipe(ev: GestureDetail): void {
    if (ev.deltaX === 0) return;
    if (ev.deltaX < 0) {
      if (this.idFocusedCity < this.listCityLabel.length - 1) this.idFocusedCity++;
    } else {
      if (this.idFocusedCity > 0) this.idFocusedCity--;
    }
  }
}

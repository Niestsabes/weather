import { Component, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { City } from 'src/app/shared/models/city.interface';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { selectWeather } from 'src/app/shared/states/weather/weather.selector';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class CityCardComponent implements OnInit {

  @Input() city: City;
  @Output() removeCity = new Subject<void>();
  
  public readonly currentWeather$ = this._store.pipe(select(selectWeather));
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));

  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.currentWeather$.subscribe((weather) => {
      console.log(weather);
    });
  }

  public remove(): void {
    this.removeCity.next();
  }

}

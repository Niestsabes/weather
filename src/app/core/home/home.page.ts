import { Component, OnInit } from '@angular/core';
import { Weather } from '../../shared/models/weather.interface';
import { WeatherApiService } from '../../shared/services/api/weather-api.service';
import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ETemperatureUnit } from '../../shared/enums/temparature-unit.enum';
import { HomeForecastComponent } from "./components/home-forecast/home-forecast.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, SharedModule, HomeForecastComponent]
})
export class HomePage implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public currentWeather!: Weather;
  public currentCity!: string;
  public latestUpdateTimestamp!: number;

  constructor(
    private _weatherApiService: WeatherApiService
  ) {}

  ngOnInit(): void {
    this.currentCity = 'Lyon';
    this._weatherApiService.getCurrentWeatherByCity(this.currentCity).subscribe({
      next: (weather) => {
        this.currentWeather = weather;
        this.latestUpdateTimestamp = Date.now();
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { Weather, WeatherForecast } from 'src/app/shared/models/weather.interface';
import { WeatherApiService } from 'src/app/shared/services/api/weather-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

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
  public readonly NbDays = 3;
  public readonly SecondToDay = 60 * 60 * 24;
  public currentForecast!: WeatherForecast;

  constructor(
    private _weatherApiService: WeatherApiService
  ) {}

  ngOnInit(): void {
    this._weatherApiService.getForecastByCity('Lyon')
      .pipe(map((forecast) => {
        forecast.list = this.groupWeatherByDate(forecast.list).slice(0, this.NbDays);
        return forecast;
      }))
      .subscribe({
        next: (forecast) => { this.currentForecast = forecast; }
      });
  }

  public groupWeatherByDate(listWeather: Weather[]): Weather[] {
    const recordWeather = listWeather.reduce<{ [date: string]: Weather }>((acc, item) => {
      const daystamp = Math.floor(item.dt / this.SecondToDay);
      if (!acc[daystamp]) {
        acc[daystamp] = item;
        return acc;
      }
      acc[daystamp].main.temp_max = Math.max(acc[daystamp].main.temp_max, item.main.temp_max);
      acc[daystamp].main.temp_min = Math.min(acc[daystamp].main.temp_min, item.main.temp_min);
      return acc;
    }, {});
    return Object.values(recordWeather);
  }
}

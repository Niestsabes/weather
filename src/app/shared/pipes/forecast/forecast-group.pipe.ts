import { Pipe, PipeTransform } from '@angular/core';
import { Weather, WeatherForecast } from '../../models/weather.interface';
import { WeatherUtilsService } from '../../services/utils/weather-utils.service';

@Pipe({
  name: 'forecastGroup'
})
export class ForecastGroupPipe implements PipeTransform {

  constructor(
    private _weatherUtilsService: WeatherUtilsService
  ) { }

  transform(recordForecast: Record<string, WeatherForecast>, cityName: string, length: number): Weather[] {
    if (!recordForecast[cityName] || length <= 0) return [];
    const clone: WeatherForecast = JSON.parse(JSON.stringify(recordForecast[cityName]));
    return this._weatherUtilsService.groupWeatherByDate(clone.list).slice(0, length);
  }
}

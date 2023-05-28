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

  transform(recordForecast: Record<string, WeatherForecast>, cityId: string, length: number): Weather[] {
    if (!recordForecast[cityId] || length <= 0) return [];
    const clone: WeatherForecast = JSON.parse(JSON.stringify(recordForecast[cityId]));
    return this._weatherUtilsService.groupWeatherByDate(clone.list).slice(0, length);
  }
}

import { Injectable } from '@angular/core';
import { Weather } from '../../models/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherUtilsService {

  public readonly SecondToDay = 60 * 60 * 24;

  constructor() { }
  
  /**
   * Groups a list of weather by date (one weather data per day)
   * Takes the min and max temperature of the day
   * @param listWeather 
   * @returns 
   */
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

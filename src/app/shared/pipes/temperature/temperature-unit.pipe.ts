import { Pipe, PipeTransform } from '@angular/core';
import { ETemperatureUnit } from '../../enums/temparature-unit.enum';

@Pipe({
  name: 'temperatureUnit'
})
export class TemperatureUnitPipe implements PipeTransform {

  transform(value?: number|string|null, unit?: ETemperatureUnit): string {
    if (value === null) {
      return '';
    }
    switch(unit) {
      case ETemperatureUnit.Celsius:
        return `${value}°C`;
      case ETemperatureUnit.Fahrenheit:
        return `${value}°F`;
      case ETemperatureUnit.Kelvin:
        return `${value}°K`;
      default:
        return `${value}°`;
    }
  }

}

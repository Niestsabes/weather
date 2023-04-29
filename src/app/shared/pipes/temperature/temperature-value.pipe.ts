import { Pipe, PipeTransform } from '@angular/core';
import { ETemperatureUnit } from '../../enums/temparature-unit.enum';

@Pipe({
  name: 'temperatureValue'
})
export class TemperatureValuePipe implements PipeTransform {

  transform(value: number|undefined, toUnit: ETemperatureUnit, fromUnit: ETemperatureUnit = ETemperatureUnit.Kelvin): number {
    if (value == undefined) {
      return 0;
    }
    
    if (fromUnit === toUnit) {
      return value;
    }

    switch (fromUnit) {
      case ETemperatureUnit.Celsius:
        return this.CelsiusTo(toUnit, value);
      case ETemperatureUnit.Fahrenheit:
        return this.FahrenheitTo(toUnit, value);
      case ETemperatureUnit.Kelvin:
        return this.KelvinTo(toUnit, value);
      default:
        return value;
    }
  } 

  public KelvinTo(toUnit: ETemperatureUnit, value: number): number {
    switch (toUnit) {
      case ETemperatureUnit.Celsius:
        return this.KelvinToCelsius(value);
      case ETemperatureUnit.Fahrenheit:
        return this.KelvinToFahrenheit(value);
      default:
        return value;
    }
  }

  public CelsiusTo(toUnit: ETemperatureUnit, value: number): number {
    switch (toUnit) {
      case ETemperatureUnit.Fahrenheit:
        return this.CelsiusToFahrenheit(value);
      case ETemperatureUnit.Kelvin:
        return this.CelsiusToKelvin(value);
      default:
        return value;
    }
  }

  public FahrenheitTo(toUnit: ETemperatureUnit, value: number): number {
    switch (toUnit) {
      case ETemperatureUnit.Celsius:
        return this.FahrenheitToCelsius(value);
      case ETemperatureUnit.Kelvin:
        return this.FahrenheitToKelvin(value);
      default:
        return value;
    }
  }
  
  public KelvinToCelsius(value: number): number {
    return value - 273.15;
  }

  public KelvinToFahrenheit(value: number): number {  
    return (value - 273.15) * 9/5 + 32;
  }

  public CelsiusToFahrenheit(value: number): number {
    return value * 9/5 + 32;
  }

  public CelsiusToKelvin(value: number): number {
    return value + 273.15;
  }

  public FahrenheitToCelsius(value: number): number {
    return (value - 32) * 5/9;
  }

  public FahrenheitToKelvin(value: number): number {  
    return (value - 32) * 5/9 + 273.15;
  }
}

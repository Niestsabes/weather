import { ETemperatureUnit } from '../../enums/temparature-unit.enum';
import { TemperatureUnitPipe } from './temperature-unit.pipe';

describe('TemperatureUnitPipe', () => {
  const pipe = new TemperatureUnitPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('should return value with Celsius unit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Celsius)).toEqual('1 °C');
  });

  it('should return value with Fahrenheit unit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Fahrenheit)).toEqual('1 °F');
  });

  it('should return value with Kelvin unit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Kelvin)).toEqual('1 K');
  });

  it('should return value with invalid unit', () => {
    expect(pipe.transform(1, 'test' as ETemperatureUnit)).toEqual('1');
  });
});

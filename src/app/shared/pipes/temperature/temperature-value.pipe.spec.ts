import { ETemperatureUnit } from '../../enums/temparature-unit.enum';
import { TemperatureValuePipe } from './temperature-value.pipe';

describe('TemperatureValuePipe', () => {
  const pipe = new TemperatureValuePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 if value is undefined', () => {
    expect(pipe.transform(undefined, ETemperatureUnit.Celsius)).toEqual(0);
  });
  
  it('should return 0 if value is null', () => {
    expect(pipe.transform(null, ETemperatureUnit.Celsius)).toEqual(0);
  });

  it('should return value if fromUnit is equal to toUnit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Celsius, ETemperatureUnit.Celsius)).toEqual(1);
  });

  it('should convert Celsius to Fahrenheit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Fahrenheit, ETemperatureUnit.Celsius)).toEqual(33.8);
  });

  it('should convert Celsius to Kelvin', () => {
    expect(pipe.transform(1, ETemperatureUnit.Kelvin, ETemperatureUnit.Celsius)).toEqual(274.15);
  });

  it('should convert Fahrenheit to Celsius', () => {
    expect(pipe.transform(1, ETemperatureUnit.Celsius, ETemperatureUnit.Fahrenheit)).toEqual(-17.22);
  });

  it('should convert Fahrenheit to Kelvin', () => {
    expect(pipe.transform(1, ETemperatureUnit.Kelvin, ETemperatureUnit.Fahrenheit)).toEqual(255.93);
  });

  it('should convert Kelvin to Celsius', () => {
    expect(pipe.transform(1, ETemperatureUnit.Celsius, ETemperatureUnit.Kelvin)).toEqual(-272.15);
  });

  it('should convert Kelvin to Fahrenheit', () => {
    expect(pipe.transform(1, ETemperatureUnit.Fahrenheit, ETemperatureUnit.Kelvin)).toEqual(-457.87);
  });

  it('should return value with invalid unit', () => {
    expect(pipe.transform(1, 'test' as ETemperatureUnit)).toEqual(1);
  });

  it('should return value if fromUnit is not supported', () => {
    expect(pipe.transform(1, ETemperatureUnit.Fahrenheit, null)).toEqual(1);
  });

  it('should return value if toUnit is not supported', () => {
    expect(pipe.transform(1, null, ETemperatureUnit.Fahrenheit)).toEqual(1);
  });

  it('should return value if fromUnit and toUnit are not supported', () => {
    expect(pipe.transform(1, null, null)).toEqual(1);
  });
});

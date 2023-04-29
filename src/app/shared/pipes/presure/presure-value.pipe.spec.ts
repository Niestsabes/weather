import { EPresureUnit } from '../../enums/presure-unit.enum';
import { PresureValuePipe } from './presure-value.pipe';

describe('PresureValuePipe', () => {
  const pipe = new PresureValuePipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 if value is undefined', () => {
    expect(pipe.transform(undefined, EPresureUnit.HPA)).toEqual(0);
  });

  it('should return value if toUnit is equal fromUnit', () => {
    expect(pipe.transform(1, EPresureUnit.HPA, EPresureUnit.HPA)).toEqual(1);
  });

  it('should convert hPa to mmHg', () => {
    expect(pipe.transform(1, EPresureUnit.MM_HG, EPresureUnit.HPA)).toEqual(0.75);
  });

  it('should convert hPa to atm', () => {
    expect(pipe.transform(1, EPresureUnit.ATM, EPresureUnit.HPA)).toEqual(0.001);
  });

  it('should convert hPa to inHg', () => {
    expect(pipe.transform(1, EPresureUnit.IN_HG, EPresureUnit.HPA)).toEqual(0.03);
  });

  it('should convert mmHg to hPa', () => {
    expect(pipe.transform(1, EPresureUnit.HPA, EPresureUnit.MM_HG)).toEqual(1.33);
  });

  it('should convert mmHg to atm', () => {
    expect(pipe.transform(1, EPresureUnit.ATM, EPresureUnit.MM_HG)).toEqual(0.001);
  });

  it('should convert mmHg to inHg', () => {
    expect(pipe.transform(1, EPresureUnit.IN_HG, EPresureUnit.MM_HG)).toEqual(0.03);
  });

  it('should convert atm to hPa', () => {
    expect(pipe.transform(1, EPresureUnit.HPA, EPresureUnit.ATM)).toEqual(1013.25);
  });

  it('should convert atm to mmHg', () => {
    expect(pipe.transform(1, EPresureUnit.MM_HG, EPresureUnit.ATM)).toEqual(760);
  });

  it('should convert atm to inHg', () => {
    expect(pipe.transform(1, EPresureUnit.IN_HG, EPresureUnit.ATM)).toEqual(29.92);
  });

  it('should convert inHg to hPa', () => {
    expect(pipe.transform(1, EPresureUnit.HPA, EPresureUnit.IN_HG)).toEqual(33.86);
  });

  it('should convert inHg to mmHg', () => {
    expect(pipe.transform(1, EPresureUnit.MM_HG, EPresureUnit.IN_HG)).toEqual(25.4);
  });

  it('should convert inHg to atm', () => {
    expect(pipe.transform(1, EPresureUnit.ATM, EPresureUnit.IN_HG)).toEqual(0.03);
  });

  it('should return value if fromUnit is not supported', () => {
    expect(pipe.transform(1, EPresureUnit.HPA, null)).toEqual(1);
  });

  it('should return value if toUnit is not supported', () => {
    expect(pipe.transform(1, null, EPresureUnit.HPA)).toEqual(1);
  });

  it('should return value if fromUnit and toUnit are not supported', () => {
    expect(pipe.transform(1, null, null)).toEqual(1);
  });
});

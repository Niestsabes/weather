import { EWindUnit } from '../../enums/wind-unit.enum';
import { WindValuePipe } from './wind-value.pipe';

describe('WindValuePipe', () => {
  const pipe = new WindValuePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 if value is undefined', () => {
    expect(pipe.transform(undefined, EWindUnit.M_S)).toEqual(0);
  });

  it('should return 0 if value is null', () => {
    expect(pipe.transform(null, EWindUnit.M_S)).toEqual(0);
  });

  it('should return value with m/s unit', () => {
    expect(pipe.transform(1, EWindUnit.M_S)).toEqual(1);
  });

  it('should return value with km/h unit', () => {
    expect(pipe.transform(1, EWindUnit.KM_H)).toEqual(3.6);
  });

  it('should return value with mph unit', () => {
    expect(pipe.transform(1, EWindUnit.MPH)).toEqual(2.2369362920544025);
  });

  it('should return value with knot unit', () => {
    expect(pipe.transform(1, EWindUnit.KNOTS)).toEqual(1.9438444924406046);
  });

  it('should return value with invalid unit', () => {
    expect(pipe.transform(1, 'test' as EWindUnit)).toEqual(1);
  });

  it('should convert value from m/s unit to km/h unit', () => {
    expect(pipe.transform(1, EWindUnit.KM_H, EWindUnit.M_S)).toEqual(0.2777777777777778);
  });

  it('should convert value from m/s unit to mph unit', () => {
    expect(pipe.transform(1, EWindUnit.MPH, EWindUnit.M_S)).toEqual(0.621371192237334);
  });

  it('should convert value from m/s unit to knot unit', () => {
    expect(pipe.transform(1, EWindUnit.KNOTS, EWindUnit.M_S)).toEqual(0.5399568034557235);
  });

  it('should convert value from km/h unit to m/s unit', () => {
    expect(pipe.transform(1, EWindUnit.M_S, EWindUnit.KM_H)).toEqual(3.6);
  });

  it('should convert value from km/h unit to mph unit', () => {
    expect(pipe.transform(1, EWindUnit.MPH, EWindUnit.KM_H)).toEqual(0.621371192237334);
  });

  it('should convert value from km/h unit to knot unit', () => {
    expect(pipe.transform(1, EWindUnit.KNOTS, EWindUnit.KM_H)).toEqual(0.5399568034557235);
  });

  it('should convert value from mph unit to m/s unit', () => {
    expect(pipe.transform(1, EWindUnit.M_S, EWindUnit.MPH)).toEqual(2.2369362920544025);
  });

  it('should convert value from mph unit to km/h unit', () => {
    expect(pipe.transform(1, EWindUnit.KM_H, EWindUnit.MPH)).toEqual(1.6093440000000001);
  });

  it('should convert value from mph unit to knot unit', () => {
    expect(pipe.transform(1, EWindUnit.KNOTS, EWindUnit.MPH)).toEqual(0.868976241900648);
  });

  it('should convert value from knot unit to m/s unit', () => {
    expect(pipe.transform(1, EWindUnit.M_S, EWindUnit.KNOTS)).toEqual(0.5144444444444445);
  });

  it('should convert value from knot unit to km/h unit', () => {
    expect(pipe.transform(1, EWindUnit.KM_H, EWindUnit.KNOTS)).toEqual(1.852);
  });

  it('should convert value from knot unit to mph unit', () => {
    expect(pipe.transform(1, EWindUnit.MPH, EWindUnit.KNOTS)).toEqual(1.1507794480235424);
  });
  
  it('should return value if fromUnit is not supported', () => {
    expect(pipe.transform(1, EWindUnit.KM_H, null)).toEqual(1);
  });

  it('should return value if toUnit is not supported', () => {
    expect(pipe.transform(1, null, EWindUnit.KM_H)).toEqual(1);
  });

  it('should return value if fromUnit and toUnit are not supported', () => {
    expect(pipe.transform(1, null, null)).toEqual(1);
  });
});

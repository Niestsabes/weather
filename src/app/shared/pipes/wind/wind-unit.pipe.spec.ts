import { EWindUnit } from '../../enums/wind-unit.enum';
import { WindUnitPipe } from './wind-unit.pipe';

describe('WindUnitPipe', () => {
  const pipe = new WindUnitPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('should return value with m/s unit', () => {
    expect(pipe.transform(1, EWindUnit.M_S)).toEqual('1 m/s');
  });

  it('should return value with km/h unit', () => {
    expect(pipe.transform(1, EWindUnit.KM_H)).toEqual('1 km/h');
  });

  it('should return value with mph unit', () => {
    expect(pipe.transform(1, EWindUnit.MPH)).toEqual('1 mph');
  });

  it('should return value with knot unit', () => {
    expect(pipe.transform(1, EWindUnit.KNOTS)).toEqual('1 knots');
  });

  it('should return value with invalid unit', () => {
    expect(pipe.transform(1, 'test' as EWindUnit)).toEqual('1');
  });
});

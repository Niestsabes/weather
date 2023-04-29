import { EPresureUnit } from '../../enums/presure-unit.enum';
import { PresureUnitPipe } from './presure-unit.pipe';

describe('PresureUnitPipe', () => {
  const pipe = new PresureUnitPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string if value is null', () => {
    expect(pipe.transform(null)).toEqual('');
  });

  it('should return value with hPa unit', () => {
    expect(pipe.transform(1)).toEqual('1 hPa');
  });

  it('should return value with mmHg unit', () => {
    expect(pipe.transform(1, EPresureUnit.MM_HG)).toEqual('1 mmHg');
  });

  it('should return value with bar unit', () => {
    expect(pipe.transform(1, EPresureUnit.ATM)).toEqual('1 bar');
  });

  it('should return value with psi unit', () => {
    expect(pipe.transform(1, EPresureUnit.IN_HG)).toEqual('1 psi');
  });

  it('should return value with invalid unit', () => {
    expect(pipe.transform(1, 'test' as EPresureUnit)).toEqual('1');
  });
});

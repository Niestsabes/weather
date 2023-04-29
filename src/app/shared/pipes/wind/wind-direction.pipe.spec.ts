import { WindDirectionPipe } from './wind-direction.pipe';

describe('WindDirectionPipe', () => {
  const pipe = new WindDirectionPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when angle is undefined', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });

  it('should return "Nord" when angle is 0', () => {
    expect(pipe.transform(0)).toEqual('Nord');
  });

  it('should return "Nord-Est" when angle is 45', () => {
    expect(pipe.transform(45)).toEqual('Nord-Est');
  });

  it('should return "Est" when angle is 90', () => {
    expect(pipe.transform(90)).toEqual('Est');
  });

  it('should return "Sud-Est" when angle is 135', () => {
    expect(pipe.transform(135)).toEqual('Sud-Est');
  });

  it('should return "Sud" when angle is 180', () => {
    expect(pipe.transform(180)).toEqual('Sud');
  });

  it('should return "Sud-Ouest" when angle is 225', () => {
    expect(pipe.transform(225)).toEqual('Sud-Ouest');
  });

  it('should return "Ouest" when angle is 270', () => {
    expect(pipe.transform(270)).toEqual('Ouest');
  });

  it('should return "Nord-Ouest" when angle is 315', () => {
    expect(pipe.transform(315)).toEqual('Nord-Ouest');
  });
});

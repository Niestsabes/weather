import { WindDirectionPipe } from './wind-direction.pipe';

describe('WindDirectionPipe', () => {
  const pipe = new WindDirectionPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when angle is undefined', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });

  it('should return "north" when angle is 0', () => {
    expect(pipe.transform(0)).toEqual('north');
  });

  it('should return "northEast" when angle is 45', () => {
    expect(pipe.transform(45)).toEqual('northEast');
  });

  it('should return "east" when angle is 90', () => {
    expect(pipe.transform(90)).toEqual('east');
  });

  it('should return "southEast" when angle is 135', () => {
    expect(pipe.transform(135)).toEqual('southEast');
  });

  it('should return "south" when angle is 180', () => {
    expect(pipe.transform(180)).toEqual('south');
  });

  it('should return "southWest" when angle is 225', () => {
    expect(pipe.transform(225)).toEqual('southWest');
  });

  it('should return "west" when angle is 270', () => {
    expect(pipe.transform(270)).toEqual('west');
  });

  it('should return "northWest" when angle is 315', () => {
    expect(pipe.transform(315)).toEqual('northWest');
  });
});

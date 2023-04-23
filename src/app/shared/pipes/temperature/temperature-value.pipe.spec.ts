import { TemperatureValuePipe } from './temperature-value.pipe';

describe('TemperatureValuePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureValuePipe();
    expect(pipe).toBeTruthy();
  });
});

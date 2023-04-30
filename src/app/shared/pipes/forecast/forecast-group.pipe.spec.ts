import { WeatherUtilsService } from '../../services/utils/weather-utils.service';
import { ForecastGroupPipe } from './forecast-group.pipe';

describe('ForecastGroupPipe', () => {
  
  const pipe = new ForecastGroupPipe(new WeatherUtilsService());
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});

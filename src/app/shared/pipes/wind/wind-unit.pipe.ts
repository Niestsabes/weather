import { Pipe, PipeTransform } from '@angular/core';
import { EWindUnit } from '../../enums/wind-unit.enum';

@Pipe({
  name: 'windUnit'
})
export class WindUnitPipe implements PipeTransform {

  transform(value: number|string, unit: EWindUnit = EWindUnit.M_S): string {
    if (value === null) {
      return '';
    }
    
    switch(unit) {
      case EWindUnit.KM_H:
        return `${value} km/h`;
      case EWindUnit.M_S:
        return `${value} m/s`;
      case EWindUnit.MPH:
        return `${value} mph`;
      case EWindUnit.KNOTS:
        return `${value} knots`;
      default:
        return `${value}`;
    }
  }

}

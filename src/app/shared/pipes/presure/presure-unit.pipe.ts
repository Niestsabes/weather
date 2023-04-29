import { Pipe, PipeTransform } from '@angular/core';
import { EPresureUnit } from '../../enums/presure-unit.enum';

@Pipe({
  name: 'presureUnit'
})
export class PresureUnitPipe implements PipeTransform {

  transform(value?: number|string|null, unit?: EPresureUnit): string {
    if (value === null) {
      return '';
    }
    switch(unit) {
      case EPresureUnit.HPA:
        return `${value} hPa`;
      case EPresureUnit.MM_HG:
        return `${value} mmHg`;
      case EPresureUnit.ATM:
        return `${value} bar`;
      case EPresureUnit.IN_HG:
        return `${value} psi`;
      default:
        return `${value}`;
    }
  }

}

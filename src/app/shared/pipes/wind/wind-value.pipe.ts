import { Pipe, PipeTransform } from '@angular/core';
import { EWindUnit } from '../../enums/wind-unit.enum';

@Pipe({
  name: 'windValue'
})
export class WindValuePipe implements PipeTransform {

  transform(value: number|undefined, toUnit: EWindUnit, fromUnit: EWindUnit = EWindUnit.M_S): number|undefined {
    if (value === undefined) {
      return 0;
    }

    if (fromUnit === toUnit) {
      return value;
    }

    switch (fromUnit) {
      case EWindUnit.M_S:
        return this.M_S_To(toUnit, value);
      case EWindUnit.KM_H:
        return this.KM_H_To(toUnit, value);
      case EWindUnit.MPH:
        return this.MPH_To(toUnit, value);
      case EWindUnit.KNOTS:
        return this.KNOTS_To(toUnit, value);
      default:
        return value;
    }
  }

  public M_S_To(toUnit: EWindUnit, value: number): number {
    switch (toUnit) {
      case EWindUnit.KM_H:
        return this.M_S_To_KM_H(value);
      case EWindUnit.MPH:
        return this.M_S_To_MPH(value);
      case EWindUnit.KNOTS:
        return this.M_S_To_KNOTS(value);
      default:
        return value;
    }
  }

  public KM_H_To(toUnit: EWindUnit, value: number): number {
    switch (toUnit) {
      case EWindUnit.M_S:
        return this.KM_H_To_M_S(value);
      case EWindUnit.MPH:
        return this.KM_H_To_MPH(value);
      case EWindUnit.KNOTS:
        return this.KM_H_To_KNOTS(value);
      default:
        return value;
    }
  }

  public MPH_To(toUnit: EWindUnit, value: number): number {
    switch (toUnit) {
      case EWindUnit.M_S:
        return this.MPH_To_M_S(value);
      case EWindUnit.KM_H:
        return this.MPH_To_KM_H(value);
      case EWindUnit.KNOTS:
        return this.MPH_To_KNOTS(value);
      default:
        return value;
    }
  }

  public KNOTS_To(toUnit: EWindUnit, value: number): number {
    switch (toUnit) {
      case EWindUnit.M_S:
        return this.KNOTS_To_M_S(value);
      case EWindUnit.KM_H:
        return this.KNOTS_To_KM_H(value);
      case EWindUnit.MPH:
        return this.KNOTS_To_MPH(value);
      default:
        return value;
    }
  }

  public M_S_To_KM_H(value: number): number {
    return value * 3.6;
  }

  public M_S_To_MPH(value: number): number {
    return value * 2.237;
  }

  public M_S_To_KNOTS(value: number): number {
    return value * 1.944;
  }

  public KM_H_To_M_S(value: number): number {
    return value / 3.6;
  }

  public KM_H_To_MPH(value: number): number {
    return value / 1.609;
  }
  
  public KM_H_To_KNOTS(value: number): number {
    return value / 1.852;
  }

  public MPH_To_M_S(value: number): number {
    return value / 2.237;
  }

  public MPH_To_KM_H(value: number): number {
    return value * 1.609;
  }

  public MPH_To_KNOTS(value: number): number {
    return value / 1.151;
  }

  public KNOTS_To_M_S(value: number): number {
    return value / 1.944;
  }

  public KNOTS_To_KM_H(value: number): number {
    return value * 1.852;
  }

  public KNOTS_To_MPH(value: number): number {
    return value * 1.151;
  }

}

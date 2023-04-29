import { Pipe, PipeTransform } from '@angular/core';
import { EPresureUnit } from '../../enums/presure-unit.enum';

@Pipe({
  name: 'presureValue'
})
export class PresureValuePipe implements PipeTransform {

  transform(value: number|undefined, toUnit: EPresureUnit, fromUnit: EPresureUnit = EPresureUnit.HPA): number {
    if (value === undefined) {
      return 0;
    }

    if (toUnit === fromUnit) {
      return value;
    }

    switch (fromUnit) {
      case EPresureUnit.HPA:
        return this.HpaTo(toUnit, value);
      case EPresureUnit.MM_HG:
        return this.MmHgTo(toUnit, value);
      case EPresureUnit.ATM:
        return this.AtmTo(toUnit, value);
      case EPresureUnit.IN_HG:
        return this.InHgTo(toUnit, value);
      default:
        return value;
    }
  }

  public HpaTo(toUnit: EPresureUnit, value: number): number {
    switch (toUnit) {
      case EPresureUnit.MM_HG:
        return this.HpaToMmHg(value);
      case EPresureUnit.ATM:
        return this.HpaToAtm(value);
      case EPresureUnit.IN_HG:
        return this.HpaToInHg(value);
      default:
        return value;
    }
  }

  public MmHgTo(toUnit: EPresureUnit, value: number): number {
    switch (toUnit) {
      case EPresureUnit.HPA:
        return this.MmHgToHpa(value);
      case EPresureUnit.ATM:
        return this.MmHgToAtm(value);
      case EPresureUnit.IN_HG:
        return this.MmHgToInHg(value);
      default:
        return value;
    }
  }

  public AtmTo(toUnit: EPresureUnit, value: number): number {
    switch (toUnit) {
      case EPresureUnit.HPA:
        return this.AtmToHpa(value);
      case EPresureUnit.MM_HG:
        return this.AtmToMmHg(value);
      case EPresureUnit.IN_HG:
        return this.AtmToInHg(value);
      default:
        return value;
    }
  }

  public InHgTo(toUnit: EPresureUnit, value: number): number {
    switch (toUnit) {
      case EPresureUnit.HPA:
        return this.InHgToHpa(value);
      case EPresureUnit.MM_HG:
        return this.InHgToMmHg(value);
      case EPresureUnit.ATM:
        return this.InHgToAtm(value);
      default:
        return value;
    }
  }

  public HpaToMmHg(value: number): number {
    return value * 0.75006375541921;
  }

  public HpaToAtm(value: number): number {
    return value * 0.00098692326671601;
  }

  public HpaToInHg(value: number): number {
    return value * 0.029529983071445;
  }

  public MmHgToHpa(value: number): number {
    return value * 1.3332236842105;
  }

  public MmHgToAtm(value: number): number {
    return value * 0.0013157894736842;
  }

  public MmHgToInHg(value: number): number {
    return value * 0.029529983071445;
  }

  public AtmToHpa(value: number): number {
    return value * 1013.25;
  }

  public AtmToMmHg(value: number): number {
    return value * 760;
  }

  public AtmToInHg(value: number): number {
    return value * 29.9213;
  }

  public InHgToHpa(value: number): number {
    return value * 33.8639;
  }

  public InHgToMmHg(value: number): number {
    return value * 25.4;
  }

  public InHgToAtm(value: number): number {
    return value * 0.0334211;
  }

}

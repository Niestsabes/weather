import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EPresureUnit } from 'src/app/shared/enums/presure-unit.enum';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { EWindUnit } from 'src/app/shared/enums/wind-unit.enum';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.page.html',
  styleUrls: ['./parameter.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, FormsModule]
})
export class ParameterPage implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly EWindUnit = EWindUnit;
  public readonly EPresureUnit = EPresureUnit;
  public paramformGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.paramformGroup = this._formBuilder.group({
      temperatureUnit: [ETemperatureUnit.Celsius],
      windUnit: [EWindUnit.KM_H],
      presureUnit: [EPresureUnit.HPA],
    });
  }

}

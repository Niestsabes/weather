import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { EPresureUnit } from 'src/app/shared/enums/presure-unit.enum';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { EWindUnit } from 'src/app/shared/enums/wind-unit.enum';
import { AppState } from 'src/app/shared/models/state/app-state.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { editUserParams } from 'src/app/shared/states/user/user.action';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.page.html',
  styleUrls: ['./parameter.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, FormsModule]
})
export class ParameterPage implements OnInit, OnDestroy {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly EWindUnit = EWindUnit;
  public readonly EPresureUnit = EPresureUnit;
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  public paramFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userSettings$.subscribe((userSettings) => {
      this.paramFormGroup = this._formBuilder.group({
        temperatureUnit: [userSettings.temperatureUnit],
        windUnit: [userSettings.windUnit],
        presureUnit: [userSettings.presureUnit],
      });
    });
  }

  ngOnDestroy(): void {
    this._store.dispatch(editUserParams({ content: this.paramFormGroup.value }));
  }
}

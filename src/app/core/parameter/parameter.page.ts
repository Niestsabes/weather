import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { EPresureUnit } from 'src/app/shared/enums/presure-unit.enum';
import { ETemperatureUnit } from 'src/app/shared/enums/temparature-unit.enum';
import { EWindUnit } from 'src/app/shared/enums/wind-unit.enum';
import { AppState, AppUserParams } from 'src/app/shared/models/state/app-state.interface';
import { SharedModule } from 'src/app/shared/shared.module';
import { changeUserLanguage, editUserParams } from 'src/app/shared/states/user/user.action';
import { selectUserParams } from 'src/app/shared/states/user/user.selector';
import { ParameterRatingComponent } from './components/parameter-rating/parameter-rating.component';
import { appConfig } from 'src/config/config';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.page.html',
  styleUrls: ['./parameter.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, FormsModule, ParameterRatingComponent]
})
export class ParameterPage implements OnInit {

  public readonly ETemperatureUnit = ETemperatureUnit;
  public readonly EWindUnit = EWindUnit;
  public readonly EPresureUnit = EPresureUnit;
  public readonly listLanguage = appConfig.lang.available;
  public readonly userSettings$ = this._store.pipe(select(selectUserParams));
  public paramFormGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.userSettings$.subscribe((userSettings: AppUserParams) => {
      this.paramFormGroup = this._formBuilder.group({
        temperatureUnit: [userSettings.temperatureUnit],
        windUnit: [userSettings.windUnit],
        presureUnit: [userSettings.presureUnit],
        language: [userSettings.language],
      });
      this.paramFormGroup.get('language').valueChanges.subscribe((language: string) => {
        this._store.dispatch(changeUserLanguage({ content: language }));
      });
      this.paramFormGroup.valueChanges.subscribe((value: AppUserParams) => {
        this._store.dispatch(editUserParams({ content: value }));
      });
    });
  }
}

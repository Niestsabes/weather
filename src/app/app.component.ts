import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { HomeForecastComponent } from './core/home/components/home-forecast/home-forecast.component';
import { appConfig } from 'src/config/config';
import { AppState } from './shared/models/state/app-state.interface';
import { addCity, changeUserLanguage } from './shared/states/user/user.action';
import { StorageService } from './shared/services/storage/storage.service';
import { EStorageKey } from './shared/enums/storage-key.enum';
import { map } from 'rxjs';
import { City } from './shared/models/city.interface';

const components = [HomeForecastComponent];
const modules = [IonicModule, SharedModule];

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [...components, ...modules],
})
export class AppComponent {

  constructor(
    private _storage: StorageService,
    private _store: Store<AppState>,
    private _translate: TranslateService
  ) {
    this.initLanguage();
    this.initCities();
  }

  /**
   * Init language
   */
  public initLanguage(): void {
    const langKey = Object.keys(appConfig.lang.available);

    this._translate.addLangs(langKey);
    this._translate.setDefaultLang(appConfig.lang.default);

    let userLanguage = window.navigator.language.split('-')[0];
    if (!langKey.includes(userLanguage)) userLanguage = appConfig.lang.default;
    
    this._translate.use(userLanguage);
    this._store.dispatch(changeUserLanguage({ content: userLanguage }));
  }

  /**
   * Init cities
   */
  public initCities(): void {
    this._storage.get<City[]>(EStorageKey.LIST_CITY).pipe(
      map((listCity) => listCity || [])
    ).subscribe({
      next: listCity => {
        listCity.forEach((city) => {
          this._store.dispatch(addCity({ content: city }));
        })
      }
    })
  }
}
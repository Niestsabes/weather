import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { HomeForecastComponent } from './core/home/components/home-forecast/home-forecast.component';
import { appConfig } from 'src/config/config';
import { AppState, AppUserParams } from './shared/models/state/app-state.interface';
import { changeUserLanguage, editUserParams } from './shared/states/user/user.action';
import { DataService } from './shared/services/database/data.service';
import { selectUserParams } from './shared/states/user/user.selector';
import { Observable, switchMap, tap } from 'rxjs';

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
    private _store: Store<AppState>,
    private _cacheDb: DataService,
    private _translate: TranslateService
  ) {
    this.initUserStore()
      .subscribe((userParams) => {
        const language = this.initLanguage(userParams?.language);
        this._store.dispatch(changeUserLanguage({ content: language }));
      });
  }

  /**
   * Init language
   */
  public initLanguage(initLang: string = null): string {
    const listAvailableLangCode = appConfig.lang.available.map(lang => lang.code);
    this._translate.addLangs(listAvailableLangCode);
    this._translate.setDefaultLang(appConfig.lang.default);

    let userLanguage = initLang ? initLang : window.navigator.language.split('-')[0];
    if (!listAvailableLangCode.includes(userLanguage)) userLanguage = appConfig.lang.default;

    this._translate.use(userLanguage);
    return userLanguage;
  }

  /**
   * Init store
   */
  public initUserStore(): Observable<AppUserParams> {
    return this._cacheDb
      .initialize()
      .pipe(
        switchMap(() => this._cacheDb.get('userParams')),
        tap((userParams) => {
          if (userParams) {
            this._store.dispatch(editUserParams({ content: userParams }));
          }
        })
      );
  }
}

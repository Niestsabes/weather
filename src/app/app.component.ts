import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { SharedModule } from './shared/shared.module';
import { HomeForecastComponent } from './core/home/components/home-forecast/home-forecast.component';
import { appConfig } from 'src/config/config';
import { AppState } from './shared/models/state/app-state.interface';
import { changeUserLanguage } from './shared/states/user/user.action';

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
    private _translate: TranslateService
  ) {
    const language = this.initLanguage();
    this._store.dispatch(changeUserLanguage({ content: language }));
  }

  /**
   * Init language
   */
  public initLanguage(): string {
    const langKey = Object.keys(appConfig.lang.available);

    this._translate.addLangs(langKey);
    this._translate.setDefaultLang(appConfig.lang.default);

    const userLanguage = window.navigator.language.split('-')[0];
    if (!langKey.includes(userLanguage)) return appConfig.lang.default;
    
    this._translate.use(userLanguage);
    return userLanguage;
  }
}
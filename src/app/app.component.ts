import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';
import { HomeForecastComponent } from './core/home/components/home-forecast/home-forecast.component';
import { TranslateService } from '@ngx-translate/core';
import { appConfig } from 'src/config/config';

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
  constructor(translate: TranslateService) {
    translate.addLangs(appConfig.lang.available);
    translate.setDefaultLang(appConfig.lang.default);

    const userLanguage = window.navigator.language.split('-')[0];
    if (appConfig.lang.available.includes(userLanguage)) translate.use(userLanguage);
  }
}

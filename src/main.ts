import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { SharedModule } from './app/shared/shared.module';
import { weatherForecastReducer, weatherReducer } from './app/shared/states/weather/weather.reducer';
import { userReducer } from './app/shared/states/user/user.reducer';
import { UserEffect } from './app/shared/states/user/user.effect';
import { WeatherEffect } from './app/shared/states/weather/weather.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    importProvidersFrom(IonicStorageModule.forRoot({
      name: 'weatherAppDb',
      description: 'Weather App Database',
      version: 1.0,
      driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB, Drivers.LocalStorage]
    })),
    importProvidersFrom(SharedModule),
    importProvidersFrom(StoreModule.forRoot({
      userParams: userReducer,
      weather: weatherReducer,
      weatherForecast: weatherForecastReducer
    })),
    importProvidersFrom(EffectsModule.forRoot([UserEffect, WeatherEffect])),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
        deps: [HttpClient]
      }
    })),
    provideRouter(routes),
  ],
});

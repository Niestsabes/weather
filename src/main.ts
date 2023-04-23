import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { SharedModule } from './app/shared/shared.module';
import { WeatherEffect } from './app/shared/states/weather/weather.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { weatherForecastReducer, weatherReducer } from './app/shared/states/weather/weather.reducer';
import { userReducer } from './app/shared/states/user/user.reducer';
import { UserEffect } from './app/shared/states/user/user.effect';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    importProvidersFrom(SharedModule),
    importProvidersFrom(StoreModule.forRoot({
      userParams: userReducer,
      weather: weatherReducer,
      weatherForecast: weatherForecastReducer
    })),
    importProvidersFrom(EffectsModule.forRoot([UserEffect, WeatherEffect])),
    provideRouter(routes),
  ],
});

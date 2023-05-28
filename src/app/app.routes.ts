import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./core/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'city',
    loadComponent: () => import('./core/city/city.page').then( m => m.CityPage)
  },
  {
    path: 'forecast/:cityId',
    loadComponent: () => import('./core/forecast/forecast.page').then( m => m.ForecastPage)
  },
  {
    path: 'parameter',
    loadComponent: () => import('./core/parameter/parameter.page').then( m => m.ParameterPage)
  },
  {
    path: 'share',
    loadComponent: () => import('./core/share/share.page').then( m => m.SharePage)
  },
];

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
    path: 'add-city',
    loadComponent: () => import('./core/add-city/add-city.page').then( m => m.AddCityPage)
  },
  {
    path: 'forecast',
    loadComponent: () => import('./core/forecast/forecast.page').then( m => m.ForecastPage)
  },
];

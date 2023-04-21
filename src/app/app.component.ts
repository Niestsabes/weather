import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from './shared/shared.module';
import { HomeForecastComponent } from './core/home/components/home-forecast/home-forecast.component';

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
  constructor() {}
}

import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Weather } from 'src/app/shared/models/weather.interface';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home-sunset',
  templateUrl: './home-sunset.component.html',
  styleUrls: ['./home-sunset.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class HomeSunsetComponent {

  @Input() weather!: Weather;

  constructor() { }

}

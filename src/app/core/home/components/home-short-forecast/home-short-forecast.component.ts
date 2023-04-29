import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Weather } from 'src/app/shared/models/weather.interface';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home-short-forecast',
  templateUrl: './home-short-forecast.component.html',
  styleUrls: ['./home-short-forecast.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class HomeShortForecastComponent  implements OnInit {

  @Input() weather!: Weather;

  constructor() { }

  ngOnInit() {}

}

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class WeatherIconComponent  implements OnInit {

  public readonly iconBaseUrl = 'https://openweathermap.org/img/wn/';
  public readonly iconExtension = '.png';
  @Input() public iconSize = 32;
  @Input() public iconCode!: string;
  @Input() public iconDescription!: string;

  constructor() { }

  ngOnInit() {}

}

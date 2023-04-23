import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class WeatherIconComponent  implements OnInit {
  
  public readonly iconBaseUrl = 'http://openweathermap.org/img/wn/';
  public readonly iconExtension = '.png';
  @Input() public iconSize = 32;
  @Input() public iconCode!: string;
  @Input() public iconDescription!: string;

  constructor() { }

  ngOnInit() {}

}

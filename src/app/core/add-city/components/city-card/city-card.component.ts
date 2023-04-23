import { Component, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';
import { City } from 'src/app/shared/models/city.interface';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class CityCardComponent implements OnInit {

  @Input() city: City;
  @Output() removeCity = new Subject<void>();

  constructor() { }

  ngOnInit() {}

  public remove(): void {
    this.removeCity.next();
  }

}

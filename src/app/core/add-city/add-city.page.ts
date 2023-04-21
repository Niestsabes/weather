import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.page.html',
  styleUrls: ['./add-city.page.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule]
})
export class AddCityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

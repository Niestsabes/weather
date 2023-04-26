import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-parameter-rating',
  templateUrl: './parameter-rating.component.html',
  styleUrls: ['./parameter-rating.component.scss'],
  standalone: true,
  imports: [IonicModule, SharedModule, FormsModule]
})
export class ParameterRatingComponent {
  public rating: number = 0;
  public isModalOpen: boolean = false;
  @ViewChild('trigger') trigger!: ElementRef;

  constructor(
    private _modalCtrl: ModalController
  ) {}

  ngAfterViewInit(): void {
    // this.modal.onDidDismiss().then((data) => {
      // code to execute when modal is dismissed
    // });
  }

  public open(): void {
    this.trigger.nativeElement.click();
  }

  public submit(): void {
    // this.setOpen(false);
  }
}

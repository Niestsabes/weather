import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class ButtonIconComponent {

  @Input() iconName!: string;
  @Input() routerLink!: string;

  get btnClass(): string {
    return `rounded-3xl h-12 w-12 hover:bg-slate-300 hover:bg-opacity-20 text-xl`;
  }
}

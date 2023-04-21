import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class ButtonComponent {

  @Input() iconName!: string;
  @Input() routerLink!: string;

  get btnClass(): string {
    return `bg-slate-300 bg-opacity-40 h-12 rounded-xl mt-3 w-full`;
  }
}

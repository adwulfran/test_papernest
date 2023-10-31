import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-down-counter',
  template: `<app-button  (operation)="decrementCounter()"></app-button>`,
  standalone: true,
  imports: [CommonModule, ButtonComponent],
})
export class DownCounterComponent {
  unaryService = inject(UnaryService);

  decrementCounter() {
    this.unaryService.decrementCounter();
  }

}

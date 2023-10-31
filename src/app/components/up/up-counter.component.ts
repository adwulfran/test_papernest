import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-up-counter',
  template: `<app-button  (operation)="incrementCounter()"></app-button>`,
  standalone: true,
  imports: [CommonModule, ButtonComponent],
})
export class UpCounterComponent {
  unaryService = inject(UnaryService);

  incrementCounter() {
    this.unaryService.incrementCounter();
  }

}

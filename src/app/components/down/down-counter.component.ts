import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';

@Component({
  selector: 'app-down-counter',
  template: `<app-button  (operation)="decrementCounter()" [textBtn]="'Decrement'"></app-button>`,
})
export class DownCounterComponent {
  unaryService = inject(UnaryService);

  decrementCounter() {
    this.unaryService.decrementCounter();
  }

}

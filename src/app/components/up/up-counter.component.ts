import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';

@Component({
  selector: 'app-up-counter',
  template: `<app-button  (operation)="incrementCounter()" [textBtn]="'Increment'"></app-button>`,
})
export class UpCounterComponent {
  unaryService = inject(UnaryService);

  incrementCounter() {
    this.unaryService.incrementCounter();
  }

}

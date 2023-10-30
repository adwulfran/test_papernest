import { Component } from '@angular/core';
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

  constructor(private todosService: UnaryService) { }

  incrementCounter() {
    this.todosService.incrementCounter();
  }

}

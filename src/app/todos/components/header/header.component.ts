import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  standalone: true,
})
export class HeaderComponent {
  unaryService = inject(UnaryService);

  counter = this.unaryService.counter;


}

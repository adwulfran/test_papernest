import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, WritableSignal, inject, Input } from '@angular/core';
import { UnaryService } from '../../services/unary.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  unaryService = inject(UnaryService);
   counter!: WritableSignal<number>;
 
  constructor() {}
  
  ngOnInit() {
    this.counter = this.unaryService.counter;
  }
}

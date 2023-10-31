import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  unaryService = inject(UnaryService);
  editingId: string | null = null;
  counter!: WritableSignal<number>;

  constructor() { }
  
  ngOnInit() {
    this.counter = this.unaryService.counter;

  }

}

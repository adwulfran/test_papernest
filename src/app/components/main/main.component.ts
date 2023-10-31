import { Component, OnInit, WritableSignal, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,MatIconModule],
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

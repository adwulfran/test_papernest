import { Component, OnInit, WritableSignal, computed, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';
import { TodoComponent } from '../todo/todo.component';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [CommonModule, TodoComponent],
})
export class MainComponent implements OnInit {
  editingId: string | null = null;
  counter!: WritableSignal<number>;

  constructor(public todosService: UnaryService) {
    
  }
  ngOnInit() {
    this.counter = this.todosService.counter;

  }

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }

  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
  }
}

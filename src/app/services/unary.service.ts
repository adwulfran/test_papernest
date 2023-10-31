import { Injectable, effect, signal } from '@angular/core';
import {  Subject, filter, scan } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnaryService {
  public counter = signal(0);
  private numberOfActions$ = new Subject<number>();

  constructor() {
    const counterLocalStorage = localStorage.getItem('count') ;

    if (counterLocalStorage) {
      this.counter.set(Number(counterLocalStorage))
    }

    this.numberOfActions$.pipe(
      scan((previous, increment) => previous + increment),
      filter((r) => r % 30 == 0)
      )
      .subscribe(() => this.multiplyCounterByTwo());
  }

  useEffect = effect(() => {
    localStorage.setItem('count', this.counter().toString())
  })

  decrementCounter() {
    this.counter.update((counter) => counter - 1);
    this.numberOfActions$.next(1);
  }

  incrementCounter() {
    this.counter.update((counter) => counter + 1);
    this.numberOfActions$.next(1);
  }

  multiplyCounterByTwo() {
      this.counter.update((counter) => counter * 2);
  }
}



import { Injectable, effect, signal } from '@angular/core';
import { Subject, filter, scan, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnaryService {
  public counter = signal(0);
  public coeffX: number = 1;

  private actionsStream$ = new Subject<number>();
  public actions: number = 0;

  constructor() {
    const counterLocalStorage = localStorage.getItem('count');

    if (counterLocalStorage) {
      this.counter.set(Number(counterLocalStorage))
    }

    this.actionsStream$.pipe(
      scan((previous, increment) => previous + increment),
      tap((res) => this.actions = res),
      filter((res) => res % 30 == 0)
    )
      .subscribe(() => this.multiplyCoeffByTwo());
  }

  useEffect = effect(() => {
    localStorage.setItem('count', this.counter().toString())
  })

  decrementCounter() {
    this.counter.update((counter) => counter - this.coeffX);
    this.actionsStream$.next(1);
  }

  incrementCounter() {
    this.counter.update((counter) => counter + this.coeffX);
    this.actionsStream$.next(1);
  }

  resetCounter() {
    this.counter.update(() => 0)
  }

  multiplyCoeffByTwo() {
    this.coeffX = this.coeffX * 2;
  }
}



import { Injectable, effect, signal } from '@angular/core';
import { Subject, filter, scan, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnaryService {
  public counter = signal(0);
  public coeffX: number = 1;

  private _actionsSubject$ = new Subject<number>();
  public actions$ = this._actionsSubject$.pipe(scan((previous, increment) => previous + increment));

  constructor() {
    const counterLocalStorage = localStorage.getItem('count');

    if (counterLocalStorage) {
      this.counter.set(Number(counterLocalStorage))
    }

    this.actions$.pipe(filter((res) => res % 30 == 0)).subscribe(() => this.multiplyCoeffByTwo());
  }

  useEffect = effect(() => {
    localStorage.setItem('count', this.counter().toString())
  })

  decrementCounter() {
    this.counter.update((counter) => counter - this.coeffX);
    this._actionsSubject$.next(1);
  }

  incrementCounter() {
    this.counter.update((counter) => counter + this.coeffX);
    this._actionsSubject$.next(1);
  }

  resetCounter() {
    this.counter.update(() => 0)
  }

  multiplyCoeffByTwo() {
    this.coeffX = this.coeffX * 2;
  }
}



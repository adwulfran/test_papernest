import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class ButtonComponent implements AfterViewInit, OnDestroy {
    @Output() operation = new EventEmitter<string>();

    @ViewChild('operationBtn') operationBtn: ElementRef | undefined;

    private btnSubscription: Subscription | undefined;

    ngAfterViewInit(): void {
        this.btnSubscription = fromEvent(this.operationBtn?.nativeElement, 'click')
            .pipe(debounceTime(100))
            .subscribe(() => this.operation.emit());
    }

    ngOnDestroy(): void {
        this.btnSubscription?.unsubscribe();
    }
}

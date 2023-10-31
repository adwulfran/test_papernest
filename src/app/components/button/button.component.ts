import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription, debounceTime, fromEvent } from 'rxjs';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements AfterViewInit, OnDestroy {
    @Input() textBtn: string | undefined;
    @Output() operation = new EventEmitter<string>();

    @ViewChild('operationBtn', { read: ElementRef }) operationBtn!: ElementRef | undefined;

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

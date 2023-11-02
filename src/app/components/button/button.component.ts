import { Component, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
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

    constructor(private _cd: ChangeDetectorRef) { }
    ngAfterViewInit(): void {
        this.btnSubscription = fromEvent(this.operationBtn?.nativeElement, 'click')
            .pipe(debounceTime(100))
            .subscribe(() => this.operation.emit());
        this._cd.detach();
    }

    ngOnDestroy(): void {
        this.btnSubscription?.unsubscribe();
    }

    render() {
        console.log('render button')
    }
}

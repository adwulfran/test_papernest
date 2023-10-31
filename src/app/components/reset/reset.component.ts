import { Component, inject } from '@angular/core';
import { UnaryService } from '../../services/unary.service';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css'],

})
export class ResetComponent {
    unaryService = inject(UnaryService);
    birthday: string | undefined;

    resetCounter(): void {
        if (this.birthday) {
            const timeDiff = Math.abs(Date.now() - new Date(this.birthday).getTime());
            const age  = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
            if (age > 18 ) {
                this.unaryService.resetCounter();
            }
        }
    }
}
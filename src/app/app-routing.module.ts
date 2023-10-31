import { Routes } from '@angular/router';
import { UpCounterComponent } from './components/up/up-counter.component';
import { DownCounterComponent } from './components/down/down-counter.component';

export const routes: Routes = [
    { path: 'up', component: UpCounterComponent },
    { path: 'down', component: DownCounterComponent },
];

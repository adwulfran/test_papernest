import { RouterModule, Routes } from '@angular/router';
import { UpCounterComponent } from './components/up/up-counter.component';
import { DownCounterComponent } from './components/down/down-counter.component';
import { ResetComponent } from './components/reset/reset.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'up', pathMatch: 'full' },
    { path: 'up', component: UpCounterComponent },
    { path: 'down', component: DownCounterComponent },
    { path: 'reset', component: ResetComponent },
    { path: '**', component: UpCounterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule {}
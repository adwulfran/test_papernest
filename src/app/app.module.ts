
// Modules
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { UpCounterComponent } from './components/up/up-counter.component';
import { DownCounterComponent } from './components/down/down-counter.component';
import { ResetComponent } from './components/reset/reset.component';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ButtonComponent,
        UpCounterComponent,
        DownCounterComponent,
        ResetComponent
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        AppRoutingModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatNativeDateModule,
        FormsModule,
        MatGridListModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

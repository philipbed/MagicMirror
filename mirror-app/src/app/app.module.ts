import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TimeService } from './time.service';

const ROUTES = [
    {
        path: '', redirectTo: '/time' , pathMatch: 'full',
    },
    {
        path: 'time', name:'Time', component: TimeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        TimeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [TimeService],
    bootstrap: [AppComponent]
})
export class AppModule { }

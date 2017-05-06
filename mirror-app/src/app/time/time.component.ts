import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
    time: any = '';
    date: any;
    constructor(private timeService: TimeService) {
    }

    ngOnInit() {
        let currentTime = this.timeService.getTime();
        let obs = new Observable();

        let currDate = this.timeService.getDate();

        this.date = currDate;

        currentTime.expand(() => Observable.timer(1000).concatMap(() => currentTime))
            .subscribe(time => {
                this.time = time;
            });


    }
}

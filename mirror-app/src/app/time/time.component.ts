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
        // retrieve the date and time
        let currentTime = this.timeService.getTime();

        let currDate = this.timeService.getDate();

        this.date = currDate;

        // update the time once every 1000 milliseconds ( every second)
        currentTime.expand(() => Observable.timer(1000).concatMap(() => currentTime))
            .subscribe(time => {
                this.time = time;
            });


    }
}

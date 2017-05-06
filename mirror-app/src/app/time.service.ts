import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TimeService {
  weekdays :any;
  months: any;
  constructor(private http: Http) {

    this.weekdays = {
      1:"Monday",
      2:"Tuesday",
      3:"Wednesday",
      4:"Thursday",
      5:"Friday",
      6:"Saturday",
      7:"Sunday"
    };

    this.months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
      };

  }

  getTime(){
    return this.http.get("/app/time").map(res => res.json());
  }

  getDate(){
    let dateObj = new Date();
    let dayOfWeek = this.weekdays[ dateObj.getDay() ];
    let month = this.months[ dateObj.getMonth() ];
    let dateNum = dateObj.getDate();
    let year = dateObj.getFullYear();

    let firstHalf = dayOfWeek + ", "+month +" "+dateNum;
    let obj = {"first":firstHalf,"second":year};
    // let obs =
    return obj;
  }

}

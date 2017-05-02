import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TimeService {

  constructor(private http: Http) { }

  getTime(){
    return this.http.get("/app/time").map(res => res.json());
  }

}

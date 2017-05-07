import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    apiKey:string = 'VRN01NZGEojTEmqf8uWfF3DA5CScuDAj';
    params: URLSearchParams = new URLSearchParams();

    constructor(private http:Http) {
        this.params.set("apikey",this.apiKey);
    }

    getCurrentConditions(){
        return this.http.get("http://dataservice.accuweather.com/currentconditions/v1/329674",{
          search: this.params
        }).map(res => res.json());

    }


    getIconStr( iconNumber:number ){
        let num :string ='';
        if (iconNumber < 10){
            num += '0'+iconNumber.toString();
        }
        else{
            num = iconNumber.toString();
        }
        return num;
    }

    getTwelveDay(){
        return this.http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/329674",{
            search: this.params
        }).map(res => res.json());
    }

    processFiveDay(fiveDayForecast : Array<any>){
        fiveDayForecast.forEach((entry) => {
            let date = entry.DateTime;
            let today = new Date(date);

            entry.DateTime = this.getFormattedTime(today);
            entry.WeatherIcon = this.getIconStr(entry.WeatherIcon);

        });

        return fiveDayForecast;
    }

  getFormattedTime( dateObj: Date ){


    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes().toString();

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // minutes under 10 should be prepended with a zero (i.e '02')
    minutes = parseInt(minutes) < 10 ? '0'+minutes : minutes;

    let strTime = hours + ':' + minutes + ':' + ampm;

    return strTime;

  }
}

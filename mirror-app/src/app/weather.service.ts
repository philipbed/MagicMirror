import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';

/***
 * Class that contains methods that make asynchronous HTTP request for weather data
 * and methods that format this data.
 */
@Injectable()
export class WeatherService {
    apiKey:string = 'VRN01NZGEojTEmqf8uWfF3DA5CScuDAj';
    params: URLSearchParams = new URLSearchParams();

    constructor(private http:Http) {
        this.params.set("apikey",this.apiKey);
    }

  /**
   * Makes an asynchronous HTTP request to the AccuWeather API for the current conditions in Rochester,NY
   * @returns {Observable<R>} - the weather API JSON response.
   */
  getCurrentConditions(){
        return this.http.get("http://dataservice.accuweather.com/currentconditions/v1/329674",{
          search: this.params
        }).map(res => res.json());

    }

  /**
   * pads the icon number given in the json with a zero if
   * the number is less than 10
   * @param iconNumber - the original icon number
   * @returns {string}
   */
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

  /**
   * Makes an asynchronous HTTP request to the AccuWeather API for the 12-day forecast in Rochester,NY
   * @returns {Observable<R>} - the weather API JSON response.
   */
  getTwelveDay(){
      return this.http.get("http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/329674",{
          search: this.params
      }).map(res => res.json());
  }

  /**
   * Edit some of the entries in the json objects to the format we want
   * for the four day forecast
   * @param fiveDayForecast - an array of four json objects
   * @returns {Array<any>} - an array of edited json objects
   */
  processFourDay(fiveDayForecast : Array<any>){

    fiveDayForecast.forEach((entry) => {
          let date = entry.DateTime;
          let today = new Date(date);

          entry.DateTime = this.getFormattedTime(today);
          entry.WeatherIcon = this.getIconStr(entry.WeatherIcon);

      });

      return fiveDayForecast;
  }

  /**
   * Formatting the time that is received in the AccuWeather 12-day (our four-day) forecast
   * @param dateObj - the current date
   * @returns {string} - contains the formatted time
   */
  getFormattedTime( dateObj: Date ){


    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes().toString();

    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // minutes under 10 should be prepended with a zero (i.e '02')
    minutes = parseInt(minutes) < 10 ? '0'+minutes : minutes;

    let strTime = hours + ':' + minutes + '' + ampm;

    return strTime;

  }
}

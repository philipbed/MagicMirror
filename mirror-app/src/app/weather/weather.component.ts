import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  icon: any;
  conditionText: string;
  temp: string;
  fiveDayForecast: Array<any>;
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
      this.weatherService.getCurrentConditions().subscribe((response) =>{
          let currentConditions = response[0];
          this.conditionText = currentConditions.WeatherText;
          let icon = currentConditions.WeatherIcon;
          let temp = currentConditions.Temperature.Imperial.Value;
          let unit = currentConditions.Temperature.Imperial.Unit;

          this.temp = temp.toString() + unit;

          this.icon = this.weatherService.getIconStr(icon);
      });

      this.weatherService.getTwelveDay().subscribe((response) => {
          let fiveDayForecast = response.slice(0,5);
          this.fiveDayForecast = this.weatherService.processFiveDay(fiveDayForecast);
      });
  }

}

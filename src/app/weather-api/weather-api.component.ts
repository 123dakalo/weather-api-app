import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Weather} from '../weather';

@Component({
  selector: 'app-weather-api',
  standalone: false,
  templateUrl: './weather-api.component.html',
  styleUrl: './weather-api.component.css'
})
export class WeatherApiComponent {

  cityName: string = 'Thohoyandou';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeatherData(this.cityName).subscribe(data => {
      this.weatherData = data;
    },error => console.log(error));
  }
}

import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather-api',
  standalone: false,
  templateUrl: './weather-api.component.html',
  styleUrl: './weather-api.component.css'
})
export class WeatherApiComponent {

  cityName: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    this.weatherService.getWeatherData(this.cityName).subscribe(data => {
      this.weatherData = data;
    },error => console.log(error));
  }

  getWeatherByLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          this.weatherService.getWeatherData(coords).subscribe(
            data => this.weatherData = data,
            error => console.log('Weather fetch error:', error)
          );
        },
        error => {
          console.error('Geolocation error:', error);
          this.getWeather(); // fallback
        }
      );
    } else {
      console.error('Geolocation not supported.');
      this.getWeather(); // fallback
    }
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Weather} from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = "https://api.weatherapi.com/v1/current.json"
  private pKey = "db450dcd7cdd4016be093537250404"

  constructor(private httpClient: HttpClient) {
  }

  getWeatherData(cityName: string): Observable<Weather>{
    let params = new HttpParams()
      .set('key', this.pKey)
      .set('q', cityName)
      .set('aqi', 'no');

    return this.httpClient.get<Weather>(this.baseUrl, {params})
  }

}

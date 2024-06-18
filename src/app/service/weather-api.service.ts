import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiUrl ='https://api.openweathermap.org/data/2.5/weather';


  constructor(private http:HttpClient) { }


  getWeather(city:string):Observable<any>{

    const apiKey = 'fca0c83fd3d4f9e91163f3a9d25f19eb';
    const url =  `${this.apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    return this.http.get(url)

  }







}

import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../service/weather-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  implements OnInit{


weatherData:any;

constructor(private weatherApi:WeatherApiService){}

  ngOnInit(): void {

    this.getWeatherData('Qarshi')
    
    
  }


  getWeatherData(city:string):void {
     this.weatherApi.getWeather(city)

     .subscribe((data) =>{

      this.weatherData =  data;
      console.log(this.weatherData);
      


     })

  }



}

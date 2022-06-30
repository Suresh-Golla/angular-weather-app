import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  cityName:string='hyderabad';
  weatherData?:weatherData;
 
  constructor(private weatherService:WeatherService){}
  


  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName='';
  }
  
  onSubmit(){
      this.getweatherData(this.cityName);
      this.cityName='';
  }

  private getweatherData(cityName: string){
    this.weatherService.getweatherData(this.cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }



}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  weatherData:any;
  cityName: string = 'Pune';
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
    }

    private getWeatherData(cityName: string) {
      this.weatherService.getWeatherData(cityName)
      .subscribe({
          next: (response) => {
          this.weatherData = response;
          console.log(response);
          }
      });
      }
  }

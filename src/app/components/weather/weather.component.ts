import { Component, OnInit } from '@angular/core';
import { ICityWeather } from 'src/app/shared/models/city-weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'angtest-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public citiesWeather$!: ICityWeather;
  public selectedCity = '';
  public cardIsVisible = false;

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void { }


  getCity() {
    this.weatherService.getCitiesWeather(this.selectedCity).subscribe(res => this.citiesWeather$ = res)

    this.cardIsVisible = true;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ICityWeather } from 'src/app/shared/models/city-weather.model';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'angtest-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() weather!: ICityWeather;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {}

}

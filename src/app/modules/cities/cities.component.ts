import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CitiesService } from './cities.service';

@Component({
  selector: 'angtest-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  public citiesWeather$: any = {};
  public selectedCity!: string;


  constructor(private readonly http: HttpClient, private readonly citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCitiesWeather().subscribe(response => {this.citiesWeather$ = response; console.log(response);
    } )
  }


  getCity(value: string) {
    this.citiesService.getCityByName(this.selectedCity).subscribe(response => this.citiesWeather$ = response
    )

  }

}

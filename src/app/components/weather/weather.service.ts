import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IApiResponseWeather, ICityWeather } from 'src/app/shared/models/city-weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private readonly http: HttpClient) {}

  getCitiesWeather(name: string): Observable<ICityWeather> {
    const params = new HttpParams()

    .set('q', name)
    .set('appid', environment.apiKey)
    .set('lang', 'it')
    .set('units', 'metric')

    return this.http.get<IApiResponseWeather>(environment.apiUrl, {params})
    .pipe(
      map(res => ({
        name: res.name,
        country: res.sys.country,
        date: new Date(),
        temperature: Math.round(res.main.temp),
        description: res.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
      }))
    )
  }

}

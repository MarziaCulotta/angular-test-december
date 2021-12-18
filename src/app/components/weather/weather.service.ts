import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { ApiResC, ApiResW, ICitiesWeather } from 'src/app/shared/models/city-weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private readonly http: HttpClient) {}

  getWeather(lat: string, lon: string, city: string): Observable<ICitiesWeather> {
    const params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('appid', environment.apiKey)
      .set('lang', 'it')
      .set('units', 'metric');
    return this.http.get<ApiResW>(environment.apiUrl, { params }).pipe(
      map((res) => ({
        city: city,
        date: new Date(),
        temperature: Math.round(res.current.temp),
        description: res.current.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${res.current.weather[0].icon}@2x.png`,
      }))
    );
  }

  getWeatherbyCoords(city: string): Observable<ICitiesWeather> {
    const params = new HttpParams().set('city', city).set('format', 'json');
    return this.http
      .get<ApiResC[]>(environment.coordApiUrl, { params })
      .pipe(switchMap((res) => this.getWeather(res[0].lat, res[0].lon, city)));
  }


}

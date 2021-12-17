import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  constructor(private readonly http: HttpClient) {}

  getConfig(city = 'Milan', state = '') {
    if (state) {
      return new HttpParams()
        .set('q', city)
        .set('appid', 'f5e337ae58f50c808369b5ac80636ddb')
        .set('q', state);
    }
    return new HttpParams()
      .set('q', city)
      .set('appid', 'f5e337ae58f50c808369b5ac80636ddb')
      .set('lang', 'it' )
  }

  getCitiesWeather(): Observable<any> {
    const params = this.getConfig();
    return this.http
      .get<any>(`${environment.apiUrl}`, { params })
      .pipe(map((response: any) => response));
  }

  getCityByName(city: string, state = '') {
    const params = state ? this.getConfig(city, state) : this.getConfig(city);

    return this.http
      .get<any>(`${environment.apiUrl}`, { params })
      .pipe(map((response: any) => response));
  }
}

export interface ICityWeather {
  name: string;
  country: string;
  date: Date;
  temperature: number;
  description: string;
  icon: string;
}

export interface IWeatherApi {
  description: string;
  icon: string;
}

export interface IApiResponseWeather {
  name: string;
  sys: {
    country: string
  };
  main: {
    temp: number
  };
  weather: IWeatherApi[];
}

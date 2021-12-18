
export interface ICitiesWeather {
  city: string;
  date: Date;
  temperature: number;
  description: string;
  icon: string;
}
export interface Coord {
  lat: string;
  lon: string;
}

export interface ApiResC {
  lat: string;
  lon: string;
}

export interface ApiResW  {
  current: {
    weather: [{ description: string; icon: string }];
    temp: number;
  };
}

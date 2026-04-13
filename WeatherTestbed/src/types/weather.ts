export type WeatherCondition = 'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy' | 'Windy' | 'Foggy' | 'Partly Cloudy' | 'Thunderstorm';

export interface ForecastDay {
  date: string;
  condition: WeatherCondition;
  minTemp: number;
  maxTemp: number;
}

export interface CurrentWeather {
  cityName: string;
  temperature: number;
  condition: WeatherCondition;
  humidity: number;
  windSpeed: number;
}

export interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export interface CityWeather {
  name: string;
  nameEn: string;
  aliases: string[];
  data: WeatherData;
}

export interface WeatherCondition {
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeather {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  condition: WeatherCondition;
}

export interface ForecastDay {
  date: string;
  day_of_week: string;
  temp_min: number;
  temp_max: number;
  condition: WeatherCondition;
}

export interface CityWeather {
  id: number;
  name: string;
  name_en: string;
  country: string;
  current: CurrentWeather;
  forecast: ForecastDay[];
}

export interface SearchBarProps {
  placeholder?: string;
}

export interface SearchBarEmits {
  (e: 'search', cityName: string): void;
}

export interface CurrentWeatherProps {
  cityName: string;
  weather: CurrentWeather;
}

export interface ForecastListProps {
  forecast: ForecastDay[];
}

export type WeatherIconType = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy' | 'foggy';
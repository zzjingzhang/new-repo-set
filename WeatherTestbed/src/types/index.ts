export interface WeatherCondition {
  main: string
  description: string
  icon: string
}

export interface CurrentWeather {
  city: string
  cityEn: string
  temp: number
  condition: WeatherCondition
}

export interface ForecastDay {
  date: string
  condition: WeatherCondition
  tempMin: number
  tempMax: number
}

export interface CityWeather {
  current: CurrentWeather
  forecast: ForecastDay[]
}

export type WeatherData = Record<string, CityWeather>

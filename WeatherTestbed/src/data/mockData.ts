import type { WeatherData } from '../types'

export const mockWeatherData: WeatherData = {
  beijing: {
    current: {
      city: '北京',
      cityEn: 'Beijing',
      temp: 22,
      condition: {
        main: 'Sunny',
        description: '晴天',
        icon: '☀️'
      }
    },
    forecast: [
      { date: '2024-04-14', condition: { main: 'Sunny', description: '晴天', icon: '☀️' }, tempMin: 15, tempMax: 25 },
      { date: '2024-04-15', condition: { main: 'Cloudy', description: '多云', icon: '⛅' }, tempMin: 14, tempMax: 23 },
      { date: '2024-04-16', condition: { main: 'Rain', description: '小雨', icon: '🌧️' }, tempMin: 12, tempMax: 20 },
      { date: '2024-04-17', condition: { main: 'Cloudy', description: '多云', icon: '⛅' }, tempMin: 13, tempMax: 22 },
      { date: '2024-04-18', condition: { main: 'Sunny', description: '晴天', icon: '☀️' }, tempMin: 16, tempMax: 26 }
    ]
  },
  shanghai: {
    current: {
      city: '上海',
      cityEn: 'Shanghai',
      temp: 25,
      condition: {
        main: 'Cloudy',
        description: '多云',
        icon: '⛅'
      }
    },
    forecast: [
      { date: '2024-04-14', condition: { main: 'Cloudy', description: '多云', icon: '⛅' }, tempMin: 18, tempMax: 26 },
      { date: '2024-04-15', condition: { main: 'Rain', description: '中雨', icon: '🌧️' }, tempMin: 17, tempMax: 23 },
      { date: '2024-04-16', condition: { main: 'Rain', description: '小雨', icon: '🌧️' }, tempMin: 16, tempMax: 22 },
      { date: '2024-04-17', condition: { main: 'Cloudy', description: '阴天', icon: '☁️' }, tempMin: 17, tempMax: 24 },
      { date: '2024-04-18', condition: { main: 'Sunny', description: '晴天', icon: '☀️' }, tempMin: 19, tempMax: 27 }
    ]
  },
  tianjin: {
    current: {
      city: '天津',
      cityEn: 'Tianjin',
      temp: 20,
      condition: {
        main: 'Cloudy',
        description: '阴天',
        icon: '☁️'
      }
    },
    forecast: [
      { date: '2024-04-14', condition: { main: 'Cloudy', description: '阴天', icon: '☁️' }, tempMin: 13, tempMax: 21 },
      { date: '2024-04-15', condition: { main: 'Sunny', description: '晴天', icon: '☀️' }, tempMin: 14, tempMax: 23 },
      { date: '2024-04-16', condition: { main: 'Sunny', description: '晴天', icon: '☀️' }, tempMin: 15, tempMax: 24 },
      { date: '2024-04-17', condition: { main: 'Cloudy', description: '多云', icon: '⛅' }, tempMin: 14, tempMax: 22 },
      { date: '2024-04-18', condition: { main: 'Rain', description: '小雨', icon: '🌧️' }, tempMin: 12, tempMax: 19 }
    ]
  }
}

export function searchCity(query: string): string | null {
  const normalizedQuery = query.toLowerCase().trim()
  
  for (const key of Object.keys(mockWeatherData)) {
    const data = mockWeatherData[key]
    if (
      key === normalizedQuery ||
      data.current.city === query ||
      data.current.cityEn.toLowerCase() === normalizedQuery ||
      data.current.city.includes(query) ||
      data.current.cityEn.toLowerCase().includes(normalizedQuery)
    ) {
      return key
    }
  }
  
  return null
}

export function getWeatherData(cityKey: string) {
  return mockWeatherData[cityKey] || null
}

import type { CityWeather, WeatherCondition, ForecastDay } from '../types/weather';

const generateForecast = (baseTemp: number, conditions: WeatherCondition[]): ForecastDay[] => {
  const forecast: ForecastDay[] = [];
  const today = new Date();
  
  for (let i = 1; i <= 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const tempVariation = Math.floor(Math.random() * 6) - 3;
    
    forecast.push({
      date: date.toISOString().split('T')[0],
      condition: randomCondition,
      minTemp: baseTemp + tempVariation - 5,
      maxTemp: baseTemp + tempVariation + 5
    });
  }
  
  return forecast;
};

export const mockCities: CityWeather[] = [
  {
    name: '北京',
    nameEn: 'Beijing',
    aliases: ['beijing', '北京', 'bj', 'peking'],
    data: {
      current: {
        cityName: '北京',
        temperature: 22,
        condition: 'Sunny',
        humidity: 45,
        windSpeed: 12
      },
      forecast: generateForecast(22, ['Sunny', 'Partly Cloudy', 'Cloudy'])
    }
  },
  {
    name: '上海',
    nameEn: 'Shanghai',
    aliases: ['shanghai', '上海', 'sh'],
    data: {
      current: {
        cityName: '上海',
        temperature: 25,
        condition: 'Cloudy',
        humidity: 65,
        windSpeed: 15
      },
      forecast: generateForecast(25, ['Cloudy', 'Rainy', 'Partly Cloudy'])
    }
  },
  {
    name: '天津',
    nameEn: 'Tianjin',
    aliases: ['tianjin', '天津', 'tj'],
    data: {
      current: {
        cityName: '天津',
        temperature: 20,
        condition: 'Partly Cloudy',
        humidity: 55,
        windSpeed: 18
      },
      forecast: generateForecast(20, ['Partly Cloudy', 'Sunny', 'Windy'])
    }
  },
  {
    name: '广州',
    nameEn: 'Guangzhou',
    aliases: ['guangzhou', '广州', 'gz', 'canton'],
    data: {
      current: {
        cityName: '广州',
        temperature: 28,
        condition: 'Rainy',
        humidity: 80,
        windSpeed: 10
      },
      forecast: generateForecast(28, ['Rainy', 'Thunderstorm', 'Cloudy'])
    }
  },
  {
    name: '深圳',
    nameEn: 'Shenzhen',
    aliases: ['shenzhen', '深圳', 'sz'],
    data: {
      current: {
        cityName: '深圳',
        temperature: 29,
        condition: 'Sunny',
        humidity: 70,
        windSpeed: 8
      },
      forecast: generateForecast(29, ['Sunny', 'Partly Cloudy', 'Rainy'])
    }
  },
  {
    name: '成都',
    nameEn: 'Chengdu',
    aliases: ['chengdu', '成都', 'cd'],
    data: {
      current: {
        cityName: '成都',
        temperature: 18,
        condition: 'Foggy',
        humidity: 75,
        windSpeed: 5
      },
      forecast: generateForecast(18, ['Foggy', 'Cloudy', 'Rainy'])
    }
  }
];

export const searchCity = (query: string): CityWeather | undefined => {
  const normalizedQuery = query.toLowerCase().trim();
  
  return mockCities.find(city => 
    city.aliases.some(alias => alias.includes(normalizedQuery)) ||
    city.name.includes(query) ||
    city.nameEn.toLowerCase().includes(normalizedQuery)
  );
};

export const getWeatherIcon = (condition: WeatherCondition): string => {
  const iconMap: Record<WeatherCondition, string> = {
    'Sunny': '☀️',
    'Cloudy': '☁️',
    'Rainy': '🌧️',
    'Snowy': '❄️',
    'Windy': '💨',
    'Foggy': '🌫️',
    'Partly Cloudy': '⛅',
    'Thunderstorm': '⛈️'
  };
  
  return iconMap[condition] || '🌡️';
};

export const getWeatherDescription = (condition: WeatherCondition): string => {
  const descriptionMap: Record<WeatherCondition, string> = {
    'Sunny': '晴朗',
    'Cloudy': '多云',
    'Rainy': '下雨',
    'Snowy': '下雪',
    'Windy': '大风',
    'Foggy': '雾霾',
    'Partly Cloudy': '局部多云',
    'Thunderstorm': '雷暴'
  };
  
  return descriptionMap[condition] || condition;
};

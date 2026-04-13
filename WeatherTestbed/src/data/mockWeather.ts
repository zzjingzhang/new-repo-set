import type { CityWeather } from '../types';

export const mockWeatherData: CityWeather[] = [
  {
    id: 1,
    name: '北京',
    name_en: 'Beijing',
    country: '中国',
    current: {
      temp: 18,
      feels_like: 16,
      humidity: 45,
      wind_speed: 3.5,
      condition: {
        main: 'Sunny',
        description: '晴朗',
        icon: 'sunny'
      }
    },
    forecast: [
      {
        date: '2024-04-14',
        day_of_week: '周一',
        temp_min: 12,
        temp_max: 20,
        condition: {
          main: 'Sunny',
          description: '晴朗',
          icon: 'sunny'
        }
      },
      {
        date: '2024-04-15',
        day_of_week: '周二',
        temp_min: 14,
        temp_max: 22,
        condition: {
          main: 'Cloudy',
          description: '多云',
          icon: 'cloudy'
        }
      },
      {
        date: '2024-04-16',
        day_of_week: '周三',
        temp_min: 11,
        temp_max: 18,
        condition: {
          main: 'Rainy',
          description: '小雨',
          icon: 'rainy'
        }
      },
      {
        date: '2024-04-17',
        day_of_week: '周四',
        temp_min: 10,
        temp_max: 16,
        condition: {
          main: 'Cloudy',
          description: '阴天',
          icon: 'cloudy'
        }
      },
      {
        date: '2024-04-18',
        day_of_week: '周五',
        temp_min: 13,
        temp_max: 21,
        condition: {
          main: 'Sunny',
          description: '晴朗',
          icon: 'sunny'
        }
      }
    ]
  },
  {
    id: 2,
    name: '上海',
    name_en: 'Shanghai',
    country: '中国',
    current: {
      temp: 22,
      feels_like: 23,
      humidity: 70,
      wind_speed: 2.8,
      condition: {
        main: 'Cloudy',
        description: '多云',
        icon: 'cloudy'
      }
    },
    forecast: [
      {
        date: '2024-04-14',
        day_of_week: '周一',
        temp_min: 18,
        temp_max: 25,
        condition: {
          main: 'Cloudy',
          description: '多云',
          icon: 'cloudy'
        }
      },
      {
        date: '2024-04-15',
        day_of_week: '周二',
        temp_min: 19,
        temp_max: 26,
        condition: {
          main: 'Sunny',
          description: '晴朗',
          icon: 'sunny'
        }
      },
      {
        date: '2024-04-16',
        day_of_week: '周三',
        temp_min: 17,
        temp_max: 23,
        condition: {
          main: 'Rainy',
          description: '中雨',
          icon: 'rainy'
        }
      },
      {
        date: '2024-04-17',
        day_of_week: '周四',
        temp_min: 16,
        temp_max: 22,
        condition: {
          main: 'Rainy',
          description: '小雨',
          icon: 'rainy'
        }
      },
      {
        date: '2024-04-18',
        day_of_week: '周五',
        temp_min: 18,
        temp_max: 24,
        condition: {
          main: 'Cloudy',
          description: '多云',
          icon: 'cloudy'
        }
      }
    ]
  },
  {
    id: 3,
    name: '天津',
    name_en: 'Tianjin',
    country: '中国',
    current: {
      temp: 16,
      feels_like: 14,
      humidity: 55,
      wind_speed: 4.2,
      condition: {
        main: 'Windy',
        description: '大风',
        icon: 'windy'
      }
    },
    forecast: [
      {
        date: '2024-04-14',
        day_of_week: '周一',
        temp_min: 10,
        temp_max: 18,
        condition: {
          main: 'Windy',
          description: '大风',
          icon: 'windy'
        }
      },
      {
        date: '2024-04-15',
        day_of_week: '周二',
        temp_min: 11,
        temp_max: 19,
        condition: {
          main: 'Sunny',
          description: '晴朗',
          icon: 'sunny'
        }
      },
      {
        date: '2024-04-16',
        day_of_week: '周三',
        temp_min: 9,
        temp_max: 16,
        condition: {
          main: 'Cloudy',
          description: '多云',
          icon: 'cloudy'
        }
      },
      {
        date: '2024-04-17',
        day_of_week: '周四',
        temp_min: 8,
        temp_max: 15,
        condition: {
          main: 'Foggy',
          description: '雾',
          icon: 'foggy'
        }
      },
      {
        date: '2024-04-18',
        day_of_week: '周五',
        temp_min: 11,
        temp_max: 19,
        condition: {
          main: 'Sunny',
          description: '晴朗',
          icon: 'sunny'
        }
      }
    ]
  }
];

export function searchWeather(cityName: string): CityWeather | undefined {
  const searchTerm = cityName.toLowerCase().trim();
  return mockWeatherData.find(city => 
    city.name.toLowerCase().includes(searchTerm) ||
    city.name_en.toLowerCase().includes(searchTerm)
  );
}
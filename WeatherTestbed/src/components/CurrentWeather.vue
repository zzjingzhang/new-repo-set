<script setup lang="ts">
import type { CurrentWeather as CurrentWeatherType } from '../types/weather';
import { getWeatherIcon, getWeatherDescription } from '../data/mockWeather';

interface Props {
  weather: CurrentWeatherType;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="current-weather">
    <div class="weather-card">
      <h2 class="city-name">{{ props.weather.cityName }}</h2>
      <div class="weather-main">
        <div class="weather-icon">{{ getWeatherIcon(props.weather.condition) }}</div>
        <div class="temperature">{{ props.weather.temperature }}°C</div>
      </div>
      <div class="weather-condition">
        {{ getWeatherDescription(props.weather.condition) }} / {{ props.weather.condition }}
      </div>
      <div class="weather-details">
        <div class="detail-item">
          <span class="detail-icon">💧</span>
          <span class="detail-label">湿度</span>
          <span class="detail-value">{{ props.weather.humidity }}%</span>
        </div>
        <div class="detail-item">
          <span class="detail-icon">💨</span>
          <span class="detail-label">风速</span>
          <span class="detail-value">{{ props.weather.windSpeed }} km/h</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.current-weather {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.weather-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 40px 30px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease;
}

.weather-card:hover {
  transform: translateY(-5px);
}

.city-name {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.weather-main {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
}

.weather-icon {
  font-size: 72px;
  line-height: 1;
}

.temperature {
  font-size: 64px;
  font-weight: 300;
  line-height: 1;
}

.weather-condition {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  opacity: 0.95;
}

.weather-details {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.detail-icon {
  font-size: 24px;
}

.detail-label {
  font-size: 14px;
  opacity: 0.8;
}

.detail-value {
  font-size: 18px;
  font-weight: 600;
}

@media (max-width: 640px) {
  .weather-card {
    padding: 30px 20px;
  }
  
  .city-name {
    font-size: 28px;
  }
  
  .temperature {
    font-size: 48px;
  }
  
  .weather-icon {
    font-size: 56px;
  }
  
  .weather-details {
    gap: 30px;
  }
}
</style>

<script setup lang="ts">
import type { CurrentWeather as CurrentWeatherType } from '../types';

defineProps<{
  cityName: string;
  weather: CurrentWeatherType;
}>();

const weatherIcons: Record<string, string> = {
  sunny: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  snowy: '❄️',
  windy: '💨',
  foggy: '🌫️'
};
</script>

<template>
  <div class="current-weather-card">
    <h2 class="city-name">{{ cityName }}</h2>
    <div class="weather-content">
      <div class="weather-icon">
        {{ weatherIcons[weather.condition.icon] || '🌤️' }}
      </div>
      <div class="weather-info">
        <div class="temperature">
          {{ weather.temp }}°C
        </div>
        <div class="condition">
          {{ weather.condition.description }}
        </div>
        <div class="details">
          <span class="detail-item">💧 湿度: {{ weather.humidity }}%</span>
          <span class="detail-item">🌬️ 风速: {{ weather.wind_speed }} m/s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.current-weather-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 32px;
  color: white;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  max-width: 500px;
  margin: 0 auto;
}

.city-name {
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 24px 0;
  text-align: center;
}

.weather-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.weather-icon {
  font-size: 80px;
  line-height: 1;
}

.weather-info {
  text-align: left;
}

.temperature {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 8px;
}

.condition {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 16px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  opacity: 0.85;
}

.detail-item {
  display: block;
}
</style>
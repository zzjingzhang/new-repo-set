<script setup lang="ts">
import type { ForecastDay } from '../types';

defineProps<{
  forecast: ForecastDay[];
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
  <div class="forecast-container">
    <h3 class="forecast-title">未来 5 天天气预报</h3>
    <div class="forecast-list">
      <div 
        v-for="(day, index) in forecast" 
        :key="index"
        class="forecast-card"
      >
        <div class="forecast-date">
          <div class="day-week">{{ day.day_of_week }}</div>
          <div class="day-date">{{ day.date }}</div>
        </div>
        <div class="forecast-icon">
          {{ weatherIcons[day.condition.icon] || '🌤️' }}
        </div>
        <div class="forecast-condition">
          {{ day.condition.description }}
        </div>
        <div class="forecast-temp">
          <span class="temp-min">{{ day.temp_min }}°</span>
          <span class="temp-divider">/</span>
          <span class="temp-max">{{ day.temp_max }}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forecast-container {
  max-width: 800px;
  margin: 0 auto;
}

.forecast-title {
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  text-align: center;
  margin-bottom: 20px;
}

.forecast-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
}

.forecast-card {
  background: white;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f3f4f6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.forecast-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.forecast-date {
  margin-bottom: 12px;
}

.day-week {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
}

.day-date {
  font-size: 12px;
  color: #9ca3af;
  margin-top: 4px;
}

.forecast-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.forecast-condition {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
}

.forecast-temp {
  font-size: 14px;
  font-weight: 500;
}

.temp-min {
  color: #60a5fa;
}

.temp-divider {
  color: #d1d5db;
  margin: 0 4px;
}

.temp-max {
  color: #f87171;
}
</style>
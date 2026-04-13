<script setup lang="ts">
import type { ForecastDay } from '../types/weather';
import { getWeatherIcon, getWeatherDescription } from '../data/mockWeather';

interface Props {
  forecast: ForecastDay[];
}

const props = defineProps<Props>();

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const weekday = weekdays[date.getDay()];
  return `${month}月${day}日 ${weekday}`;
};
</script>

<template>
  <div class="forecast-list">
    <h3 class="forecast-title">未来 5 天天气预报</h3>
    <div class="forecast-cards">
      <div 
        v-for="(day, index) in props.forecast" 
        :key="day.date"
        class="forecast-card"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="forecast-date">{{ formatDate(day.date) }}</div>
        <div class="forecast-icon">{{ getWeatherIcon(day.condition) }}</div>
        <div class="forecast-condition">{{ getWeatherDescription(day.condition) }}</div>
        <div class="forecast-temp">
          <span class="temp-high">{{ day.maxTemp }}°</span>
          <span class="temp-divider">/</span>
          <span class="temp-low">{{ day.minTemp }}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.forecast-list {
  width: 100%;
}

.forecast-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 24px 0;
  text-align: center;
}

.forecast-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
}

.forecast-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.forecast-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.forecast-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  font-weight: 500;
}

.forecast-icon {
  font-size: 48px;
  margin-bottom: 8px;
  line-height: 1;
}

.forecast-condition {
  font-size: 14px;
  color: #888;
  margin-bottom: 16px;
}

.forecast-temp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
}

.temp-high {
  color: #e74c3c;
}

.temp-low {
  color: #3498db;
}

.temp-divider {
  color: #ccc;
}

@media (max-width: 768px) {
  .forecast-cards {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }
  
  .forecast-card {
    padding: 16px 12px;
  }
  
  .forecast-icon {
    font-size: 36px;
  }
}
</style>

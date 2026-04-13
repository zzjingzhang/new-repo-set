<template>
  <div v-if="forecast.length > 0" class="forecast-list">
    <h3 class="forecast-title">未来5天天气预报</h3>
    <div class="forecast-cards">
      <div v-for="day in forecast" :key="day.date" class="forecast-card">
        <div class="forecast-date">{{ formatDate(day.date) }}</div>
        <div class="forecast-icon">{{ day.condition.icon }}</div>
        <div class="forecast-condition">{{ day.condition.description }}</div>
        <div class="forecast-temp">
          <span class="temp-max">{{ day.tempMax }}°</span>
          <span class="temp-divider">/</span>
          <span class="temp-min">{{ day.tempMin }}°</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ForecastDay } from '../types'

defineProps<{
  forecast: ForecastDay[]
}>()

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${month}月${day}日`
}
</script>

<style scoped>
.forecast-list {
  margin-top: 24px;
}

.forecast-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.forecast-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
}

.forecast-card {
  background: white;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.3s, box-shadow 0.3s;
}

.forecast-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.forecast-date {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  font-weight: 500;
}

.forecast-icon {
  font-size: 40px;
  margin-bottom: 8px;
}

.forecast-condition {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
}

.forecast-temp {
  font-size: 16px;
  font-weight: 600;
}

.temp-max {
  color: #ff6b6b;
}

.temp-divider {
  color: #ccc;
  margin: 0 4px;
}

.temp-min {
  color: #4dabf7;
}
</style>

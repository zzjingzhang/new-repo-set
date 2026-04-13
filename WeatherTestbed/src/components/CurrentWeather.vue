<template>
  <div v-if="weather" class="current-weather">
    <div class="weather-header">
      <h2 class="city-name">{{ weather.city }} ({{ weather.cityEn }})</h2>
    </div>
    <div class="weather-content">
      <div class="weather-icon">{{ weather.condition.icon }}</div>
      <div class="weather-info">
        <div class="temperature">{{ weather.temp }}°C</div>
        <div class="condition">{{ weather.condition.description }}</div>
        <div class="condition-main">{{ weather.condition.main }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrentWeather } from '../types'

defineProps<{
  weather: CurrentWeather | null
}>()
</script>

<style scoped>
.current-weather {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  color: white;
}

.weather-header {
  margin-bottom: 20px;
}

.city-name {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
}

.weather-content {
  display: flex;
  align-items: center;
  gap: 24px;
}

.weather-icon {
  font-size: 80px;
  line-height: 1;
}

.weather-info {
  flex: 1;
}

.temperature {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 8px;
}

.condition {
  font-size: 20px;
  margin-bottom: 4px;
}

.condition-main {
  font-size: 16px;
  opacity: 0.8;
}
</style>

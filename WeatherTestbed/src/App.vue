<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import ForecastList from "./components/ForecastList.vue";
import { searchWeather } from "./data/mockWeather";
import type { CityWeather } from "./types";

const weatherData = ref<CityWeather | null>(null);
const notFound = ref(false);
const hasSearched = ref(false);

const handleSearch = (cityName: string) => {
  const trimmedName = cityName.trim();

  if (!trimmedName) {
    weatherData.value = null;
    notFound.value = false;
    hasSearched.value = false;
    return;
  }

  hasSearched.value = true;
  const result = searchWeather(trimmedName);

  if (result) {
    weatherData.value = result;
    notFound.value = false;
  } else {
    weatherData.value = null;
    notFound.value = true;
  }
};
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>🌤️ 天气预报</h1>
      <p class="subtitle">WeatherTestbed - 查询城市天气信息</p>
    </header>

    <main class="main-content">
      <SearchBar @search="handleSearch" />

      <div class="result-section">
        <div v-if="notFound" class="error-message">
          <span class="error-icon">🔍</span>
          <p>City not found - 未找到该城市</p>
          <p class="error-hint">
            请尝试：北京 / 上海 / 天津 或 Beijing / Shanghai / Tianjin
          </p>
        </div>

        <template v-else-if="weatherData">
          <CurrentWeather
            :city-name="weatherData.name"
            :weather="weatherData.current"
          />
          <div class="forecast-section">
            <ForecastList :forecast="weatherData.forecast" />
          </div>
        </template>

        <div v-else-if="!hasSearched" class="welcome-message">
          <span class="welcome-icon">📍</span>
          <p>请在上方输入框输入城市名称开始查询</p>
          <p class="welcome-hint">
            支持：北京 / 上海 / 天津 或 Beijing / Shanghai / Tianjin
          </p>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>WeatherTestbed - Vite + Vue 3 + TypeScript</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%);
}

.header {
  text-align: center;
  padding: 40px 20px 20px;
}

.header h1 {
  font-size: 36px;
  font-weight: 700;
  color: #1e40af;
  margin: 0 0 8px 0;
}

.subtitle {
  font-size: 16px;
  color: #64748b;
  margin: 0;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
}

.result-section {
  margin-top: 40px;
}

.error-message,
.welcome-message {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  max-width: 500px;
  margin: 0 auto;
}

.error-icon,
.welcome-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 16px;
}

.error-message p {
  font-size: 18px;
  color: #dc2626;
  margin: 0 0 12px 0;
}

.welcome-message p {
  font-size: 18px;
  color: #4b5563;
  margin: 0 0 12px 0;
}

.error-hint,
.welcome-hint {
  font-size: 14px !important;
  color: #9ca3af !important;
  margin: 0 !important;
}

.forecast-section {
  margin-top: 32px;
}

.footer {
  text-align: center;
  padding: 24px;
  color: #64748b;
  font-size: 14px;
}

.footer p {
  margin: 0;
}
</style>

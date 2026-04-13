<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import ForecastList from "./components/ForecastList.vue";
import { searchCity, mockCities } from "./data/mockWeather";
import type { WeatherData } from "./types/weather";

const currentWeather = ref<WeatherData | null>(null);
const errorMessage = ref<string>("");
const hasSearched = ref<boolean>(false);

const availableCities = mockCities
  .map((city) => `${city.name} (${city.nameEn})`)
  .join("、");

const handleSearch = (query: string): void => {
  hasSearched.value = true;
  errorMessage.value = "";

  if (!query.trim()) {
    currentWeather.value = null;
    hasSearched.value = false;
    return;
  }

  const cityData = searchCity(query);

  if (cityData) {
    currentWeather.value = cityData.data;
  } else {
    currentWeather.value = null;
    errorMessage.value = `未找到城市 "${query}"，请尝试搜索：${availableCities}`;
  }
};
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">🌤️ 天气预报</h1>
      <p class="app-subtitle">查询全球城市天气信息</p>
    </header>

    <main class="app-main">
      <SearchBar @search="handleSearch" />

      <div v-if="errorMessage" class="error-message">
        <span class="error-icon">⚠️</span>
        {{ errorMessage }}
      </div>

      <div v-if="currentWeather" class="weather-content">
        <CurrentWeather :weather="currentWeather.current" />
        <ForecastList :forecast="currentWeather.forecast" />
      </div>

      <div v-else-if="!hasSearched" class="welcome-message">
        <div class="welcome-icon">🌍</div>
        <h2>欢迎使用天气预报</h2>
        <p>输入城市名称开始查询天气</p>
        <div class="available-cities">
          <p class="cities-title">支持的城市：</p>
          <p class="cities-list">{{ availableCities }}</p>
        </div>
      </div>
    </main>

    <footer class="app-footer">
      <p>Weather Testbed &copy; 2024 | Built with Vue 3 + TypeScript + Vite</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  text-align: center;
  padding: 40px 20px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.app-title {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.app-subtitle {
  font-size: 16px;
  color: #666;
}

.app-main {
  flex: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 24px;
  padding: 16px 24px;
  background-color: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 12px;
  color: #856404;
  font-size: 14px;
  text-align: center;
}

.error-icon {
  font-size: 20px;
}

.weather-content {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.welcome-message {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.welcome-icon {
  font-size: 80px;
  margin-bottom: 20px;
}

.welcome-message h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 12px;
}

.welcome-message p {
  font-size: 16px;
  margin-bottom: 24px;
}

.available-cities {
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  display: inline-block;
}

.cities-title {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px !important;
}

.cities-list {
  color: #666;
  font-size: 14px !important;
}

.app-footer {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  color: #666;
  font-size: 14px;
}

@media (max-width: 768px) {
  .app-title {
    font-size: 28px;
  }

  .app-main {
    padding: 24px 16px;
  }

  .weather-content {
    margin-top: 24px;
    gap: 24px;
  }
}
</style>

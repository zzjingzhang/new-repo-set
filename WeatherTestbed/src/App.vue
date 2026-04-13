<template>
  <div class="app">
    <header class="header">
      <h1 class="title">天气预报</h1>
    </header>
    <main class="main">
      <SearchBar @search="handleSearch" />

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <CurrentWeatherCard :weather="currentWeather" />
      <ForecastList :forecast="forecast" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchBar from "./components/SearchBar.vue";
import CurrentWeatherCard from "./components/CurrentWeather.vue";
import ForecastList from "./components/ForecastList.vue";
import { searchCity, getWeatherData } from "./data/mockData";
import type { CurrentWeather, ForecastDay } from "./types";

const currentWeather = ref<CurrentWeather | null>(null);
const forecast = ref<ForecastDay[]>([]);
const error = ref<string>("");

const handleSearch = (query: string) => {
  error.value = "";

  if (!query) {
    currentWeather.value = null;
    forecast.value = [];
    return;
  }

  const cityKey = searchCity(query);

  if (cityKey) {
    const data = getWeatherData(cityKey);
    if (data) {
      currentWeather.value = data.current;
      forecast.value = data.forecast;
    }
  } else {
    error.value = "City not found - 未找到该城市";
    currentWeather.value = null;
    forecast.value = [];
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #333;
}

.main {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.error-message {
  background: #fee;
  color: #c00;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  text-align: center;
  border: 1px solid #fcc;
}
</style>

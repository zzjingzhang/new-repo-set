<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: "search", cityName: string): void;
}>();

const searchValue = ref("");

const handleSearch = () => {
  emit("search", searchValue.value);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleSearch();
  }
};
</script>

<template>
  <div class="search-container">
    <input
      v-model="searchValue"
      type="text"
      :placeholder="placeholder || '输入城市名称，如：北京 / Beijing'"
      class="search-input"
      @keydown="handleKeyDown"
    />
    <button class="search-button" @click="handleSearch">搜索</button>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #3b82f6;
}

.search-button {
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #2563eb;
}
</style>

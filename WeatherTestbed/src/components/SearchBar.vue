<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="输入城市名称（如：北京、Beijing）"
      @keyup.enter="handleSearch"
      class="search-input"
    />
    <button @click="handleSearch" class="search-button">搜索</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchQuery = ref("");

const emit = defineEmits<{
  search: [query: string];
}>();

const handleSearch = () => {
  emit("search", searchQuery.value.trim());
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
}

.search-input {
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  width: 300px;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #4a90d9;
}

.search-button {
  padding: 12px 24px;
  font-size: 16px;
  background: #4a90d9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-button:hover {
  background: #357abd;
}
</style>

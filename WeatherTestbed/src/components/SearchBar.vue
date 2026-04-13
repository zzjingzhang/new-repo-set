<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  search: [query: string];
}>();

const searchQuery = ref<string>('');

const handleSearch = (): void => {
  emit('search', searchQuery.value.trim());
};

const handleKeyDown = (event: KeyboardEvent): void => {
  if (event.key === 'Enter') {
    handleSearch();
  }
};
</script>

<template>
  <div class="search-bar">
    <div class="search-input-wrapper">
      <input
        v-model="searchQuery"
        type="text"
        class="search-input"
        placeholder="请输入城市名称（如：北京、Beijing）"
        @keydown="handleKeyDown"
      />
      <button class="search-button" @click="handleSearch">
        <span class="search-icon">🔍</span>
        搜索
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-input {
  flex: 1;
  padding: 14px 20px;
  font-size: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #ffffff;
}

.search-input:focus {
  border-color: #4a90d9;
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.1);
}

.search-input::placeholder {
  color: #999;
}

.search-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(135deg, #4a90d9 0%, #357abd 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(74, 144, 217, 0.3);
}

.search-button:hover {
  background: linear-gradient(135deg, #357abd 0%, #2a6299 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(74, 144, 217, 0.4);
}

.search-button:active {
  transform: translateY(0);
}

.search-icon {
  font-size: 18px;
}

@media (max-width: 640px) {
  .search-input-wrapper {
    flex-direction: column;
  }
  
  .search-button {
    width: 100%;
    justify-content: center;
  }
}
</style>

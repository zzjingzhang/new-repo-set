# WeatherTestbed 天气预报应用

一个基于 Vite + Vue 3 + TypeScript 构建的天气预报前端应用。

## ✨ 功能特性

- 🔍 **城市搜索**: 支持中英文城市名称模糊搜索，支持点击按钮或回车触发查询
- ☀️ **当前天气展示**: 显示城市名称、温度、天气状况、对应天气图标，以及湿度、风速等详细信息
- 📅 **5 天天气预报**: 以卡片形式展示未来 5 天天气，包含日期、天气状况、温度范围
- 🎯 **模拟数据**: 内置北京、上海、天津三个城市的完整天气数据
- ❌ **友好提示**: 城市不存在时显示清晰的错误提示

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Vite | 5.x | 构建工具 |
| Vue | 3.x (Composition API) | 前端框架 |
| TypeScript | 5.x | 类型安全 |
| vue-tsc | 2.x | Vue 类型检查 |

## 📁 项目结构

```
WeatherTestbed/
├── src/
│   ├── components/
│   │   ├── SearchBar.vue      # 搜索框组件
│   │   ├── CurrentWeather.vue # 当前天气组件
│   │   └── ForecastList.vue   # 未来天气列表组件
│   ├── data/
│   │   └── mockWeather.ts     # Mock 天气数据
│   ├── types/
│   │   └── index.ts           # TypeScript 类型定义
│   ├── App.vue                # 根组件
│   ├── main.ts                # 应用入口
│   ├── style.css              # 全局样式
│   └── vite-env.d.ts          # Vite 环境类型
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- npm 或 yarn 或 pnpm

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 💡 使用说明

1. 在搜索框中输入城市名称（支持中英文）
   - 中文：北京、上海、天津
   - 英文：Beijing、Shanghai、Tianjin
2. 点击「搜索」按钮或按回车键触发查询
3. 查看当前天气和未来 5 天天气预报

## 🔧 组件说明

### SearchBar
- 接收 `placeholder` 可选属性自定义占位文本
- 触发 `search` 事件传递搜索关键词

### CurrentWeather
- 接收 `cityName`: 城市名称
- 接收 `weather`: 当前天气数据对象
- 展示温度、天气状况、湿度、风速等信息

### ForecastList
- 接收 `forecast`: 未来 5 天天气数组
- 响应式卡片布局展示每日天气

## 📝 开发规范

- 使用 Composition API (`<script setup>` 语法)
- 所有数据定义完整 TypeScript 类型，禁止使用 `any`
- 组件间通过 props / emits 通信
- CSS 使用 scoped 样式避免污染

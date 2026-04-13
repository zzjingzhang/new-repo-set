# Weather Testbed - 天气预报应用

一个基于 Vue 3 + TypeScript + Vite 构建的天气预报前端应用。

## 项目结构

```
WeatherTestbed/
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # TypeScript Node 配置
├── vite.config.ts          # Vite 构建配置
├── README.md               # 项目说明文档
└── src/
    ├── main.ts             # 应用入口文件
    ├── App.vue             # 根组件
    ├── vite-env.d.ts       # Vite 类型声明
    ├── components/         # 组件目录
    │   ├── SearchBar.vue   # 搜索栏组件
    │   ├── CurrentWeather.vue  # 当前天气组件
    │   └── ForecastList.vue    # 天气预报列表组件
    ├── data/               # 数据目录
    │   └── mockWeather.ts  # 天气模拟数据
    ├── types/              # 类型定义目录
    │   └── weather.ts      # 天气相关类型定义
    └── assets/             # 静态资源目录
```

## 技术栈

- **构建工具**: [Vite](https://vitejs.dev/) - 下一代前端构建工具，提供极速的开发体验
- **前端框架**: [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- **开发语言**: [TypeScript](https://www.typescriptlang.org/) - 带有类型系统的 JavaScript 超集
- **API 风格**: Composition API - Vue 3 推荐的组合式 API
- **组件语法**: `<script setup>` - 更简洁的组件编写方式

## 核心功能

### 1. 城市搜索
- 支持中文和英文城市名称输入
- 支持模糊搜索
- 支持点击按钮或按回车键触发查询
- 支持城市：北京(Beijing)、上海(Shanghai)、天津(Tianjin)、广州(Guangzhou)、深圳(Shenzhen)、成都(Chengdu)

### 2. 当前天气展示
- 城市名称
- 当前温度（°C）
- 天气状况（中文/英文）
- 天气图标（emoji 表情）
- 湿度信息
- 风速信息

### 3. 未来 5 天天气预报
- 以卡片形式展示
- 每天包含：日期、星期、天气状况、温度范围（最低/最高）

### 4. 模拟数据
- 内置 6 个城市的模拟天气数据
- 无需调用真实 API
- 城市不存在时显示友好提示

## 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
cd WeatherTestbed
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 http://localhost:3000 启动

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 组件说明

### SearchBar.vue
搜索栏组件，负责接收用户输入的城市名称。

**Props**: 无

**Emits**:
- `search(query: string)`: 当用户点击搜索按钮或按回车键时触发

### CurrentWeather.vue
当前天气展示组件，显示选中城市的实时天气信息。

**Props**:
- `weather: CurrentWeather` - 当前天气数据对象

**Emits**: 无

### ForecastList.vue
未来天气预报列表组件，展示未来 5 天的天气预报。

**Props**:
- `forecast: ForecastDay[]` - 天气预报数组

**Emits**: 无

## 类型定义

### WeatherCondition
天气状况类型：`'Sunny' | 'Cloudy' | 'Rainy' | 'Snowy' | 'Windy' | 'Foggy' | 'Partly Cloudy' | 'Thunderstorm'`

### CurrentWeather
```typescript
interface CurrentWeather {
  cityName: string;      // 城市名称
  temperature: number;   // 当前温度
  condition: WeatherCondition;  // 天气状况
  humidity: number;      // 湿度百分比
  windSpeed: number;     // 风速 km/h
}
```

### ForecastDay
```typescript
interface ForecastDay {
  date: string;          // 日期 (YYYY-MM-DD)
  condition: WeatherCondition;  // 天气状况
  minTemp: number;       // 最低温度
  maxTemp: number;       // 最高温度
}
```

## 浏览器支持

- Chrome >= 80
- Firefox >= 75
- Safari >= 13
- Edge >= 80

## 许可证

MIT License

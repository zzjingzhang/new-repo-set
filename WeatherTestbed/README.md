# WeatherTestbed - 天气预报应用

一个基于 Vue 3 + TypeScript + Vite 构建的天气预报前端应用。

## 项目结构

```
WeatherTestbed/
├── src/
│   ├── components/
│   │   ├── SearchBar.vue        # 搜索框组件
│   │   ├── CurrentWeather.vue   # 当前天气组件
│   │   └── ForecastList.vue     # 未来天气组件
│   ├── data/
│   │   └── mockData.ts          # Mock 数据
│   ├── types/
│   │   └── index.ts             # TypeScript 类型定义
│   ├── App.vue                  # 根组件
│   ├── main.ts                  # 入口文件
│   └── vite-env.d.ts            # Vite 环境类型声明
├── index.html                   # HTML 入口
├── package.json                 # 项目配置
├── tsconfig.json                # TypeScript 配置
├── tsconfig.node.json           # Node TypeScript 配置
└── vite.config.ts               # Vite 配置
```

## 技术栈

- **构建工具**: Vite 5.x
- **框架**: Vue 3 (Composition API + `<script setup>`)
- **语言**: TypeScript
- **样式**: CSS (Scoped)

## 功能特性

1. **城市搜索**
   - 支持中文和英文城市名称搜索
   - 支持模糊匹配
   - 支持回车或点击按钮触发搜索

2. **当前天气展示**
   - 显示城市名称（中英文）
   - 显示当前温度
   - 显示天气状况和图标

3. **未来5天天气预报**
   - 卡片式布局展示
   - 显示日期、天气状况、温度范围

4. **Mock 数据**
   - 内置北京、上海、天津三个城市的天气数据
   - 友好的错误提示

## 启动项目

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后访问 http://localhost:5173/

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用说明

1. 在搜索框中输入城市名称（如：北京、Beijing、上海、Shanghai）
2. 点击"搜索"按钮或按回车键
3. 查看当前天气和未来5天天气预报
4. 如果输入的城市不存在，会显示"City not found"提示

## 支持的城市

- 北京 (Beijing)
- 上海 (Shanghai)
- 天津 (Tianjin)

## 代码规范

- 使用 TypeScript 严格模式
- 所有数据都有明确的类型定义
- 使用 Composition API 和 `<script setup>` 语法
- 组件间通过 props/emits 通信
- 禁止使用 `any` 类型

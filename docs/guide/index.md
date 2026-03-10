# 介绍

Nexa UI 是一个基于 Vue 3 和 TypeScript 构建的现代化组件库，采用原子化设计原则，提供轻量、灵活且美观的 UI 组件。

## 特性

- 🎨 **现代化设计** - 采用蓝紫色渐变主题，符合现代审美
- ⚡ **原子化 CSS** - 基于 UnoCSS 实现，极致轻量
- 📦 **按需引入** - 支持 Tree Shaking，只打包使用的组件
- 🔧 **TypeScript 支持** - 完整的类型定义，提供优秀的开发体验
- 🎯 **Vue 3 优先** - 专为 Vue 3 设计，充分利用 Composition API
- 🌙 **暗色模式** - 内置支持暗色模式（开发中）

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript 超集
- **UnoCSS** - 原子化 CSS 引擎
- **Vite** - 下一代前端构建工具
- **Vitest** - 快速的单元测试框架

## 快速开始

```bash
npm install nexa-ui
```

```typescript
import { createApp } from 'vue'
import NexaUI from 'nexa-ui'
import 'nexa-ui/style.css'

const app = createApp(App)
app.use(NexaUI)
app.mount('#app')
```

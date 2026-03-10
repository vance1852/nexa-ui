<div align="center">
  <h1>Nexa UI</h1>
  <p>Modern Vue 3 component library with atomic design principles</p>
  
  <p>
    <a href="https://www.npmjs.com/package/nexa-ui">
      <img src="https://img.shields.io/npm/v/nexa-ui.svg" alt="npm version" />
    </a>
    <a href="https://github.com/your-org/nexa-ui/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/nexa-ui.svg" alt="license" />
    </a>
    <a href="https://www.npmjs.com/package/nexa-ui">
      <img src="https://img.shields.io/npm/dm/nexa-ui.svg" alt="npm downloads" />
    </a>
  </p>
</div>

## 📖 介绍

Nexa UI 是一个基于 Vue 3 + TypeScript + UnoCSS 构建的现代化组件库。采用原子化设计理念，提供轻量、高性能的 UI 组件，帮助开发者快速构建美观、一致的用户界面。

### ✨ 特性

- 🚀 **Vue 3 Composition API**: 完全使用 Vue 3 组合式 API 开发
- 🎨 **UnoCSS 原子化 CSS**: 极致的开发体验和构建性能
- 📦 **Tree Shaking 支持**: 按需引入，只打包你需要的组件
- 🔑 **TypeScript 原生支持**: 完整的类型定义，开发体验更佳
- ✅ **完善的测试覆盖**: 使用 Vitest 进行单元测试
- 🎯 **无障碍支持**: 遵循 WAI-ARIA 规范，提供良好的可访问性
- 🌙 **暗色模式支持**: 内置暗色模式，轻松切换主题

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | ~3.4.38 | 前端框架 |
| TypeScript | ~5.3.3 | 类型安全 |
| UnoCSS | ^0.62.4 | 原子化 CSS |
| Vite | ^5.4.0 | 构建工具 |
| Vitest | ^2.1.9 | 单元测试 |
| VitePress | ^1.6.4 | 文档生成 |

## 🎨 设计规范

Nexa UI 遵循一套统一的设计规范，确保组件在视觉和交互上的一致性：

### 色彩系统

- **主色调**: 蓝色系 (#3b82f6) - 传达专业、信任
- **语义色**: 成功(#10b981)、警告(#f59e0b)、错误(#ef4444)、信息(#3b82f6)
- **中性色**: 从 #f9fafb 到 #111827 的灰度阶梯

### 间距系统

采用 4px 基数的间距系统：`xs(4px)`、`sm(8px)`、`md(16px)`、`lg(24px)`、`xl(32px)`

### 圆角系统

`sm(4px)`、`md(8px)`、`lg(12px)`、`xl(16px)`、`full(9999px)`

### 动画系统

- 过渡时长: 150ms
- 缓动函数: cubic-bezier(0.4, 0, 0.2, 1)

## 📦 组件清单

### 基础组件

| 组件名 | 描述 | 状态 |
|--------|------|------|
| **NButton** | 按钮组件 | ✅ 完成 |
| **NInput** | 输入框组件 | ✅ 完成 |
| **NAvatar** | 头像组件 | ✅ 完成 |
| **NBadge** | 徽章组件 | ✅ 完成 |

### 布局组件

| 组件名 | 描述 | 状态 |
|--------|------|------|
| **NCard** | 卡片组件 | ✅ 完成 |
| **NSkeleton** | 骨架屏组件 | ✅ 完成 |

### 导航组件

| 组件名 | 描述 | 状态 |
|--------|------|------|
| **NBreadcrumb** | 面包屑组件 | ✅ 完成 |
| **NTabs** | 标签页组件 | ✅ 完成 |

### 数据展示

| 组件名 | 描述 | 状态 |
|--------|------|------|
| **NTable** | 表格组件 | ✅ 完成 |

### 反馈组件

| 组件名 | 描述 | 状态 |
|--------|------|------|
| **NModal** | 模态框组件 | ✅ 完成 |
| **NToast** | 消息提示组件 | ✅ 完成 |

## 📜 常用脚本命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 构建组件库
npm run build:lib

# 预览构建结果
npm run preview

# 运行单元测试
npm run test

# 运行测试并打开 UI 界面
npm run test:ui

# 运行测试并生成覆盖率报告
npm run test:coverage

# 启动文档开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览文档构建结果
npm run docs:preview
```

## 🚀 快速开始

### 安装

```bash
npm install nexa-ui
```

### 使用

```typescript
import { createApp } from 'vue'
import NexaUI from 'nexa-ui'
import 'nexa-ui/style.css'
import App from './App.vue'

createApp(App)
  .use(NexaUI)
  .mount('#app')
```

### 按需引入

```typescript
import { NButton, NInput } from 'nexa-ui'
import 'nexa-ui/style.css'
```

## 📚 文档

完整文档请访问: [Nexa UI 文档](https://your-org.github.io/nexa-ui)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License © 2024-present Nexa UI

---

<div align="center">
  <sub>Built with ❤️ by the Nexa UI team</sub>
</div>

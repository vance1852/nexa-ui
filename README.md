# Nexa UI

Modern Vue 3 component library with atomic design principles.

[![npm version](https://img.shields.io/npm/v/nexa-ui.svg)](https://www.npmjs.com/package/nexa-ui)
[![license](https://img.shields.io/npm/l/nexa-ui.svg)](https://github.com/your-org/nexa-ui/blob/main/LICENSE)

## 🌟 特性

- 🎨 **现代化设计** - 采用蓝紫色渐变主题，符合现代审美
- ⚡ **原子化 CSS** - 基于 UnoCSS 实现，极致轻量
- 📦 **按需引入** - 支持 Tree Shaking，只打包使用的组件
- 🔧 **TypeScript 支持** - 完整的类型定义，提供优秀的开发体验
- 🎯 **Vue 3 优先** - 专为 Vue 3 设计，充分利用 Composition API
- 🌙 **暗色模式** - 内置支持暗色模式（开发中）

## 📦 安装

```bash
npm install nexa-ui
```

## 🚀 快速开始

### 全量引入

```typescript
import { createApp } from 'vue'
import NexaUI from 'nexa-ui'
import 'nexa-ui/style.css'

const app = createApp(App)
app.use(NexaUI)
app.mount('#app')
```

### 按需引入

```typescript
import { NButton, NInput } from 'nexa-ui'
import 'nexa-ui/style.css'

const app = createApp(App)
app.component('NButton', NButton)
app.component('NInput', NInput)
app.mount('#app')
```

### 使用组件

```vue
<template>
  <n-button variant="solid" size="md">点击我</n-button>
  <n-input v-model="value" placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## 🛠️ 技术栈

| 技术 | 说明 | 版本 |
|------|------|------|
| Vue 3 | 渐进式 JavaScript 框架 | ~3.4.38 |
| TypeScript | 类型安全的 JavaScript 超集 | ~5.3.3 |
| UnoCSS | 原子化 CSS 引擎 | ^0.62.4 |
| Vite | 下一代前端构建工具 | ^5.4.0 |
| Vitest | 快速的单元测试框架 | ^2.1.9 |
| VitePress | 静态站点生成器 | ^1.6.4 |

## 🎨 设计规范

### 色彩系统

- **主色调**：蓝紫色渐变 (#8b5cf6 → #7c3aed)
- **中性色**：从纯白到深灰的完整色阶
- **语义色**：成功(绿)、警告(橙)、错误(红)、信息(蓝)

### 排版

- **字体**：Inter 无衬线字体
- **字号**：从 xs (0.75rem) 到 2xl (1.5rem)
- **字重**：常规(400)、中等(500)、半粗(600)、粗体(700)

### 间距

- 基础单位：4px
- 常用间距：1 (4px)、2 (8px)、3 (12px)、4 (16px)、6 (24px)、8 (32px)

### 圆角

- sm: 0.25rem、md: 0.375rem、lg: 0.5rem、xl: 0.75rem、full: 9999px

## 📚 组件清单

### 基础组件

| 组件名 | 说明 | 状态 |
|--------|------|------|
| NButton | 按钮组件 | ✅ |
| NInput | 输入框组件 | ✅ |
| NCard | 卡片组件 | ✅ |
| NAvatar | 头像组件 | ✅ |
| NBadge | 徽章组件 | ✅ |
| NSkeleton | 骨架屏组件 | ✅ |

### 导航组件

| 组件名 | 说明 | 状态 |
|--------|------|------|
| NBreadcrumb | 面包屑组件 | ✅ |
| NTabs | 标签页组件 | ✅ |

### 数据展示

| 组件名 | 说明 | 状态 |
|--------|------|------|
| NTable | 表格组件 | ✅ |

### 反馈组件

| 组件名 | 说明 | 状态 |
|--------|------|------|
| NModal | 模态框组件 | ✅ |
| NToast | 提示组件 | ✅ |

## 📜 常用脚本

```bash
# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 构建应用
npm run build

# 预览构建结果
npm run preview

# 运行测试
npm run test

# 运行测试（UI模式）
npm run test:ui

# 运行测试（覆盖率）
npm run test:coverage

# 启动文档服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览文档
npm run docs:preview
```

## 📁 项目结构

```
nexa-ui/
├── src/
│   ├── components/      # 组件目录
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Card/
│   │   └── ...
│   ├── composables/     # 组合式函数
│   ├── styles/          # 样式文件
│   ├── types/           # 类型定义
│   ├── utils/           # 工具函数
│   └── index.ts         # 入口文件
├── docs/                # 文档目录
│   ├── .vitepress/
│   ├── guide/
│   └── components/
├── dist/                # 构建输出
├── package.json
├── tsconfig.json
├── vite.config.ts
├── uno.config.ts
└── vitest.config.ts
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

MIT © [Nexa UI](https://github.com/your-org/nexa-ui)

## 👥 团队

- **作者** - [Your Name](https://github.com/yourname)
- **维护者** - [Your Name](https://github.com/yourname)
- **贡献者** - [贡献者列表](https://github.com/your-org/nexa-ui/contributors)

## 🙋‍♂️ 支持

如果您有任何问题或建议，请通过以下方式联系我们：

- 提交 [Issue](https://github.com/your-org/nexa-ui/issues)
- 发送邮件至 [your-email@example.com]
- 加入我们的 Discord 社区

---

<p align="center">Made with ❤️ by Nexa UI Team</p>

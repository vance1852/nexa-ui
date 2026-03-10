# 快速开始

本章节将帮助你快速上手 Nexa UI 组件库。

## 创建 Vue 项目

首先，确保你已经创建了一个 Vue 3 项目。如果还没有，可以使用以下命令创建：

```bash
npm create vite@latest my-app -- --template vue-ts
cd my-app
```

## 安装 Nexa UI

```bash
npm install nexa-ui
```

## 配置项目

在 `main.ts` 中引入 Nexa UI：

```typescript
import { createApp } from 'vue'
import NexaUI from 'nexa-ui'
import 'nexa-ui/style.css'
import App from './App.vue'

createApp(App)
  .use(NexaUI)
  .mount('#app')
```

## 使用组件

现在你可以在项目中使用任何 Nexa UI 组件了：

```vue
<template>
  <div class="app">
    <n-button variant="solid" @click="handleClick">
      点击我
    </n-button>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 下一步

- 查看 [组件文档](/components/button) 了解每个组件的详细用法
- 了解 [设计规范](/guide/design) 以保持设计一致性
- 学习如何 [自定义主题](/guide/customization)


# 快速开始

## 安装

```bash
npm install nexa-ui
```

## 引入组件

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

## 使用组件

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

## 开发环境

```bash
# 启动开发服务器
npm run dev

# 构建组件库
npm run build:lib

# 运行测试
npm run test

# 启动文档服务器
npm run docs:dev
```

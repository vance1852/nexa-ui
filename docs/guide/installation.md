# 安装

## 环境要求

- Node.js >= 18.0.0
- Vue >= 3.4.0

## 使用包管理器安装

```bash
# npm
npm install nexa-ui

# yarn
yarn add nexa-ui

# pnpm
pnpm add nexa-ui
```

## 引入样式

在项目入口文件中引入样式文件：

```typescript
import 'nexa-ui/style.css'
```

## 完整引入

```typescript
import { createApp } from 'vue'
import NexaUI from 'nexa-ui'
import 'nexa-ui/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(NexaUI)
app.mount('#app')
```

## 按需引入

```typescript
import { NButton, NInput } from 'nexa-ui'
import 'nexa-ui/style.css'

// 在组件中使用
export default {
  components: {
    NButton,
    NInput
  }
}
```

## Vite 配置

在 `vite.config.ts` 中添加 UnoCSS 配置（如果需要自定义主题）：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ]
})
```


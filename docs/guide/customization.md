# 自定义主题

Nexa UI 基于 UnoCSS 构建，支持深度主题定制。

## 自定义 CSS 变量

你可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  /* 主色调 */
  --n-primary-50: #eff6ff;
  --n-primary-100: #dbeafe;
  --n-primary-200: #bfdbfe;
  --n-primary-300: #93c5fd;
  --n-primary-400: #60a5fa;
  --n-primary-500: #3b82f6;
  --n-primary-600: #2563eb;
  --n-primary-700: #1d4ed8;
  --n-primary-800: #1e40af;
  --n-primary-900: #1e3a8a;

  /* 成功色 */
  --n-success-500: #10b981;
  --n-success-600: #059669;

  /* 警告色 */
  --n-warning-500: #f59e0b;
  --n-warning-600: #d97706;

  /* 错误色 */
  --n-error-500: #ef4444;
  --n-error-600: #dc2626;

  /* 信息色 */
  --n-info-500: #3b82f6;
  --n-info-600: #2563eb;
}
```

## UnoCSS 配置

在 `uno.config.ts` 中自定义主题：

```typescript
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      theme: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          }
        }
      }
    })
  ]
})
```

## 暗色模式

Nexa UI 内置支持暗色模式，只需在 `html` 标签上添加 `class="dark"` 即可：

```html
<html class="dark">
  <!-- 你的应用 -->
</html>
```

或者使用 VueUse 的 `useDark` 组合式函数：

```typescript
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

## 组件级别定制

每个组件都支持通过 `class` 和 `style` 属性进行自定义：

```vue
<template>
  <n-button 
    class="bg-purple-600 hover:bg-purple-700"
  >
    自定义颜色按钮
  </n-button>
</template>
```

## 主题切换示例

```vue
<template>
  <div>
    <n-button @click="toggleTheme">
      {{ isDark ? '切换亮色' : '切换暗色' }}
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>
```


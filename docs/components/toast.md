# Toast 消息提示

轻量级的信息反馈组件，在顶部居中显示，并自动消失。

## 基础用法

::: demo 基础消息提示
```vue
<template>
  <div class="flex gap-2">
    <n-button @click="showToast('success')">成功提示</n-button>
    <n-button @click="showToast('error')">错误提示</n-button>
    <n-button @click="showToast('warning')">警告提示</n-button>
    <n-button @click="showToast('info')">信息提示</n-button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showToast = (type) => {
  toast[type](`这是一条${type}消息`)
}
</script>
```
:::

## 自定义时长

::: demo 自定义显示时长
```vue
<template>
  <n-button @click="showLongToast">显示5秒</n-button>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showLongToast = () => {
  toast.info('这条消息会显示5秒', { duration: 5000 })
}
</script>
```
:::

## API

### useToast 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| success | 成功提示 | `message: string, options?: ToastOptions` |
| error | 错误提示 | `message: string, options?: ToastOptions` |
| warning | 警告提示 | `message: string, options?: ToastOptions` |
| info | 信息提示 | `message: string, options?: ToastOptions` |

### ToastOptions

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| duration | 显示时长(ms) | `number` | `3000` |
| closable | 是否可关闭 | `boolean` | `true` |

## 使用场景

- **操作反馈**: 表单提交成功/失败提示
- **通知提醒**: 系统通知、消息提醒
- **状态反馈**: 操作结果的即时反馈
- **轻量提示**: 不需要用户确认的提示信息


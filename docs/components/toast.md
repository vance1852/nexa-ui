# Toast 提示

Toast 用于显示简短的消息提示，通常会在一段时间后自动消失。

## 基础用法

:::demo
```vue
<template>
  <n-button @click="showToast">显示提示</n-button>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showToast = () => {
  toast.show('这是一条提示消息')
}
</script>
```
:::

## 不同类型

:::demo
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <n-button @click="showSuccess">成功提示</n-button>
    <n-button @click="showWarning">警告提示</n-button>
    <n-button @click="showError">错误提示</n-button>
    <n-button @click="showInfo">信息提示</n-button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showSuccess = () => {
  toast.success('操作成功！')
}

const showWarning = () => {
  toast.warning('请注意！')
}

const showError = () => {
  toast.error('操作失败！')
}

const showInfo = () => {
  toast.info('这是一条信息')
}
</script>
```
:::

## 不同位置

:::demo
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <n-button @click="showAt('top-left')">左上</n-button>
    <n-button @click="showAt('top-right')">右上</n-button>
    <n-button @click="showAt('bottom-left')">左下</n-button>
    <n-button @click="showAt('bottom-right')">右下</n-button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showAt = (position: string) => {
  toast.show({
    message: `显示在 ${position}`,
    position: position as any
  })
}
</script>
```
:::

## 自定义时长

:::demo
```vue
<template>
  <n-button @click="showLongToast">长时长提示 (5秒)</n-button>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showLongToast = () => {
  toast.show({
    message: '这条提示会显示5秒',
    duration: 5000
  })
}
</script>
```
:::

## 手动关闭

:::demo
```vue
<template>
  <div class="flex gap-2">
    <n-button @click="showPersistent">显示常驻提示</n-button>
    <n-button @click="closeAll" variant="outline">关闭所有</n-button>
  </div>
</template>

<script setup lang="ts">
import { useToast } from 'nexa-ui'

const toast = useToast()

const showPersistent = () => {
  toast.show({
    message: '这条提示不会自动关闭',
    duration: 0,
    closable: true
  })
}

const closeAll = () => {
  toast.clear()
}
</script>
```
:::

## API

### ToastOptions

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| message | 提示内容 | `string` | - |
| type | 提示类型 | `success` \| `warning` \| `error` \| `info` | - |
| position | 显示位置 | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top-right` |
| duration | 显示时长（毫秒），0 表示不自动关闭 | `number` | `3000` |
| closable | 是否显示关闭按钮 | `boolean` | `false` |

### useToast 方法

| 方法名 | 说明 | 参数 |
|--------|------|------|
| show | 显示普通提示 | `message: string \| ToastOptions` |
| success | 显示成功提示 | `message: string \| ToastOptions` |
| warning | 显示警告提示 | `message: string \| ToastOptions` |
| error | 显示错误提示 | `message: string \| ToastOptions` |
| info | 显示信息提示 | `message: string \| ToastOptions` |
| clear | 清除所有提示 | - |

## 使用场景

- **操作反馈**：表单提交成功/失败的提示
- **通知提醒**：新消息、新通知的提示
- **状态变化**：网络状态变化、保存成功等提示
- **警告提示**：输入错误、操作限制等警告

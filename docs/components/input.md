# Input 输入框

输入框用于接收用户的文本输入。

## 基础用法

:::demo
```vue
<template>
  <n-input v-model="value" placeholder="请输入内容" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 带标签

:::demo
```vue
<template>
  <n-input v-model="value" label="用户名" placeholder="请输入用户名" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 帮助文本

:::demo
```vue
<template>
  <n-input 
    v-model="value" 
    label="邮箱" 
    placeholder="请输入邮箱"
    help-text="我们不会分享您的邮箱地址"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 状态

:::demo
```vue
<template>
  <div class="space-y-4">
    <n-input 
      v-model="value1" 
      label="成功状态" 
      status="success"
      help-text="验证通过"
    />
    <n-input 
      v-model="value2" 
      label="警告状态" 
      status="warning"
      help-text="请检查输入"
    />
    <n-input 
      v-model="value3" 
      label="错误状态" 
      status="error"
      help-text="输入格式不正确"
    />
    <n-input 
      v-model="value4" 
      label="信息状态" 
      status="info"
      help-text="这是一条提示信息"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
```
:::

## 禁用状态

:::demo
```vue
<template>
  <n-input v-model="value" disabled placeholder="已禁用" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 密码输入

:::demo
```vue
<template>
  <n-input v-model="value" type="password" label="密码" placeholder="请输入密码" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 搜索输入

:::demo
```vue
<template>
  <n-input 
    v-model="value" 
    type="search" 
    placeholder="搜索..."
    @search="handleSearch"
    @clear="handleClear"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const handleSearch = (val: string) => {
  console.log('搜索:', val)
}

const handleClear = () => {
  console.log('已清除')
}
</script>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `string` | `''` |
| label | 标签文本 | `string` | - |
| placeholder | 占位符 | `string` | - |
| helpText | 帮助文本 | `string` | - |
| status | 状态 | `success` \| `warning` \| `error` \| `info` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| type | 输入类型 | `text` \| `password` \| `email` \| `search` \| `number` | `text` |

### Slots

| 名称 | 说明 |
|------|------|
| prefix | 前缀内容 |
| suffix | 后缀内容 |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:modelValue | 值变化时触发 | `value: string` |
| search | 搜索时触发（Enter键） | `value: string` |
| clear | 清除时触发 | - |

## 使用场景

- **表单输入**：收集用户信息（用户名、邮箱、密码等）
- **搜索功能**：使用 `type="search"` 实现搜索框
- **数据过滤**：在表格或列表中作为过滤输入

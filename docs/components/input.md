# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

::: demo 基础输入框
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

## 带标签的输入框

::: demo 带标签的输入框
```vue
<template>
  <n-input 
    v-model="value" 
    label="用户名" 
    placeholder="请输入用户名" 
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## 帮助文本

::: demo 带帮助文本的输入框
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

## 状态提示

::: demo 不同状态的输入框
```vue
<template>
  <div class="flex flex-col gap-4">
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
      help-text="请检查输入内容"
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
      help-text="这是提示信息"
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

## 搜索输入框

::: demo 搜索类型输入框
```vue
<template>
  <n-input 
    v-model="searchText" 
    type="search" 
    placeholder="搜索..."
    @search="handleSearch"
    @clear="handleClear"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const searchText = ref('')

const handleSearch = (value: string) => {
  console.log('搜索:', value)
}

const handleClear = () => {
  console.log('清空搜索')
}
</script>
```
:::

## 密码输入框

::: demo 密码类型输入框
```vue
<template>
  <n-input 
    v-model="password" 
    type="password" 
    label="密码"
    placeholder="请输入密码"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const password = ref('')
</script>
```
:::

## 禁用状态

::: demo 禁用状态的输入框
```vue
<template>
  <n-input 
    v-model="value" 
    disabled 
    placeholder="禁用状态"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>
```
:::

## API

### Props

| 参数         | 说明                 | 类型                                      | 默认值     |
|--------------|----------------------|-------------------------------------------|------------|
| modelValue   | 绑定值               | `string`                                  | `''`       |
| label        | 输入框标签           | `string`                                  | -          |
| placeholder  | 占位文本             | `string`                                  | -          |
| helpText     | 帮助文本             | `string`                                  | -          |
| status       | 状态                 | `'success' \| 'warning' \| 'error' \| 'info'` | - |
| disabled     | 是否禁用             | `boolean`                                 | `false`    |
| type         | 输入框类型           | `'text' \| 'password' \| 'email' \| 'search' \| 'number'` | `'text'` |

### Events

| 事件名           | 说明                     | 参数                 |
|------------------|--------------------------|----------------------|
| update:modelValue| 输入值变化时触发         | `value: string`      |
| search           | 搜索时触发（Enter键）    | `value: string`      |
| clear            | 清空时触发               | -                    |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| prefix   | 前缀内容           |
| suffix   | 后缀内容           |

## 使用场景

- **表单输入**: 用户信息填写、搜索框等
- **数据录入**: 文本、密码、邮箱等数据收集
- **搜索功能**: 页面内搜索、全局搜索
- **表单验证**: 配合状态提示显示验证结果


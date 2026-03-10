# Breadcrumb 面包屑

面包屑用于显示当前页面在系统层级结构中的位置，并能向上导航。

## 基础用法

:::demo
```vue
<template>
  <n-breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { title: '首页', path: '/' },
  { title: '产品中心', path: '/products' },
  { title: '产品详情', path: '/products/1' },
])
</script>
```
:::

## 自定义分隔符

:::demo
```vue
<template>
  <n-breadcrumb :items="items" separator=">" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { title: '首页', path: '/' },
  { title: '产品中心', path: '/products' },
  { title: '产品详情', path: '/products/1' },
])
</script>
```
:::

## 点击事件

:::demo
```vue
<template>
  <n-breadcrumb :items="items" @click="handleClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { title: '首页', path: '/' },
  { title: '产品中心', path: '/products' },
  { title: '产品详情', path: '/products/1' },
])

const handleClick = (item: any) => {
  alert(`点击了: ${item.title}`)
}
</script>
```
:::

## 自定义渲染

:::demo
```vue
<template>
  <n-breadcrumb :items="items">
    <template #item="{ item, isLast }">
      <span v-if="isLast" class="text-surface-800 font-medium">
        <i class="i-mdi-file-document w-4 h-4 inline mr-1" />
        {{ item.title }}
      </span>
      <a v-else :href="item.path" class="text-primary-600 hover:text-primary-700">
        <i class="i-mdi-folder w-4 h-4 inline mr-1" />
        {{ item.title }}
      </a>
    </template>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  { title: '首页', path: '/' },
  { title: '文档', path: '/docs' },
  { title: '组件', path: '/docs/components' },
  { title: 'Breadcrumb', path: '/docs/components/breadcrumb' },
])
</script>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| items | 面包屑项 | `Array<{ title: string, path?: string }>` | `[]` |
| separator | 分隔符 | `string` | `/` |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| item | 自定义面包屑项 | `{ item, index, isLast }` |
| separator | 自定义分隔符 | - |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击面包屑项时触发 | `item: BreadcrumbItem` |

## 使用场景

- **页面导航**：在内容管理系统、电商网站中显示当前位置
- **层级导航**：在具有多层级结构的应用中提供导航路径
- **返回上级**：快速返回上一级或更高级别的页面

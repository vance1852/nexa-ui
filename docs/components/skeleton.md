# Skeleton 骨架屏

骨架屏用于在内容加载过程中展示占位符，提升用户体验。

## 基础用法

:::demo
```vue
<template>
  <div class="space-y-4">
    <n-skeleton class="w-64 h-4" />
    <n-skeleton class="w-48 h-4" />
    <n-skeleton class="w-56 h-4" />
  </div>
</template>
```
:::

## 圆形骨架

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-skeleton variant="circle" class="w-12 h-12" />
    <n-skeleton variant="circle" class="w-16 h-16" />
    <n-skeleton variant="circle" class="w-20 h-20" />
  </div>
</template>
```
:::

## 圆角骨架

:::demo
```vue
<template>
  <div class="space-y-4">
    <n-skeleton variant="rounded" class="w-full h-24" />
    <n-skeleton variant="rounded" class="w-full h-16" />
  </div>
</template>
```
:::

## 动画效果

:::demo
```vue
<template>
  <div class="space-y-4">
    <n-skeleton animation="pulse" class="w-64 h-4" />
    <n-skeleton animation="wave" class="w-64 h-4" />
    <n-skeleton animation="none" class="w-64 h-4" />
  </div>
</template>
```
:::

## 卡片骨架

:::demo
```vue
<template>
  <n-card class="w-80">
    <div class="flex gap-4">
      <n-skeleton variant="circle" class="w-12 h-12 flex-shrink-0" />
      <div class="flex-1 space-y-2">
        <n-skeleton class="w-full h-4" />
        <n-skeleton class="w-3/4 h-3" />
      </div>
    </div>
    <div class="mt-4 space-y-2">
      <n-skeleton class="w-full h-3" />
      <n-skeleton class="w-full h-3" />
      <n-skeleton class="w-2/3 h-3" />
    </div>
  </n-card>
</template>
```
:::

## 列表骨架

:::demo
```vue
<template>
  <div class="space-y-4">
    <div v-for="i in 3" :key="i" class="flex gap-4 items-center">
      <n-skeleton variant="circle" class="w-10 h-10 flex-shrink-0" />
      <div class="flex-1 space-y-2">
        <n-skeleton class="w-full h-4" />
        <n-skeleton class="w-1/2 h-3" />
      </div>
    </div>
  </div>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体 | `rect` \| `circle` \| `rounded` | `rect` |
| animation | 动画效果 | `pulse` \| `wave` \| `none` | `pulse` |

## 使用场景

- **页面加载**：在页面数据加载时显示骨架屏
- **列表加载**：在列表数据请求时显示占位符
- **卡片加载**：在卡片内容加载时显示骨架
- **图片加载**：在图片加载时显示占位骨架

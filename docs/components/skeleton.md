# Skeleton 骨架屏

在页面加载时的占位组件，提升用户体验。

## 基础用法

::: demo 基础骨架屏
```vue
<template>
  <div class="space-y-3">
    <n-skeleton width="60%" height="20" />
    <n-skeleton height="16" />
    <n-skeleton height="16" />
    <n-skeleton width="80%" height="16" />
  </div>
</template>
```
:::

## 头像骨架

::: demo 头像骨架屏
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-skeleton variant="circle" width="40" height="40" />
    <div class="flex-1 space-y-2">
      <n-skeleton width="40%" height="16" />
      <n-skeleton width="60%" height="14" />
    </div>
  </div>
</template>
```
:::

## 卡片骨架

::: demo 卡片骨架屏
```vue
<template>
  <n-card>
    <div class="space-y-3">
      <n-skeleton height="120" />
      <n-skeleton width="70%" height="18" />
      <n-skeleton height="14" />
      <n-skeleton width="50%" height="14" />
    </div>
  </n-card>
</template>
```
:::

## API

### Props

| 参数       | 说明                 | 类型                          | 默认值   |
|------------|----------------------|-------------------------------|----------|
| variant    | 骨架类型             | `'rect' \| 'circle' \| 'text'` | `'rect'` |
| width      | 宽度                 | `string \| number`            | `'100%'` |
| height     | 高度                 | `string \| number`            | `'16'`   |
| animated   | 是否显示动画         | `boolean`                     | `true`   |

## 使用场景

- **页面加载**: 内容加载时的占位
- **列表加载**: 列表项加载时的占位
- **卡片加载**: 卡片内容加载时的占位
- **提升体验**: 减少用户等待的焦虑感


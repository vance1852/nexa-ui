# Badge 徽章

徽章用于标记状态、显示数量或突出显示重要信息。

## 基础用法

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge>默认</n-badge>
    <n-badge variant="outline">边框</n-badge>
    <n-badge variant="ghost">幽灵</n-badge>
  </div>
</template>
```
:::

## 状态变体

:::demo
```vue
<template>
  <div class="flex gap-4 items-center flex-wrap">
    <n-badge status="success">成功</n-badge>
    <n-badge status="warning">警告</n-badge>
    <n-badge status="error">错误</n-badge>
    <n-badge status="info">信息</n-badge>
  </div>
</template>
```
:::

## 尺寸

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge size="xs">超小</n-badge>
    <n-badge size="sm">小</n-badge>
    <n-badge size="md">中</n-badge>
    <n-badge size="lg">大</n-badge>
    <n-badge size="xl">超大</n-badge>
  </div>
</template>
```
:::

## 圆角

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge rounded="none">方形</n-badge>
    <n-badge rounded="sm">小圆角</n-badge>
    <n-badge rounded="md">中圆角</n-badge>
    <n-badge rounded="lg">大圆角</n-badge>
    <n-badge rounded="full">全圆角</n-badge>
  </div>
</template>
```
:::

## 数字徽章

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge>5</n-badge>
    <n-badge status="success">99+</n-badge>
    <n-badge status="error">NEW</n-badge>
  </div>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 变体 | `solid` \| `outline` \| `ghost` | `solid` |
| status | 状态 | `success` \| `warning` \| `error` \| `info` | - |
| size | 尺寸 | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` |
| rounded | 圆角 | `none` \| `sm` \| `md` \| `lg` \| `full` | `full` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 徽章内容 |

## 使用场景

- **状态标记**：标记订单状态、任务状态等
- **数量显示**：显示未读消息数、购物车商品数
- **分类标签**：用于内容分类、标签系统
- **新内容提示**：标记新功能、新文章等

# Badge 徽章

按钮和图标上的数字或状态标记。

## 基础用法

::: demo 基础徽章
```vue
<template>
  <div class="flex gap-4">
    <n-badge>默认</n-badge>
    <n-badge variant="success">成功</n-badge>
    <n-badge variant="warning">警告</n-badge>
    <n-badge variant="error">错误</n-badge>
    <n-badge variant="info">信息</n-badge>
  </div>
</template>
```
:::

## 圆角类型

::: demo 不同圆角的徽章
```vue
<template>
  <div class="flex gap-4">
    <n-badge rounded="full">全圆角</n-badge>
    <n-badge rounded="md">中圆角</n-badge>
    <n-badge rounded="none">无圆角</n-badge>
  </div>
</template>
```
:::

## 尺寸

::: demo 不同尺寸的徽章
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge size="sm">小</n-badge>
    <n-badge size="md">中</n-badge>
    <n-badge size="lg">大</n-badge>
  </div>
</template>
```
:::

## 数字徽章

::: demo 数字徽章
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-badge>5</n-badge>
    <n-badge>99+</n-badge>
    <n-badge variant="error">!</n-badge>
  </div>
</template>
```
:::

## API

### Props

| 参数       | 说明                 | 类型                                      | 默认值     |
|------------|----------------------|-------------------------------------------|------------|
| variant    | 徽章类型             | `'default' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'default'` |
| size       | 徽章尺寸             | `'sm' \| 'md' \| 'lg'`                    | `'md'`     |
| rounded    | 圆角类型             | `'none' \| 'md' \| 'full'`                | `'full'`   |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| default  | 徽章内容           |

## 使用场景

- **状态标记**: 标记用户状态、订单状态等
- **数量提示**: 未读消息数、通知数量
- **分类标签**: 内容分类、属性标记
- **优先级标识**: 重要程度、紧急程度


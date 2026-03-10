# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

::: demo 基础卡片
```vue
<template>
  <n-card>
    <p>这是一个基础卡片</p>
    <p>卡片内容可以是任意元素</p>
  </n-card>
</template>
```
:::

## 带头部和底部

::: demo 带头部和底部的卡片
```vue
<template>
  <n-card>
    <template #header>
      <h3 class="text-lg font-semibold">卡片标题</h3>
    </template>
    
    <p>这是卡片的主体内容</p>
    <p>可以放置任意内容</p>
    
    <template #footer>
      <div class="flex gap-2">
        <n-button size="sm" variant="outline">取消</n-button>
        <n-button size="sm">确认</n-button>
      </div>
    </template>
  </n-card>
</template>
```
:::

## 可悬浮卡片

::: demo 悬浮效果的卡片
```vue
<template>
  <div class="flex gap-4">
    <n-card hoverable>
      <p>鼠标悬浮时有阴影效果</p>
    </n-card>
    
    <n-card hoverable shadow="md">
      <p>中等阴影</p>
    </n-card>
  </div>
</template>
```
:::

## 可点击卡片

::: demo 可点击的卡片
```vue
<template>
  <n-card clickable @click="handleClick">
    <p>点击这个卡片</p>
    <p class="text-sm text-gray-500">点击时会有缩放效果</p>
  </n-card>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('卡片被点击了')
}
</script>
```
:::

## 玻璃效果

::: demo 玻璃效果卡片
```vue
<template>
  <div class="p-8 bg-gradient-to-r from-blue-500 to-purple-500">
    <n-card glass>
      <p>玻璃拟态效果</p>
      <p class="text-sm text-gray-600">背景模糊 + 半透明</p>
    </n-card>
  </div>
</template>
```
:::

## 阴影尺寸

::: demo 不同阴影尺寸的卡片
```vue
<template>
  <div class="flex gap-4">
    <n-card shadow="none">
      <p>无阴影</p>
    </n-card>
    <n-card shadow="sm">
      <p>小阴影</p>
    </n-card>
    <n-card shadow="md">
      <p>中阴影</p>
    </n-card>
    <n-card shadow="lg">
      <p>大阴影</p>
    </n-card>
  </div>
</template>
```
:::

## API

### Props

| 参数       | 说明                 | 类型                                      | 默认值   |
|------------|----------------------|-------------------------------------------|----------|
| hoverable  | 是否悬浮效果         | `boolean`                                 | `false`  |
| clickable  | 是否可点击           | `boolean`                                 | `false`  |
| bordered   | 是否显示边框         | `boolean`                                 | `false`  |
| shadow     | 阴影尺寸             | `'none' \| 'sm' \| 'md' \| 'lg'`          | `'sm'`   |
| glass      | 是否玻璃效果         | `boolean`                                 | `false`  |

### Events

| 事件名 | 说明               | 参数               |
|--------|--------------------|--------------------|
| click  | 点击卡片时触发     | `event: MouseEvent` |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| default  | 卡片主体内容       |
| header   | 卡片头部内容       |
| footer   | 卡片底部内容       |

## 使用场景

- **内容展示**: 文章卡片、产品卡片、用户信息卡片
- **数据聚合**: 将相关信息组织在一起
- **交互入口**: 可点击的卡片作为导航入口
- **视觉分层**: 通过阴影和边框创建视觉层次


# Card 卡片

卡片用于将相关内容分组展示，是一种常见的容器组件。

## 基础用法

:::demo
```vue
<template>
  <n-card>
    <h3 class="text-lg font-semibold mb-2">卡片标题</h3>
    <p class="text-surface-600">这是卡片的内容区域，可以放置任何内容。</p>
  </n-card>
</template>
```
:::

## 可悬浮

:::demo
```vue
<template>
  <n-card hoverable>
    <h3 class="text-lg font-semibold mb-2">可悬浮卡片</h3>
    <p class="text-surface-600">鼠标悬停时会有阴影效果。</p>
  </n-card>
</template>
```
:::

## 可点击

:::demo
```vue
<template>
  <n-card clickable @click="handleClick">
    <h3 class="text-lg font-semibold mb-2">可点击卡片</h3>
    <p class="text-surface-600">点击此卡片会触发点击事件。</p>
  </n-card>
</template>

<script setup lang="ts">
const handleClick = () => {
  alert('卡片被点击了！')
}
</script>
```
:::

## 阴影大小

:::demo
```vue
<template>
  <div class="space-y-4">
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

## 玻璃态效果

:::demo
```vue
<template>
  <div class="p-8 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg">
    <n-card glass>
      <h3 class="text-lg font-semibold mb-2">玻璃态卡片</h3>
      <p class="text-surface-600">带有毛玻璃效果的卡片。</p>
    </n-card>
  </div>
</template>
```
:::

## 带边框

:::demo
```vue
<template>
  <n-card bordered>
    <h3 class="text-lg font-semibold mb-2">带边框卡片</h3>
    <p class="text-surface-600">带有明显边框的卡片。</p>
  </n-card>
</template>
```
:::

## 插槽

:::demo
```vue
<template>
  <n-card>
    <template #header>
      <div class="flex items-center justify-between">
        <span class="font-semibold">卡片头部</span>
        <n-button size="sm" variant="ghost">操作</n-button>
      </div>
    </template>
    <p class="text-surface-600">这是卡片的主体内容。</p>
    <template #footer>
      <div class="flex gap-2">
        <n-button size="sm" variant="outline">取消</n-button>
        <n-button size="sm" variant="solid">确定</n-button>
      </div>
    </template>
  </n-card>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| hoverable | 是否可悬浮 | `boolean` | `false` |
| clickable | 是否可点击 | `boolean` | `false` |
| bordered | 是否显示边框 | `boolean` | `false` |
| shadow | 阴影大小 | `none` \| `sm` \| `md` \| `lg` | `sm` |
| glass | 是否启用玻璃态效果 | `boolean` | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片内容 |
| header | 卡片头部 |
| footer | 卡片底部 |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击卡片时触发（clickable 为 true 时） | `event: MouseEvent` |

## 使用场景

- **内容展示**：文章预览、产品信息、用户资料等
- **数据列表**：以卡片形式展示列表项
- **操作入口**：可点击的功能卡片
- **仪表板**：在仪表板中展示各类信息模块

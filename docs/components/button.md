# Button 按钮

按钮用于触发一个操作，如提交表单、打开对话框等。

## 基础用法

:::demo
```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <n-button variant="solid">Solid</n-button>
    <n-button variant="outline">Outline</n-button>
    <n-button variant="ghost">Ghost</n-button>
    <n-button variant="text">Text</n-button>
  </div>
</template>
```
:::

## 按钮尺寸

:::demo
```vue
<template>
  <div class="flex gap-4 items-center flex-wrap">
    <n-button size="xs">XSmall</n-button>
    <n-button size="sm">Small</n-button>
    <n-button size="md">Medium</n-button>
    <n-button size="lg">Large</n-button>
    <n-button size="xl">XLarge</n-button>
  </div>
</template>
```
:::

## 禁用状态

:::demo
```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <n-button disabled>Disabled</n-button>
    <n-button variant="outline" disabled>Disabled</n-button>
    <n-button variant="ghost" disabled>Disabled</n-button>
  </div>
</template>
```
:::

## 加载状态

:::demo
```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <n-button loading>Loading</n-button>
    <n-button variant="outline" loading>Loading</n-button>
  </div>
</template>
```
:::

## 图标按钮

:::demo
```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <n-button icon-only>
      <template #icon-left>
        <i class="i-mdi-home w-4 h-4" />
      </template>
    </n-button>
    <n-button icon-only variant="outline">
      <template #icon-left>
        <i class="i-mdi-heart w-4 h-4" />
      </template>
    </n-button>
    <n-button>
      <template #icon-left>
        <i class="i-mdi-send w-4 h-4" />
      </template>
      发送
    </n-button>
    <n-button>
      下载
      <template #icon-right>
        <i class="i-mdi-download w-4 h-4" />
      </template>
    </n-button>
  </div>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| variant | 按钮变体 | `solid` \| `outline` \| `ghost` \| `text` | `solid` |
| size | 按钮尺寸 | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |
| icon-only | 是否为图标按钮 | `boolean` | `false` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 按钮内容 |
| icon-left | 左侧图标 |
| icon-right | 右侧图标 |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击按钮时触发 | `event: MouseEvent` |

## 使用场景

- **表单提交**：使用 `solid` 变体作为主要操作按钮
- **次要操作**：使用 `outline` 或 `ghost` 变体
- **文本链接**：使用 `text` 变体
- **工具栏**：使用 `icon-only` 图标按钮

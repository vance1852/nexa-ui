# Button 按钮

按钮用于触发一个操作，如表单提交、对话框打开等。

## 基础用法

::: demo 基础按钮用法
```vue
<template>
  <div class="flex gap-2">
    <n-button variant="solid">主要按钮</n-button>
    <n-button variant="outline">次要按钮</n-button>
    <n-button variant="ghost">幽灵按钮</n-button>
    <n-button variant="text">文字按钮</n-button>
  </div>
</template>
```
:::

## 按钮尺寸

::: demo 不同尺寸的按钮
```vue
<template>
  <div class="flex gap-2 items-center">
    <n-button size="xs">超小</n-button>
    <n-button size="sm">小</n-button>
    <n-button size="md">中</n-button>
    <n-button size="lg">大</n-button>
    <n-button size="xl">超大</n-button>
  </div>
</template>
```
:::

## 禁用状态

::: demo 禁用状态的按钮
```vue
<template>
  <div class="flex gap-2">
    <n-button disabled>禁用状态</n-button>
    <n-button variant="outline" disabled>禁用状态</n-button>
  </div>
</template>
```
:::

## 加载状态

::: demo 加载中的按钮
```vue
<template>
  <div class="flex gap-2">
    <n-button loading>加载中</n-button>
    <n-button variant="outline" loading>加载中</n-button>
  </div>
</template>
```
:::

## 图标按钮

::: demo 仅显示图标的按钮
```vue
<template>
  <div class="flex gap-2">
    <n-button icon-only size="sm">
      <template #icon-left>
        <i class="i-mdi-plus w-4 h-4" />
      </template>
    </n-button>
    <n-button icon-only>
      <template #icon-left>
        <i class="i-mdi-delete w-4 h-4" />
      </template>
    </n-button>
    <n-button icon-only size="lg">
      <template #icon-left>
        <i class="i-mdi-edit w-5 h-5" />
      </template>
    </n-button>
  </div>
</template>
```
:::

## API

### Props

| 参数       | 说明                 | 类型                                      | 默认值   |
|------------|----------------------|-------------------------------------------|----------|
| variant    | 按钮类型             | `'solid' \| 'outline' \| 'ghost' \| 'text'` | `'solid'` |
| size       | 按钮尺寸             | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`    | `'md'`   |
| disabled   | 是否禁用             | `boolean`                                 | `false`  |
| loading    | 是否加载中           | `boolean`                                 | `false`  |
| icon-only  | 是否仅显示图标       | `boolean`                                 | `false`  |

### Events

| 事件名 | 说明               | 参数               |
|--------|--------------------|--------------------|
| click  | 点击按钮时触发     | `event: MouseEvent` |

### Slots

| 名称       | 说明               |
|------------|--------------------|
| default    | 按钮内容           |
| icon-left  | 左侧图标           |
| icon-right | 右侧图标           |

## 使用场景

- **表单提交**: 使用 `solid` 类型作为主要操作按钮
- **次要操作**: 使用 `outline` 或 `ghost` 类型作为次要操作
- **导航操作**: 使用 `text` 类型作为链接式操作
- **图标按钮**: 在空间有限时使用 `icon-only` 模式


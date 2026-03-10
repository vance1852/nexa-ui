# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基础用法

::: demo 基础头像
```vue
<template>
  <div class="flex gap-4">
    <n-avatar src="https://picsum.photos/200" />
    <n-avatar>A</n-avatar>
    <n-avatar>
      <i class="i-mdi-user w-5 h-5" />
    </n-avatar>
  </div>
</template>
```
:::

## 头像尺寸

::: demo 不同尺寸的头像
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar size="xs">XS</n-avatar>
    <n-avatar size="sm">SM</n-avatar>
    <n-avatar size="md">MD</n-avatar>
    <n-avatar size="lg">LG</n-avatar>
    <n-avatar size="xl">XL</n-avatar>
  </div>
</template>
```
:::

## 头像形状

::: demo 不同形状的头像
```vue
<template>
  <div class="flex gap-4">
    <n-avatar shape="circle">圆</n-avatar>
    <n-avatar shape="rounded">圆角</n-avatar>
    <n-avatar shape="square">方</n-avatar>
  </div>
</template>
```
:::

## 头像组

::: demo 头像组
```vue
<template>
  <div class="flex -space-x-2">
    <n-avatar src="https://picsum.photos/200?1" />
    <n-avatar src="https://picsum.photos/200?2" />
    <n-avatar src="https://picsum.photos/200?3" />
    <n-avatar>+3</n-avatar>
  </div>
</template>
```
:::

## API

### Props

| 参数       | 说明                 | 类型                                      | 默认值     |
|------------|----------------------|-------------------------------------------|------------|
| src        | 图片地址             | `string`                                  | -          |
| alt        | 图片替代文本         | `string`                                  | -          |
| size       | 头像尺寸             | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`    | `'md'`     |
| shape      | 头像形状             | `'circle' \| 'rounded' \| 'square'`       | `'circle'` |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| default  | 头像内容           |

## 使用场景

- **用户头像**: 展示用户个人信息
- **团队成员**: 展示团队成员列表
- **内容标识**: 作为文章、项目的标识
- **列表项**: 在列表中展示缩略图


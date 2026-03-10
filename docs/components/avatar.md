# Avatar 头像

头像用于展示用户形象或品牌标识。

## 基础用法

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar src="https://picsum.photos/200/200?random=1" />
    <n-avatar src="https://picsum.photos/200/200?random=2" />
    <n-avatar src="https://picsum.photos/200/200?random=3" />
  </div>
</template>
```
:::

## 头像尺寸

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar size="xs" src="https://picsum.photos/200/200?random=4" />
    <n-avatar size="sm" src="https://picsum.photos/200/200?random=5" />
    <n-avatar size="md" src="https://picsum.photos/200/200?random=6" />
    <n-avatar size="lg" src="https://picsum.photos/200/200?random=7" />
    <n-avatar size="xl" src="https://picsum.photos/200/200?random=8" />
  </div>
</template>
```
:::

## 文字头像

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar>张三</n-avatar>
    <n-avatar>李四</n-avatar>
    <n-avatar>王五</n-avatar>
  </div>
</template>
```
:::

## 图标头像

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar>
      <i class="i-mdi-user w-5 h-5" />
    </n-avatar>
    <n-avatar variant="outline">
      <i class="i-mdi-account w-5 h-5" />
    </n-avatar>
    <n-avatar variant="ghost">
      <i class="i-mdi-face w-5 h-5" />
    </n-avatar>
  </div>
</template>
```
:::

## 变体

:::demo
```vue
<template>
  <div class="flex gap-4 items-center">
    <n-avatar variant="solid">A</n-avatar>
    <n-avatar variant="outline">B</n-avatar>
    <n-avatar variant="ghost">C</n-avatar>
  </div>
</template>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| src | 图片地址 | `string` | - |
| alt | 替代文本 | `string` | - |
| size | 尺寸 | `xs` \| `sm` \| `md` \| `lg` \| `xl` | `md` |
| variant | 变体 | `solid` \| `outline` \| `ghost` | `solid` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 头像内容（文字或图标） |

## 使用场景

- **用户头像**：在评论区、用户列表中展示用户头像
- **品牌标识**：在导航栏或页脚展示品牌 Logo
- **联系人列表**：在聊天应用中展示联系人头像
- **团队成员**：在关于页面展示团队成员

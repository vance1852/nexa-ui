# Tabs 标签页

标签页用于在不同内容视图之间切换。

## 基础用法

:::demo
```vue
<template>
  <n-tabs v-model:active="activeTab">
    <n-tab label="标签一" name="tab1">
      <div class="p-4">这是标签一的内容</div>
    </n-tab>
    <n-tab label="标签二" name="tab2">
      <div class="p-4">这是标签二的内容</div>
    </n-tab>
    <n-tab label="标签三" name="tab3">
      <div class="p-4">这是标签三的内容</div>
    </n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```
:::

## 卡片样式

:::demo
```vue
<template>
  <n-tabs v-model:active="activeTab" variant="card">
    <n-tab label="标签一" name="tab1">
      <div class="p-4">卡片样式的标签页内容</div>
    </n-tab>
    <n-tab label="标签二" name="tab2">
      <div class="p-4">这是第二个标签页</div>
    </n-tab>
    <n-tab label="标签三" name="tab3">
      <div class="p-4">这是第三个标签页</div>
    </n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```
:::

## 带图标

:::demo
```vue
<template>
  <n-tabs v-model:active="activeTab">
    <n-tab name="home">
      <template #label>
        <span class="flex items-center gap-1">
          <i class="i-mdi-home w-4 h-4" />
          首页
        </span>
      </template>
      <div class="p-4">首页内容</div>
    </n-tab>
    <n-tab name="profile">
      <template #label>
        <span class="flex items-center gap-1">
          <i class="i-mdi-account w-4 h-4" />
          个人资料
        </span>
      </template>
      <div class="p-4">个人资料内容</div>
    </n-tab>
    <n-tab name="settings">
      <template #label>
        <span class="flex items-center gap-1">
          <i class="i-mdi-cog w-4 h-4" />
          设置
        </span>
      </template>
      <div class="p-4">设置内容</div>
    </n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('home')
</script>
```
:::

## 禁用标签

:::demo
```vue
<template>
  <n-tabs v-model:active="activeTab">
    <n-tab label="可用标签" name="tab1">
      <div class="p-4">可用标签内容</div>
    </n-tab>
    <n-tab label="禁用标签" name="tab2" disabled>
      <div class="p-4">禁用标签内容</div>
    </n-tab>
    <n-tab label="另一个标签" name="tab3">
      <div class="p-4">另一个标签内容</div>
    </n-tab>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```
:::

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| active | 激活的标签名 | `string` \| `number` | - |
| variant | 样式变体 | `line` \| `card` | `line` |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | 标签文本 | `string` | - |
| name | 标签名称（唯一标识） | `string` \| `number` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### Tabs Slots

| 名称 | 说明 |
|------|------|
| default | Tab 组件列表 |

### Tab Slots

| 名称 | 说明 |
|------|------|
| default | 标签页内容 |
| label | 自定义标签 |

### Tabs Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:active | 激活标签变化时触发 | `active: string \| number` |
| change | 切换标签时触发 | `name: string \| number` |

## 使用场景

- **内容分类**：将不同类型的内容分类展示
- **表单分步**：将长表单分成多个步骤
- **设置页面**：不同设置选项的切换
- **详情页面**：展示不同维度的信息

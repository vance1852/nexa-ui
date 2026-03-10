# Tabs 标签页

选项卡切换组件，用于在不同内容区域间切换。

## 基础用法

::: demo 基础标签页
```vue
<template>
  <n-tabs v-model="activeTab">
    <n-tab-pane label="标签一" name="tab1">
      <p>这是标签一的内容</p>
    </n-tab-pane>
    <n-tab-pane label="标签二" name="tab2">
      <p>这是标签二的内容</p>
    </n-tab-pane>
    <n-tab-pane label="标签三" name="tab3">
      <p>这是标签三的内容</p>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('tab1')
</script>
```
:::

## 标签样式

::: demo 不同样式的标签页
```vue
<template>
  <div class="flex flex-col gap-4">
    <n-tabs v-model="activeTab1" type="line">
      <n-tab-pane label="标签一" name="tab1">线条样式</n-tab-pane>
      <n-tab-pane label="标签二" name="tab2">线条样式</n-tab-pane>
    </n-tabs>
    
    <n-tabs v-model="activeTab2" type="card">
      <n-tab-pane label="标签一" name="tab1">卡片样式</n-tab-pane>
      <n-tab-pane label="标签二" name="tab2">卡片样式</n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab1 = ref('tab1')
const activeTab2 = ref('tab1')
</script>
```
:::

## API

### Tabs Props

| 参数       | 说明                 | 类型                          | 默认值   |
|------------|----------------------|-------------------------------|----------|
| modelValue | 绑定值，选中标签的 name | `string \| number`           | -        |
| type       | 标签样式             | `'line' \| 'card'`            | `'line'` |

### TabPane Props

| 参数       | 说明                 | 类型               | 默认值   |
|------------|----------------------|--------------------|----------|
| label      | 标签标题             | `string`           | -        |
| name       | 标签标识符           | `string \| number` | -        |
| disabled   | 是否禁用             | `boolean`          | `false`  |

### Events

| 事件名           | 说明                     | 参数                 |
|------------------|--------------------------|----------------------|
| update:modelValue| 选中标签变化时触发       | `name: string \| number` |

## 使用场景

- **内容分类**: 将相关内容分组展示
- **表单分步**: 多步骤表单的步骤切换
- **数据筛选**: 不同数据视图的切换
- **设置页面**: 不同设置分类的切换


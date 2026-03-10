# Table 表格

展示行列数据。

## 基础用法

::: demo 基础表格
```vue
<template>
  <n-table :columns="columns" :data="data" />
</template>

<script setup lang="ts">
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' }
]

const data = [
  { name: '张三', age: 28, address: '北京市朝阳区' },
  { name: '李四', age: 32, address: '上海市浦东新区' },
  { name: '王五', age: 25, address: '广州市天河区' }
]
</script>
```
:::

## 带斑马纹

::: demo 斑马纹表格
```vue
<template>
  <n-table :columns="columns" :data="data" striped />
</template>

<script setup lang="ts">
const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'address', title: '地址' }
]

const data = [
  { name: '张三', age: 28, address: '北京市朝阳区' },
  { name: '李四', age: 32, address: '上海市浦东新区' },
  { name: '王五', age: 25, address: '广州市天河区' }
]
</script>
```
:::

## API

### Props

| 参数       | 说明                 | 类型           | 默认值   |
|------------|----------------------|----------------|----------|
| columns    | 列配置               | `Array`        | `[]`     |
| data       | 表格数据             | `Array`        | `[]`     |
| striped    | 是否显示斑马纹       | `boolean`      | `false`  |
| bordered   | 是否显示边框         | `boolean`      | `false`  |

### Column 配置

| 属性       | 说明                 | 类型     |
|------------|----------------------|----------|
| key        | 数据字段名           | `string` |
| title      | 列标题               | `string` |
| width      | 列宽度               | `string \| number` |

## 使用场景

- **数据展示**: 展示列表型数据
- **数据管理**: 后台管理系统的数据列表
- **报表展示**: 统计报表、数据报表
- **数据对比**: 多组数据的对比展示


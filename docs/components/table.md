# Table 表格

表格用于展示结构化数据。

## 基础用法

:::demo
```vue
<template>
  <n-table :columns="columns" :data="data" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'email', title: '邮箱' },
])

const data = ref([
  { name: '张三', age: 28, email: 'zhangsan@example.com' },
  { name: '李四', age: 32, email: 'lisi@example.com' },
  { name: '王五', age: 25, email: 'wangwu@example.com' },
])
</script>
```
:::

## 带边框

:::demo
```vue
<template>
  <n-table :columns="columns" :data="data" bordered />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'email', title: '邮箱' },
])

const data = ref([
  { name: '张三', age: 28, email: 'zhangsan@example.com' },
  { name: '李四', age: 32, email: 'lisi@example.com' },
  { name: '王五', age: 25, email: 'wangwu@example.com' },
])
</script>
```
:::

## 斑马纹

:::demo
```vue
<template>
  <n-table :columns="columns" :data="data" striped />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'email', title: '邮箱' },
])

const data = ref([
  { name: '张三', age: 28, email: 'zhangsan@example.com' },
  { name: '李四', age: 32, email: 'lisi@example.com' },
  { name: '王五', age: 25, email: 'wangwu@example.com' },
  { name: '赵六', age: 30, email: 'zhaoliu@example.com' },
])
</script>
```
:::

## 自定义列

:::demo
```vue
<template>
  <n-table :columns="columns" :data="data">
    <template #status="{ row }">
      <n-badge :status="row.status === 'active' ? 'success' : 'error'" size="sm">
        {{ row.status === 'active' ? '活跃' : '禁用' }}
      </n-badge>
    </template>
    <template #action="{ row }">
      <div class="flex gap-2">
        <n-button size="xs" variant="text">编辑</n-button>
        <n-button size="xs" variant="text" status="error">删除</n-button>
      </div>
    </template>
  </n-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'status', title: '状态' },
  { key: 'action', title: '操作' },
])

const data = ref([
  { name: '张三', age: 28, status: 'active' },
  { name: '李四', age: 32, status: 'inactive' },
  { name: '王五', age: 25, status: 'active' },
])
</script>
```
:::

## 空数据

:::demo
```vue
<template>
  <n-table :columns="columns" :data="[]" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄' },
  { key: 'email', title: '邮箱' },
])
</script>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| columns | 列配置 | `Array<{ key: string, title: string }>` | `[]` |
| data | 数据 | `Array` | `[]` |
| bordered | 是否显示边框 | `boolean` | `false` |
| striped | 是否显示斑马纹 | `boolean` | `false` |

### Slots

| 名称 | 说明 | 参数 |
|------|------|------|
| [columnKey] | 自定义列内容 | `{ row, column, index }` |
| empty | 空数据时显示 | - |

## 使用场景

- **数据展示**：展示用户列表、订单列表等结构化数据
- **数据管理**：后台管理系统中的数据表格
- **报表展示**：统计报表、数据分析结果展示
- **产品列表**：电商产品列表、库存列表

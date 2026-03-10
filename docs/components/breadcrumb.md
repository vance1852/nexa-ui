# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 基础用法

::: demo 基础面包屑
```vue
<template>
  <n-breadcrumb>
    <n-breadcrumb-item to="/">首页</n-breadcrumb-item>
    <n-breadcrumb-item to="/components">组件</n-breadcrumb-item>
    <n-breadcrumb-item>面包屑</n-breadcrumb-item>
  </n-breadcrumb>
</template>
```
:::

## 自定义分隔符

::: demo 自定义分隔符
```vue
<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item to="/">首页</n-breadcrumb-item>
    <n-breadcrumb-item to="/components">组件</n-breadcrumb-item>
    <n-breadcrumb-item>面包屑</n-breadcrumb-item>
  </n-breadcrumb>
</template>
```
:::

## API

### Breadcrumb Props

| 参数       | 说明                 | 类型     | 默认值   |
|------------|----------------------|----------|----------|
| separator  | 分隔符               | `string` | `'/'`    |

### BreadcrumbItem Props

| 参数       | 说明                 | 类型               | 默认值   |
|------------|----------------------|--------------------|----------|
| to         | 跳转目标             | `string \| object` | -        |
| replace    | 是否替换当前路由     | `boolean`          | `false`  |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| default  | 面包屑项内容       |

## 使用场景

- **页面导航**: 显示当前页面的层级位置
- **路径导航**: 帮助用户了解当前位置并快速返回上层
- **多级菜单**: 在复杂的应用结构中提供导航上下文


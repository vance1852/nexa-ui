# Modal 模态框

模态框用于在当前页面上显示重要信息或操作，需要用户交互才能关闭。

## 基础用法

:::demo
```vue
<template>
  <n-button @click="visible = true">打开模态框</n-button>
  <n-modal v-model:visible="visible" title="模态框标题">
    <p>这是模态框的内容区域。</p>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
```
:::

## 自定义内容

:::demo
```vue
<template>
  <n-button @click="visible = true">自定义模态框</n-button>
  <n-modal v-model:visible="visible">
    <template #header>
      <div class="flex items-center gap-2">
        <i class="i-mdi-information w-5 h-5 text-primary-600" />
        <span class="font-semibold">提示信息</span>
      </div>
    </template>
    <div class="text-center py-4">
      <i class="i-mdi-check-circle w-16 h-16 text-success-500 mx-auto mb-4" />
      <p class="text-lg font-medium">操作成功！</p>
      <p class="text-surface-500 mt-2">您的操作已成功完成。</p>
    </div>
    <template #footer>
      <div class="flex justify-end gap-2">
        <n-button variant="outline" @click="visible = false">取消</n-button>
        <n-button variant="solid" @click="visible = false">确定</n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
```
:::

## 不同尺寸

:::demo
```vue
<template>
  <div class="flex gap-2 flex-wrap">
    <n-button @click="openModal('sm')">小尺寸</n-button>
    <n-button @click="openModal('md')">中尺寸</n-button>
    <n-button @click="openModal('lg')">大尺寸</n-button>
    <n-button @click="openModal('xl')">超大尺寸</n-button>
    <n-button @click="openModal('full')">全屏</n-button>
  </div>
  <n-modal v-model:visible="visible" :size="modalSize" :title="`${modalSize} 模态框`">
    <p>这是 {{ modalSize }} 尺寸的模态框。</p>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const modalSize = ref('md')

const openModal = (size: string) => {
  modalSize.value = size
  visible.value = true
}
</script>
```
:::

## 禁用关闭

:::demo
```vue
<template>
  <n-button @click="visible = true">禁用关闭</n-button>
  <n-modal v-model:visible="visible" title="重要提示" :closable="false">
    <p>此模态框禁用了点击遮罩层关闭和 ESC 关闭。</p>
    <p class="text-surface-500 mt-2">您必须点击下方按钮才能关闭。</p>
    <template #footer>
      <div class="flex justify-end">
        <n-button variant="solid" @click="visible = false">我已了解</n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
```
:::

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| visible | 是否显示 | `boolean` | `false` |
| title | 标题 | `string` | - |
| size | 尺寸 | `sm` \| `md` \| `lg` \| `xl` \| `full` | `md` |
| closable | 是否可关闭 | `boolean` | `true` |
| mask-closable | 点击遮罩层是否可关闭 | `boolean` | `true` |
| esc-closable | 按 ESC 是否可关闭 | `boolean` | `true` |
| show-close | 是否显示关闭按钮 | `boolean` | `true` |

### Slots

| 名称 | 说明 |
|------|------|
| default | 模态框内容 |
| header | 自定义头部 |
| footer | 自定义底部 |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| update:visible | 显示状态变化时触发 | `visible: boolean` |
| open | 打开时触发 | - |
| close | 关闭时触发 | - |

## 使用场景

- **确认对话框**：删除操作、重要操作的二次确认
- **表单弹窗**：在弹窗中填写表单
- **详情展示**：展示详细信息（如订单详情、用户详情）
- **引导流程**：新手引导、功能介绍
- **警告提示**：重要的警告信息展示

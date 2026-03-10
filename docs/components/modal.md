# Modal 模态框

模态对话框，在浮层中显示，引导用户进行相关操作。

## 基础用法

::: demo 基础模态框
```vue
<template>
  <n-button @click="visible = true">打开模态框</n-button>
  
  <n-modal v-model="visible" title="提示">
    <p>这是模态框的内容</p>
    <p>点击遮罩层或关闭按钮可以关闭</p>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
```
:::

## 自定义底部

::: demo 自定义底部按钮
```vue
<template>
  <n-button @click="visible = true">打开模态框</n-button>
  
  <n-modal v-model="visible" title="确认操作">
    <p>确定要执行此操作吗？</p>
    
    <template #footer>
      <div class="flex gap-2 justify-end">
        <n-button variant="outline" @click="visible = false">取消</n-button>
        <n-button @click="handleConfirm">确认</n-button>
      </div>
    </template>
  </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)

const handleConfirm = () => {
  console.log('确认操作')
  visible.value = false
}
</script>
```
:::

## API

### Props

| 参数       | 说明                 | 类型     | 默认值   |
|------------|----------------------|----------|----------|
| modelValue | 是否显示模态框       | `boolean` | -       |
| title      | 模态框标题           | `string` | -        |
| closable   | 是否显示关闭按钮     | `boolean` | `true`  |
| maskClosable | 点击遮罩是否关闭   | `boolean` | `true`  |

### Events

| 事件名           | 说明                     | 参数                 |
|------------------|--------------------------|----------------------|
| update:modelValue| 显示状态变化时触发       | `visible: boolean`   |
| close            | 关闭时触发               | -                    |

### Slots

| 名称     | 说明               |
|----------|--------------------|
| default  | 模态框内容         |
| title    | 自定义标题         |
| footer   | 自定义底部         |

## 使用场景

- **确认操作**: 删除、提交等重要操作的二次确认
- **表单填写**: 在弹窗中填写表单
- **详情展示**: 展示详细信息
- **引导流程**: 用户引导、新手教程


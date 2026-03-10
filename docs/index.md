---
layout: home

hero:
  name: Nexa UI
  text: Modern Vue 3 Component Library
  tagline: 基于 Vue 3 + TypeScript + UnoCSS 的现代化组件库
  image:
    src: /vite.svg
    alt: Nexa UI
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quick-start
    - theme: alt
      text: 组件文档
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/your-org/nexa-ui

features:
  - icon: 🚀
    title: Vue 3 Composition API
    details: 完全使用 Vue 3 组合式 API 开发，提供更好的 TypeScript 支持
  - icon: 🎨
    title: UnoCSS 原子化 CSS
    details: 极致的开发体验和构建性能，零运行时开销
  - icon: 📦
    title: Tree Shaking 支持
    details: 按需引入，只打包你需要的组件，最小化包体积
  - icon: 🔑
    title: TypeScript 原生支持
    details: 完整的类型定义，开发体验更佳，提前发现潜在错误
  - icon: ✅
    title: 完善的测试覆盖
    details: 使用 Vitest 进行单元测试，保证组件质量
  - icon: 🎯
    title: 无障碍支持
    details: 遵循 WAI-ARIA 规范，提供良好的可访问性
---

<div class="text-center py-12">
  <h2 class="text-2xl font-bold mb-8">为什么选择 Nexa UI?</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div class="p-6 rounded-xl bg-surface-50">
      <h3 class="text-lg font-semibold mb-2">轻量高效</h3>
      <p class="text-gray-600">基于 UnoCSS，零运行时开销，极致的构建性能</p>
    </div>
    
    <div class="p-6 rounded-xl bg-surface-50">
      <h3 class="text-lg font-semibold mb-2">一致的设计</h3>
      <p class="text-gray-600">遵循统一的设计规范，确保产品视觉一致性</p>
    </div>
    
    <div class="p-6 rounded-xl bg-surface-50">
      <h3 class="text-lg font-semibold mb-2">易于定制</h3>
      <p class="text-gray-600">支持深度主题定制，满足不同业务需求</p>
    </div>
  </div>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6, #8b5cf6);
}
</style>

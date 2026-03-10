import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nexa UI',
  description: 'Modern Vue 3 component library with atomic design principles',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '安装', link: '/guide/installation' },
          ],
        },
        {
          text: '设计规范',
          items: [
            { text: '色彩系统', link: '/guide/colors' },
            { text: '排版', link: '/guide/typography' },
            { text: '间距', link: '/guide/spacing' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Badge 徽章', link: '/components/badge' },
            { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
          ],
        },
        {
          text: '导航组件',
          items: [
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Modal 模态框', link: '/components/modal' },
            { text: 'Toast 提示', link: '/components/toast' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/nexa-ui' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Nexa UI',
    },
  },
})

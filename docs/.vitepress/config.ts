import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  title: 'Nexa UI',
  description: 'Modern Vue 3 component library with atomic design principles',
  base: '/',
  appearance: 'dark',

  themeConfig: {
    logo: '/vite.svg',
    siteTitle: 'Nexa UI',

    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/your-org/nexa-ui' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装', link: '/guide/installation' }
          ]
        },
        {
          text: '主题',
          items: [
            { text: '设计规范', link: '/guide/design' },
            { text: '自定义主题', link: '/guide/customization' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Avatar 头像', link: '/components/avatar' },
            { text: 'Badge 徽章', link: '/components/badge' }
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Skeleton 骨架屏', link: '/components/skeleton' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Tabs 标签页', link: '/components/tabs' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Modal 模态框', link: '/components/modal' },
            { text: 'Toast 消息提示', link: '/components/toast' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/nexa-ui' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Nexa UI'
    }
  },

  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  }
})

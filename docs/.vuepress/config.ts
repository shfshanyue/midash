import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'

export default {
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        sizes: '16x16',
        href: `/midash.svg`,
      },
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'midash',
      description: 'An alternative to lodash with the same API.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'midash',
      description: '与 lodash 拥有相似 API，基于 ES6+，体积更小的工具函数库',
    },
  },
  theme: defaultTheme({
    logo: '/midash.svg',
    home: '/',
    docsRepo: 'shfshanyue/midash',
    repo: 'shfshanyue/midash',
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: [
          {
            text: 'Home',
            link: '/',
          },
          {
            text: 'API Documentation',
            link: '/api',
          },
        ],
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: [
          {
            text: '首页',
            link: '/',
          },
          {
            text: 'API 文档',
            link: '/zh/api',
          },
        ],
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },
  }),
  plugins: [
    {
      name: 'midash API',
      clientConfigFile: path.resolve(__dirname, './midash.ts'),
    },
  ],
}

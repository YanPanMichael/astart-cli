import { defineConfig } from "vitepress";

const BASE = "/";

export default defineConfig({
  lang: "zh-CN",
  base: BASE,
  appearance: true,
  title: "Astart-CLI",
  description: "Fast & Effective CLI Scaffold for Frontend",
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: "Astart-CLI",
    logo: "/favicon.ico",
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2022-present YanPan",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/YanPanMichael/astart-cli",
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z"></path><path fill="#fff" d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"></path>
        </svg>`},
        link: "https://www.npmjs.com/package/astart-cli",
      },
    ],
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "配置",
        items: [
          {
            text: "安装",
            link: "/installation/",
          },
          {
            text: "执行",
            link: "/installation/command",
          },
        ],
      },
      {
        text: "模版",
        items: [
          {
            text: "初始组件类ts解决方案",
            link: "/templates/ts-module",
          },
          {
            text: "初始react-app解决方案",
            link: "/templates/react-app",
          },
          {
            text: "初始vue3-app解决方案",
            link: "/templates/vue3-app",
          },
          {
            text: "初始webpack配置方案",
            link: "/templates/webpack",
          },
        ],
      },
      {
        text: "关于",
        link: "/about/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Astart-CLI指南",
          collapsible: true,
          items: [
            {
              text: "定义",
            },
            {
              text: "特性",
            },
            {
              text: "安装",
            },
            {
              text: "执行",
            }
          ],
        },
      ],
      "/installation/": [
        {
          text: "安装步骤",
          collapsible: true,
          items: [
            {
              text: "全局安装",
              link: "/installation/",
            },
          ],
        },
        {
          text: "执行脚本",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "执行命令",
              link: "/installation/command",
            },
          ],
        },
      ],
      "/templates/": [
        {
          text: "最优实践模版方案",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "初始组件类ts解决方案",
              link: "/templates/ts-module",
            },
            {
              text: "初始react-app解决方案",
              link: "/templates/react-app",
            },
            {
              text: "初始vue3-app解决方案",
              link: "/templates/vue3-app",
            },
            {
              text: "初始webpack配置方案",
              link: "/templates/webpack",
            },
          ],
        },
      ],
      "/about/": [
        {
          text: "关于作者",
          collapsible: true,
          items: [
            {
              text: "作者",
            },
            {
              text: "主页链接",
            },
            {
              text: "联系方式",
            },
          ],
        },
      ],
    },
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
});

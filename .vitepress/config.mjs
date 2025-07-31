import { defineConfig } from "vitepress";
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/rd-ROM/",
  title: "ROM Script description",
  description: "A VitePress Site",
  srcDir: "docs",
  // outDir: "../dist",
  //outDir 是 VitePress 配置中用于指定构建输出目录的关键设置。
  //它的作用是告诉 VitePress 在运行 npm run build 时，将生成的静态文件（HTML、CSS、JS 等）输出到哪个文件夹。
  head: [["link", { rel: "icon", href: "/rd-ROM/game-icon.ico" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/logo.png",

    nav: nav,
    sidebar: sidebar,

    lastUpdated: {
      text: "更新时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "short", // 时间显示 medium 有秒 short 没秒
      },
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    darkModeSwitchLabel: "外观",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outline: {
      label: "页面导航",
      level: "deep",
    },

    search: {
      provider: "local", // 提供者
      options: {
        translations: {
          // 搜索按钮
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          // 模式
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
});

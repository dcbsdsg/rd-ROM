---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

# 添加自定义脚本
# 使用 head 配置项添加脚本 脚本会在页面加载时执行 检查 localStorage 中是否有 isAuthenticated 标志 如果未登录且当前不是登录页面，则重定向到登录页
head:
   - ['script', {}, `
    if (typeof localStorage !== 'undefined') {
      const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
      if (!isAuthenticated && !window.location.pathname.includes('login.html')) {
        window.location.href = '/rd-ROM/login.html';
      }
    }
  `]

hero:
  name: "ROM"
  text: "王权之忆说明文档"
  tagline: 请保证你的所有皆为最新版本（xx/脚本）
  actions:
    - theme: brand
      text: 点击查看更新日志
      link: /更新日志

features:
  - title: xx版本
    details: 2025-07-27-A
  - title: Script版本
    details: v20250729A
  - title: 温馨提示
    details: 获取新脚本后请先查看更新日志了解更新情况
---

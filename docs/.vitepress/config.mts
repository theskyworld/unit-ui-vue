import { defineConfig } from "vitepress";
import VueMacros from "unplugin-vue-macros";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";

// 自定义网站配置
export default defineConfig({
  //网站title和描述
  title: "Unit UI",
  description: "Unit UI组件库",
  vite: {
    // 网站开发服务器运行端口
    server: {
      port: 3010,
      strictPort: true,
    },
    resolve: {
      // 配置路径别名
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },

    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
  },

  // 网站主题配置
  themeConfig: {
    logo:"/logo.png",
    // 首页nav bar的内容
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/button.md" },
    ],
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present created by tsw",
    },
    // 搜索框
    search: {
      provider: "local",
    },

    // 侧边栏
    sidebar: [
      {
        text: "基础组件",
        items: [
          {
            text: "按钮&nbsp;Button",
            link: "../components/button.md",
          },
          {
            text: "折叠面板&nbsp;Collapse",
            link: "../components/collapse.md",
          },
          {
            text: "弹出提示&nbsp;Tooltip",
            link: "../components/tooltip.md",
          },
          {
            text: "下拉菜单&nbsp;Dropdown",
            link: "../components/dropdown.md",
          },
          {
            text: "消息&nbsp;Message",
            link: "../components/message.md",
          },
          {
            text: "图标&nbsp;Icon",
            link: "../components/icon.md",
          },
        ],
      },
      {
        text: "表单组件",
        items: [
          {
            text: "输入框&nbsp;Input",
            link: "../components/input.md",
          },
          {
            text: "文本区域&nbsp;Textarea",
            link: "../components/textarea.md",
          },
          {
            text: "单选按钮&nbsp;Radio",
            link: "../components/radio.md",
          },
        ],
      },
    ],
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
});

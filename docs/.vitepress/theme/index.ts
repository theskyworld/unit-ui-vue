// .vitepress/theme/index.js
// 默认样式
import DefaultTheme from "vitepress/theme";
import { App } from "vue";

// 为preview组件使用NaiveUIContainer
import { NaiveUIContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";

// 添加组件的样式
import "@/styles/index.css";

// 图标
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// 注册需要使用的图标
library.add(fas);

// 自定义样式
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component("demo-preview", NaiveUIContainer);
  },
};

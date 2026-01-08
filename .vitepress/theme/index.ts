import {
  h
} from 'vue'
import type {
  Theme
} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import UmamiConfig from "./umami.config.js"
const Layout = () => {
  return h("div", null, [
    h(DefaultTheme.Layout, null, {}),
    h("script", {
      "defer": "defer",
      "src": "https://cloud.umami.is/script.js",
      "data-website-id": UmamiConfig.token
    }, {})
  ])
}
export default {
  extends: DefaultTheme,
  Layout,
}
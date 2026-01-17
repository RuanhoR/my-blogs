import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import UmamiConfig from './umami.config.js'
// 自定义 Layout 组件
const Layout = (props, { slots }) => {
  console.log(slots)
  return h('div', [
    h(DefaultTheme.Layout, props, slots),
    h('script', {
      defer: true,
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': UmamiConfig.token,
    })
  ])
}
export default {
  extends: DefaultTheme,
  Layout
}

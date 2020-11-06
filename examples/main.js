import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import '../packages/theme-chalk/src/index.scss'
import Vant from 'vant'
import 'vant/lib/index.css'

// 导入组件库
import {
  InfiniteButton,
  InfiniteLoading,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfinitePullRefresh,
  InfiniteToast,
  InfiniteTable
} from '../packages'

console.log('InfiniteEmpty', InfiniteEmpty)
console.log('InfiniteToast', InfiniteToast)
// 使用vant-ui
Vue.use(Vant)
Vue.config.productionTip = false
Vue.use(InfiniteButton)
  .use(InfiniteLoading)
  .use(InfiniteDatetimePicker)
  .use(InfiniteEmpty)
  .use(InfinitePullRefresh)
  .use(InfiniteToast)
  .use(InfiniteTable)

Vue.use(ElementUI)
Vue.component('demo-block', demoBlock)
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

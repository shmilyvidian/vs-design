// 手机模拟器内 组件路由
import MobileDatetimePicker from '../mobile-frame-view/DatetimePicker.vue'
import MobileHeaderNav from '../mobile-frame-view/InfiniteHeaderNav.vue'
import MobileEmpty from '../mobile-frame-view/InfiniteEmpty.vue'
import MobileTable from '../mobile-frame-view/InfiniteTable.vue'

const routes = [
  {
    path: '/mobile/InfiniteDatetimePicker',
    name: 'MobileDatetimePicker',
    meta: {
      mobile: true
    },
    component: MobileDatetimePicker
  },
  {
    path: '/mobile/InfiniteHeaderNav',
    name: 'MobileHeaderNav',
    meta: {
      mobile: true
    },
    component: MobileHeaderNav
  },
  {
    path: '/mobile/InfiniteEmpty',
    name: 'MobileEmpty',
    meta: {
      mobile: true
    },
    component: MobileEmpty
  },
  {
    path: '/mobile/InfiniteTable',
    name: 'MobileTable',
    meta: {
      mobile: true
    },
    component: MobileTable
  },
]
export default routes

// 手机模拟器内 组件路由
import MobileDatetimePicker from '../mobile-frame-view/InfiniteDatetimePicker.vue'
import MobileLoading from '../mobile-frame-view/InfiniteLoading.vue'
import MobileHeaderNav from '../mobile-frame-view/InfiniteHeaderNav.vue'
import MobileEmpty from '../mobile-frame-view/InfiniteEmpty.vue'
import MobileTable from '../mobile-frame-view/InfiniteTable.vue'
import MobileToast from '../mobile-frame-view/InfiniteToast.vue'
import MobilePicker from '../mobile-frame-view/InfinitePicker.vue'
import MobilePopup from '../mobile-frame-view/InfinitePopup.vue'
import MobileButton from '../mobile-frame-view/InfiniteButton.vue'
import MobilePullRefresh from '../mobile-frame-view/InfinitePullRefresh.vue'

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
    path: '/mobile/InfiniteLoading',
    name: 'MobileLoading',
    meta: {
      mobile: true
    },
    component: MobileLoading
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
  {
    path: '/mobile/InfiniteToast',
    name: 'MobileToast',
    meta: {
      mobile: true
    },
    component: MobileToast
  },
  {
    path: '/mobile/InfinitePicker',
    name: 'MobilePicker',
    meta: {
      mobile: true
    },
    component: MobilePicker
  },
  {
    path: '/mobile/InfinitePopup',
    name: 'MobilePopup',
    meta: {
      mobile: true
    },
    component: MobilePopup
  },
  {
    path: '/mobile/InfiniteButton',
    name: 'MobileButton',
    meta: {
      mobile: true
    },
    component: MobileButton
  },
  {
    path: '/mobile/InfinitePullRefresh',
    name: 'MobilePullRefresh',
    meta: {
      mobile: true
    },
    component: MobilePullRefresh
  }
]
export default routes

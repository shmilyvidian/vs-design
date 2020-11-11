import DatetimePicker from '../mobile-frame-view/DatetimePicker.vue'
import InfiniteLoading from '../mobile-frame-view/InfiniteLoading.vue'
import InfiniteHeaderNav from '../mobile-frame-view/InfiniteHeaderNav.vue'
import InfiniteEmpty from '../mobile-frame-view/InfiniteEmpty.vue'
import InfiniteTable from '../mobile-frame-view/InfiniteTable.vue'
import InfiniteToast from '../mobile-frame-view/InfiniteToast.vue'
import InfinitePicker from '../mobile-frame-view/InfinitePicker.vue'
import InfinitePopup from '../mobile-frame-view/InfinitePopup.vue'

const routes = [
  {
    path: '/mobile/DatetimePicker',
    name: 'DatetimePicker',
    meta: {
      mobile: true
    },
    component: DatetimePicker
  },
  {
    path: '/mobile/InfiniteLoading',
    name: 'InfiniteLoading',
    meta: {
      mobile: true
    },
    component: InfiniteLoading
  },
  {
    path: '/mobile/InfiniteHeaderNav',
    name: 'InfiniteHeaderNav',
    meta: {
      mobile: true
    },
    component: InfiniteHeaderNav
  },
  {
    path: '/mobile/InfiniteEmpty',
    name: 'InfiniteEmpty',
    meta: {
      mobile: true
    },
    component: InfiniteEmpty
  },
  {
    path: '/mobile/InfiniteTable',
    name: 'InfiniteTable',
    meta: {
      mobile: true
    },
    component: InfiniteTable
  },
  {
    path: '/mobile/InfiniteToast',
    name: 'InfiniteToast',
    meta: {
      mobile: true
    },
    component: InfiniteToast
  },
  {
    path: '/mobile/InfinitePicker',
    name: 'InfinitePicker',
    meta: {
      mobile: true
    },
    component: InfinitePicker
  },
  {
    path: '/mobile/InfinitePopup',
    name: 'InfinitePopup',
    meta: {
      mobile: true
    },
    component: InfinitePopup
  }
]
export default routes

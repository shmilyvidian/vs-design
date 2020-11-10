import DatetimePicker from '../mobileFrameView/DatetimePicker.vue'
import InfiniteLoading from '../mobileFrameView/InfiniteLoading.vue'
import InfiniteHeaderNav from '../mobileFrameView/InfiniteHeaderNav.vue'
import InfiniteEmpty from '../mobileFrameView/InfiniteEmpty.vue'
import InfiniteTable from '../mobileFrameView/InfiniteTable.vue'
import InfiniteToast from '../mobileFrameView/InfiniteToast.vue'

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
  }
]
export default routes

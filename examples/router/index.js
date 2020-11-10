import Vue from 'vue'
import Installation from '../docs/Installation.md'
import Button from '../docs/button.md'
import Loading from '../docs/loading.md'
import Empty from '../docs/empty.md'
import HeaderNav from '../docs/headerNav.md'
import DatetimePicker from '../docs/DatetimePicker.md'
import InfinitePullRefresh from '../docs/InfinitePullRefresh.md'
import InfiniteToast from '../docs/Toast.md'
import InfiniteTable from '../docs/Table.md'
import InfinitePopup from '../docs/InfinitePopup.md'
import InfinitePicker from '../docs/InfinitePicker.md'
import mobileIndex from '../view/index.vue'

import VueRouter from 'vue-router'
const routes = [
  {
    path: '/',
    component: Installation,
    name: 'default'
  },
  {
    path: '/guide/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/guide/button',
    name: 'Button',
    component: Button,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/loading',
    name: 'Loading',
    component: Loading,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/empty',
    name: 'Empty',
    component: Empty,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/headerNav',
    name: 'HeaderNav',
    component: HeaderNav,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/datetimepicker',
    name: 'DatetimePicker',
    component: DatetimePicker,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfinitePullRefresh',
    name: 'InfinitePullRefresh',
    component: InfinitePullRefresh,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfinitePopup',
    name: 'InfinitePopup',
    component: InfinitePopup,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfinitePicker',
    name: 'InfinitePicker',
    component: InfinitePicker,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfiniteToast',
    name: 'InfiniteToast',
    component: InfiniteToast,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfiniteTable',
    name: 'InfiniteTable',
    component: InfiniteTable,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/mobile/index',
    name: 'InfinitePopup',
    meta:{
      mobile:true
    },
    component: mobileIndex
  }

]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router

import Vue from 'vue'
import Installation from '../docs/Installation.md'
import Button from '../docs/button.md'
import InfiniteLoading from '../docs/loading.md'
import InfiniteEmpty from '../docs/empty.md'
import InfiniteHeaderNav from '../docs/headerNav.md'
import DatetimePicker from '../docs/DatetimePicker.md'
import InfinitePullRefresh from '../docs/InfinitePullRefresh.md'
import InfiniteToast from '../docs/Toast.md'
import InfiniteTable from '../docs/Table.md'
import InfinitePopup from '../docs/InfinitePopup.md'
import InfinitePicker from '../docs/InfinitePicker.md'

import route from './mobileFrameRoute'

import VueRouter from 'vue-router'
let routes = [
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
    path: '/guide/InfiniteButton',
    name: 'InfiniteButton',
    component: Button,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfiniteLoading',
    name: 'InfiniteLoading',
    component: InfiniteLoading,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfiniteEmpty',
    name: 'InfiniteEmpty',
    component: InfiniteEmpty,
    meta: {
      type: 'component'
    }
  },
  {
    path: '/guide/InfiniteHeaderNav',
    name: 'InfiniteHeaderNav',
    component: InfiniteHeaderNav,
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
]
routes = routes.concat(route)
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router

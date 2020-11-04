import Vue from 'vue'
import Installation from '../docs/Installation.md'
import Button from '../docs/button.md'
import Loading from '../docs/loading.md'
import Empty from '../docs/empty.md'
import DatetimePicker from '../docs/DatetimePicker.md'

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
    path: '/guide/datetimepicker',
    name: 'DatetimePicker',
    component: DatetimePicker,
    meta: {
      type: 'component'
    }
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router

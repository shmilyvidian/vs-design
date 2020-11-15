import Vue from 'vue'
import Installation from '../docs/Installation.md'
import InfiniteEmpty from '../docs/empty.md'
import InfiniteHeaderNav from '../docs/headerNav.md'
import DatetimePicker from '../docs/DatetimePicker.md'
import InfiniteTable from '../docs/Table.md'
import InfiniteInstitutionalFilter from '../docs/InfiniteInstitutionalFilter.md'

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
    path: '/guide/DatetimePicker',
    name: 'InfiniteDatetimePicker',
    component: DatetimePicker,
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
    path: '/guide/InfiniteInstitutionalFilter',
    name: 'InfiniteInstitutionalFilter',
    component: InfiniteInstitutionalFilter,
    meta: {
      type: 'component'
    }
  }
]
routes = routes.concat(route)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法, 捕获重复点击路由时的报错
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router

import Vue from 'vue'
import { componentName } from "examples/constants";
import VsInstallation from '../docs/VsInstallation.md'
import VsEmpty from '../docs/VsEmpty.md'
import VsHeaderNav from '../docs/VsHeaderNav.md'
import VsDatetimePicker from '../docs/VsDatetimePicker.md'
import VsTable from '../docs/VsTable.md'
import VsInstitutionalFilter from '../docs/VsInstitutionalFilter.md'

import route from './mobileFrameRoute'

import VueRouter from 'vue-router'
let routes = [
  {
    path: '/',
    component: VsInstallation,
    name: 'default'
  },
  {
    path: `/guide/${componentName}Installation`,
    name: 'Installation',
    component: VsInstallation
  },
  {
    path: `/guide/${componentName}Empty`,
    name: `${componentName}Empty`,
    component: VsEmpty,
    meta: {
      type: 'component'
    }
  },
  {
    path: `/guide/${componentName}HeaderNav`,
    name: `${componentName}HeaderNav`,
    component: VsHeaderNav,
    meta: {
      type: 'component'
    }
  },
  {
    path: `/guide/${componentName}DatetimePicker`,
    name: `${componentName}DatetimePicker`,
    component: VsDatetimePicker,
    meta: {
      type: 'component'
    }
  },
  {
    path: `/guide/${componentName}Table`,
    name: `${componentName}Table`,
    component: VsTable,
    meta: {
      type: 'component'
    }
  },
  {
    path: `/guide/${componentName}InstitutionalFilter`,
    name: `${componentName}InstitutionalFilter`,
    component: VsInstitutionalFilter,
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

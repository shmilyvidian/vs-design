/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteDatetimePicker from './infinite-datetime-picker'
import InfiniteEmpty from './infinite-empty'
import InfiniteHeaderNav from './infinite-header-nav'
import VsInstitutionalFilter from './vs-institutional-filter'
import InfiniteSectionCard from './infinite-section-card'
import InfiniteTable from './infinite-table'
import InfiniteTouchEmulator from './infinite-touch-emulator'
const version = '0.0.24'
const components = [
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
  VsInstitutionalFilter,
  InfiniteSectionCard,
  InfiniteTable,
  InfiniteTouchEmulator
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })

};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  version,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
  VsInstitutionalFilter,
  InfiniteSectionCard,
  InfiniteTable,
  InfiniteTouchEmulator
}
export default {
  install,
  version,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
  VsInstitutionalFilter,
  InfiniteSectionCard,
  InfiniteTable,
  InfiniteTouchEmulator
}

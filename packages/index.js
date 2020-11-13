/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteButton from './infinite-button'
import InfiniteDatetimePicker from './infinite-datetime-picker'
import InfiniteEmpty from './infinite-empty'
import InfiniteHeaderNav from './infinite-header-nav'
import InfiniteLoading from './infinite-loading'
import InfinitePicker from './infinite-picker'
import InfinitePopup from './infinite-popup'
import InfinitePullRefresh from './infinite-pull-refresh'
import InfiniteTable from './infinite-table'
import InfiniteToast from './infinite-toast'
import InfiniteTouchEmulator from './infinite-touch-emulator'
const version = '0.0.1'
const components = [
  InfiniteButton,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
  InfiniteLoading,
  InfinitePicker,
  InfinitePopup,
  InfinitePullRefresh,
  InfiniteTable,
  InfiniteToast,
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
  InfiniteButton,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
  InfiniteLoading,
  InfinitePicker,
  InfinitePopup,
  InfinitePullRefresh,
  InfiniteTable,
  InfiniteToast,
  InfiniteTouchEmulator
}
export default {
  install,
  version
}

/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteButton from './infinite-button'
import InfiniteLoading from './infinite-loading'
import InfiniteDatetimePicker from './infinite-datetime-picker'
import InfiniteEmpty from './infinite-empty'
import InfinitePullRefresh from './infinite-pull-refresh'
import InfiniteToast from './infinite-toast'
import InfiniteTable from './infinite-table'
import InfinitePopup from './infinite-popup'
import InfiniteHeaderNav from './infinite-header-nav'

const version = '0.0.3'
const components = [
  InfiniteButton,
  InfiniteLoading,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfinitePullRefresh,
  InfiniteToast,
  InfiniteTable,
  InfiniteHeaderNav,
  InfinitePopup
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
  InfiniteLoading,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfinitePullRefresh,
  InfiniteToast,
  InfiniteHeaderNav,
  InfiniteTable,
  InfinitePopup
}
export default {
  install,
  version
}


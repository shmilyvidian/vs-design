/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import InfiniteButton from './infinite-button'
import InfiniteLoading from './infinite-loading'
import InfiniteDatetimePicker from './infinite-datetime-picker'
import InfiniteEmpty from './infinite-empty'
import InfinitePullRefresh from './infinite-pull-refresh'
import InfiniteToast from './infinite-toast'
import InfiniteTable from './infinite-table'

const version = '0.0.3'
const components = [
  InfiniteButton,
  InfiniteLoading,
  InfiniteDatetimePicker,
  InfiniteEmpty,
  InfinitePullRefresh,
  InfiniteToast,
  InfiniteTable,
]
const install = Vue => {
  components.forEach(Component => {
    Vue.use(Component)
  })

};
console.log('test');
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
  InfiniteTable
}
export default {
  install,
  version
}


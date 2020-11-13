/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import InfiniteDatetimePicker from './infinite-datetime-picker'
import InfiniteEmpty from './infinite-empty'
import InfiniteHeaderNav from './infinite-header-nav'
import InfiniteTable from './infinite-table'
import InfiniteTouchEmulator from './infinite-touch-emulator'
    const version = '0.0.1'
    const components = [
      InfiniteDatetimePicker,
  InfiniteEmpty,
  InfiniteHeaderNav,
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
  InfiniteTable,
  InfiniteTouchEmulator
    }
    export default {
      install,
      version
    }
  
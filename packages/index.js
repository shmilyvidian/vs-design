/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import VsDatetimePicker from './vs-datetime-picker'
import VsEmpty from './vs-empty'
import VsHeaderNav from './vs-header-nav'
import VsInstitutionalFilter from './vs-institutional-filter'
import VsSectionCard from './vs-section-card'
import VsTable from './vs-table'
import VsTouchEmulator from './vs-touch-emulator'
    const version = '0.0.2'
    const components = [
      VsDatetimePicker,
  VsEmpty,
  VsHeaderNav,
  VsInstitutionalFilter,
  VsSectionCard,
  VsTable,
  VsTouchEmulator
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
      VsDatetimePicker,
  VsEmpty,
  VsHeaderNav,
  VsInstitutionalFilter,
  VsSectionCard,
  VsTable,
  VsTouchEmulator
    }
    export default {
      install,
      version,
      VsDatetimePicker,
  VsEmpty,
  VsHeaderNav,
  VsInstitutionalFilter,
  VsSectionCard,
  VsTable,
  VsTouchEmulator
    }
  
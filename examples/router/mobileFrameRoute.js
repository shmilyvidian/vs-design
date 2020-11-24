// 手机模拟器内 组件路由
import { componentName } from "examples/constants";
import MobileDatetimePicker from '../mobile-frame-view/VsDatetimePicker.vue'
import MobileHeaderNav from '../mobile-frame-view/VsHeaderNav.vue'
import MobileEmpty from '../mobile-frame-view/VsEmpty.vue'
import MobileTable from '../mobile-frame-view/VsTable.vue'
import MobileInstitutionalFilter from '../mobile-frame-view/VsInstitutionalFilter.vue'

console.log('componentName', componentName);
const routes = [{
  path: `/mobile/${componentName}DatetimePicker`,
  name: 'MobileDatetimePicker',
  meta: {
    mobile: true
  },
  component: MobileDatetimePicker
},
{
  path: `/mobile/${componentName}HeaderNav`,
  name: 'MobileHeaderNav',
  meta: {
    mobile: true
  },
  component: MobileHeaderNav
},
{
  path: `/mobile/${componentName}Empty`,
  name: 'MobileEmpty',
  meta: {
    mobile: true
  },
  component: MobileEmpty
},
{
  path: `/mobile/${componentName}Table`,
  name: 'MobileTable',
  meta: {
    mobile: true
  },
  component: MobileTable
},
{
  path: `/mobile/${componentName}InstitutionalFilter`,
  name: 'MobileInstitutionalFilter',
  meta: {
    mobile: true
  },
  component: MobileInstitutionalFilter
}
]
export default routes

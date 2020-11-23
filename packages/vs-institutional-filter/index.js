import VsInstitutionalFilter from './src/index'

// 为组件提供 install 安装方法，供按需引入
VsInstitutionalFilter.install = function (Vue) {
  Vue.component(VsInstitutionalFilter.name, VsInstitutionalFilter)
}
export default VsInstitutionalFilter

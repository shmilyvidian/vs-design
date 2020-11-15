import infiniteInstitutionalFilter from './src/index'

// 为组件提供 install 安装方法，供按需引入
infiniteInstitutionalFilter.install = function (Vue) {
  Vue.component(infiniteInstitutionalFilter.name, infiniteInstitutionalFilter)
}
export default infiniteInstitutionalFilter

import VsHeaderNav from './src/index'
// 为组件提供 install 安装方法，供按需引入
VsHeaderNav.install = function (Vue) {
  Vue.component(VsHeaderNav.name, VsHeaderNav)
}
export default VsHeaderNav

import VsEmpty from './src/index'

// 为组件提供 install 安装方法，供按需引入
VsEmpty.install = function (Vue) {
  Vue.component(VsEmpty.name, VsEmpty)
}
export default VsEmpty

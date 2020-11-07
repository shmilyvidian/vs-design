import InfinitePopup from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfinitePopup.install = function (Vue) {
  Vue.component(InfinitePopup.name, InfinitePopup)
}
export default InfinitePopup

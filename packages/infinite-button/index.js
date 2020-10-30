import InfiniteButton from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteButton.install = function (Vue) {
  Vue.component(InfiniteButton.name, InfiniteButton)
}
export default InfiniteButton

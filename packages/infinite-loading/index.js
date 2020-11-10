import InfiniteLoading from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteLoading.install = function (Vue) {
  Vue.component(InfiniteLoading.name, InfiniteLoading)
}
export default InfiniteLoading

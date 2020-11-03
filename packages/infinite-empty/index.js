import InfiniteEmpty from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteEmpty.install = function (Vue) {
  Vue.component(InfiniteEmpty.name, InfiniteEmpty)
}
export default InfiniteEmpty

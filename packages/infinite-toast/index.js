import InfiniteToast from './src/index'
// 为组件提供 install 安装方法，供按需引入
InfiniteToast.install = function (Vue) {
  if (!InfiniteToast.init) {
    InfiniteToast.init = true
    Vue.use(InfiniteToast)
    Vue.prototype.$infiniteToast = InfiniteToast
  }
}
export default InfiniteToast

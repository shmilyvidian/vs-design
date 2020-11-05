import InfinitePullRefresh from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfinitePullRefresh.install = function (Vue) {
  Vue.component(InfinitePullRefresh.name, InfinitePullRefresh)
}
export default InfinitePullRefresh

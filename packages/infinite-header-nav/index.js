import InfiniteHeaderNav from './src/index'
console.log('install InfiniteHeaderNav', InfiniteHeaderNav);
// 为组件提供 install 安装方法，供按需引入
InfiniteHeaderNav.install = function (Vue) {
  Vue.component(InfiniteHeaderNav.name, InfiniteHeaderNav)
}
export default InfiniteHeaderNav
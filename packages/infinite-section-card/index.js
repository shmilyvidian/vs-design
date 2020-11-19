import infiniteSectionCard from './src/index'

// 为组件提供 install 安装方法，供按需引入
infiniteSectionCard.install = function (Vue) {
  Vue.component(infiniteSectionCard.name, infiniteSectionCard)
}
export default infiniteSectionCard

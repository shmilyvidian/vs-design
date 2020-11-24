import VsSectionCard from './src/index'

// 为组件提供 install 安装方法，供按需引入
VsSectionCard.install = function (Vue) {
  Vue.component(VsSectionCard.name, VsSectionCard)
}
export default VsSectionCard

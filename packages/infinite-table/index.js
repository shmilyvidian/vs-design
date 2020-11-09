import infiniteTable from './src/index'

// 为组件提供 install 安装方法，供按需引入
infiniteTable.install = function (Vue) {
  Vue.component(infiniteTable.name, infiniteTable)
}
export default infiniteTable

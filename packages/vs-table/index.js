import VsTable from './src/index'

// 为组件提供 install 安装方法，供按需引入
VsTable.install = function (Vue) {
  Vue.component(VsTable.name, VsTable)
}
export default VsTable

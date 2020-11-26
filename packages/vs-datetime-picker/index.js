import VsDatetimePicker from './src/index'

// 为组件提供 install 安装方法，供按需引入
VsDatetimePicker.install = function (Vue) {
  Vue.component(VsDatetimePicker.name, VsDatetimePicker)
}
export default VsDatetimePicker

import InfiniteDatetimePicker from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfiniteDatetimePicker.install = function (Vue) {
  Vue.component(InfiniteDatetimePicker.name, InfiniteDatetimePicker)
}
export default InfiniteDatetimePicker

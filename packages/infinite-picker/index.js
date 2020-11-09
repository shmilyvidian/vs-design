import InfinitePicker from './src/index'

// 为组件提供 install 安装方法，供按需引入
InfinitePicker.install = function (Vue) {
  Vue.component(InfinitePicker.name, InfinitePicker)
}
export default InfinitePicker

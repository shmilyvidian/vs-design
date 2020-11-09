import VanToast from 'vant/lib/toast'

// console.log('VanToast', VanToast)
// const InfiniteToast = { ...VanToast }
// export default InfiniteToast

// import infiniteToast from 'vant/lib/toast'
// var _vue = require('vue')
// var _Toast = require('vant/lib/toast')
// console.log('VanToast -- vue == ', VanToast)
// Toast.install = function () {
//   _vue.default.use(_Toast.default);
// };
// // export default VanToast
// var _default = Toast;
// exports.default = _default;

const InfiniteToast = (name, that) => {
  VanToast.apply(this, [name])
}
// InfiniteToast.prototype = new VanToast()
// console.log('Object.keys(VanToast) == ', Object.keys(VanToast))
Object.keys(VanToast).forEach((key) => {
  InfiniteToast[key] = VanToast[key]
})

export default InfiniteToast

## toast 组件
### 介绍
`在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。`

### 基础用法
:::demo 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $infiniteToast 方法，便于在组件内调用。
```html
  <el-row>
      <infinite-button @click="infiniteToastText">文字提示</infinite-button>
      <infinite-button type="primary" @click="infiniteToastLoading">加载提示</infinite-button>
      <infinite-button type="success" @click="infiniteToastSuccess">成功提示</infinite-button>
      <infinite-button type="info" @click="infiniteToastFail">失败提示</infinite-button>
  </el-row>
  <script>
    export default {
      methods: {
        infiniteToastText() {
          this.$infiniteToast('提示内容');
        },
        infiniteToastLoading() {
          this.$infiniteToast.loading({
            message: '加载中...',
            forbidClick: true,
          });
        },
        infiniteToastSuccess() {
          this.$infiniteToast.success('成功文案');
        },
        infiniteToastFail() {
          this.$infiniteToast.fail('失败文案');
        }
      }
    }
  </script>
```
:::

### 自定义图标
:::demo 
```html
  <el-row>
      <infinite-button type="warning" @click="infiniteToastIcon">自定义图标提示</infinite-button>
      <infinite-button type="danger" @click="infiniteToastImg">自定义图片提示</infinite-button>
      <infinite-button type="danger" @click="infiniteToastTypeIcon">自定义加载图标提示</infinite-button>
  </el-row>
  <script>
    export default {
      methods: {
        infiniteToastIcon() {
          this.$infiniteToast({
            message: '自定义图标',
            icon: 'like-o',
          });
        },
        infiniteToastImg() {
          this.$infiniteToast({
            message: '自定义图片',
            icon: 'https://img.yzcdn.cn/vant/logo.png',
          });
        },
        infiniteToastTypeIcon () {
          this.$infiniteToast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner'
          })
        }
      }
    }
  </script>
```
:::

### 自定义位置
:::demo 
```html
  <el-row>
      <infinite-button plain @click="infiniteToastPositionTop">自定义顶部提示</infinite-button>
      <infinite-button type="primary" plain @click="infiniteToastPositionBottom">自定义底部提示</infinite-button>
  </el-row>
  <script>
    export default {
      methods: {
        infiniteToastPositionTop() {
          this.$infiniteToast({
            message: '自定义顶部提示',
            position: 'top',
          });
        },
        infiniteToastPositionBottom() {
          this.$infiniteToast({
            message: '自定义底部提示',
            position: 'bottom',
          });
        }
      }
    }
  </script>
```
:::

### 动态更新提示
:::demo 
```html
  <el-row>
      <infinite-button type="success" plain @click="infiniteToastPromise">动态更新提示</infinite-button>
  </el-row>
  <script>
    export default {
      methods: {
        infiniteToastPromise() {
          const toast = this.$infiniteToast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '倒计时 3 秒',
          });

          let second = 3;
          const timer = setInterval(() => {
            second--;
            if (second) {
              toast.message = `倒计时 ${second} 秒`;
            } else {
              clearInterval(timer);
              // 手动清除 Toast
              this.$infiniteToast.clear();
            }
          }, 1000);
        }
      }
    }
  </script>
```
:::


## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Toast | 展示提示 | `options | message` | toast 实例 |
| Toast.loading | 展示加载提示 | `options | message` | toast 实例 |
| Toast.success | 展示成功提示 | `options | message` | toast 实例 |
| Toast.fail | 展示失败提示 | `options | message` | toast 实例 |
| Toast.clear | 关闭提示 | `clearAll: boolean` | `void` |
| Toast.allowMultiple | 允许同时存在多个 Toast | - | `void` |
| Toast.setDefaultOptions | 修改默认配置，对所有 Toast 生效。<br>传入 type 可以修改指定类型的默认配置 | `type | options` | `void` |
| Toast.resetDefaultOptions | 重置默认配置，对所有 Toast 生效。<br>传入 type 可以重置指定类型的默认配置 | `type` | `void` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `loading` `success`<br>`fail` `html` | _string_ | `text` |
| position | 位置，可选值为 `top` `bottom` | _string_ | `middle` |
| message | 文本内容，支持通过`\n`换行 | _string_ | `''` | - |
| icon | 自定义图标，支持传入[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| overlay | 是否显示背景遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否在点击后关闭 | _boolean_ | `false` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭 | _boolean_ | `false` |
| loadingType | [加载图标类型](#/zh-CN/loading), 可选值为 `spinner` | _string_ | `circular` |
| duration | 展示时长(ms)，值为 0 时，toast 不会消失 | _number_ | `2000` |
| className | 自定义类名 | _any_ | - |
| onOpened | 完全展示后的回调函数 | _Function_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |
| transition | 动画类名，等价于 [transtion](https://cn.vuejs.org/v2/api/index.html#transition) 的`name`属性 | _string_ | `van-fade` |
| getContainer | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | `body` |

## InfinitePopup 组件
### 介绍
`弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。`

### 基础用法
:::demo 基础的按钮用法。
```html
  <el-row>
    <infinite-button @click="onClick">默认按钮</infinite-button>
    <infinite-popup
      v-model='show'
      @onClickOverlay="onClickOverlay"
    ></infinite-popup>
  </el-row>

  <script>
    export default {
      data() {
        return {
          show: false,
        }
      },
      methods: {
        onClick() {
          this.show = true
        },
        onClickOverlay(){
          this.show = false
        }
      }
    }
  </script>
```
:::

### 弹出位置
:::demo 通过 position 属性设置弹出位置，默认居中弹出，可以设置为 top、bottom、left、right。
```html
  <el-row>
    <infinite-button @click="onClick">默认按钮</infinite-button>
    <infinite-popup
      v-model='show'
      position="top"
      @onClickOverlay="onClickOverlay"
    ></infinite-popup>
  </el-row>

  <script>
    export default {
      data() {
        return {
          show: false,
        }
      },
      onClickOverlay() {
        this.show = false;
      },
    };
  </script>
```
:::

## API

### Props

| 参数                | 说明                                     | 类型             | 默认值   |
| ------------------- | ---------------------------------------- | ---------------- | -------- |
| show                | 是否处于加载中状态                       | _Boolean_          | false    |
| zIndex              | z-index 层级                             | _Number_           | 100      |
| overlay             | 是否显示遮罩层                           | _Boolean_          | true     |
| position            | 弹出位置，可选值为 top bottom right left | _String_           | 'center' |
| duration            | 动画时长，单位为毫秒                     | _[Number, Object]_ | 300      |
| round               | 是否显示圆角                             | _Boolean_          | false    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                   | _Boolean_          | true     |

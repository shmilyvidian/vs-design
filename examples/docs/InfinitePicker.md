## InfinitePicker 组件

弹窗

### 基础用法

基础的按钮用法。
:::demo 

```html
  <el-row>
    <infinite-button @click="onClick">默认按钮</infinite-button>
    <infinite-picker
    ></infinite-picker>
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

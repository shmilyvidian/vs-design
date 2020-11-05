## infinite-pull-refresh 组件

下拉刷新功能

### 基础用法

基础的按钮用法。
:::demo 使用`pullingText`传入加载文案

```html
  <el-row>
    <infinite-pull-refresh
      v-model='isLoading'
      :pullingText='pullingText'
      @onRefresh='onRefresh'
    ></infinite-pull-refresh>
  </el-row>

  <script>
    export default {
      data() {
        return {
          isLoading: false,
          pullingText:'测试'
        }
      },
      methods: {
        onRefresh() {
          this.isLoading =false
        }
      }
    }
  </script>
```

:::

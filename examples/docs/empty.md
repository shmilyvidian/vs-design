## empty 组件

暂无数据

### 基础用法

基础的按钮用法。
:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-empty
    type="spinner"
    color="orange"
    size="36"
    textSize="18"
    loadingText="加载中。。。"
    @handleClick="handleClick"
  ></infinite-empty>
</el-row>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      handleClick(val) {
        console.log("clicked parent loading", val);
      }
    }
  }
</script>
```

:::

## loading 组件

加载功能

### 基础用法

基础的按钮用法。
:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading
    :type="loadingType"
    :color="loadingColor"
    :size="loadingSize"
    :textSize="loadingTextSize"
    :loadingText="loadingText"
  ></infinite-loading>
</el-row>
<script>
  export default {
    data() {
      return {
        loadingType: "spinner",
        loadingColor: "lightblue",
        loadingSize: "36",
        loadingTextSize: "18",
        loadingText: "加载中。。。123"
      }
    },
    methods: {
      handleClick(val) {
        console.log(val, "clicked the button")
      }
    }
  }
</script>
```

:::

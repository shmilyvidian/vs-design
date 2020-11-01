## loading 组件

加载功能

### 基础用法

基础的按钮用法。
:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading></infinite-loading>
</el-row>
<script>
  export default {
    methods: {
      handleClick(val) {
        console.log(val, "clicked the button")
      }
    }
  }
</script>
```

:::

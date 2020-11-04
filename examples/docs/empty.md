## empty 组件

暂无数据

### 基础用法

基础的按钮用法。
:::demo 使用`imageType`传图片类型，可选值为 error network search，支持传入图片 URL； 使用`imageSize`传图片大小，默认单位为 px； 使用`imageSize`传图片下方的描述文字


```html
<el-row>  
  <infinite-empty
    imageType="network"
    imageSize="100"
    description="这是empty组件"
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

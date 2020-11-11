## empty 组件

空状态时的占位提示

### 基础用法

:::demo


```html
<el-row>  
  <infinite-empty>
  </infinite-empty>
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

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

:::demo 使用`imageType`传图片类型，可选值为 error network search，支持传入图片 URL； 使用`imageSize`传图片大小，默认单位为 px； 使用`imageSize`传图片下方的描述文字


```html
<el-row>  
  <infinite-empty
    imageType="network"
    imageSize="100"
    description="network图片类型"
  >
  </infinite-empty>
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


### 底部内容

通过默认插槽可以在 Empty 组件的下方插入内容。

:::demo 


```html
<el-row>  
  <infinite-empty
    imageType="search"
    imageSize="100"
    description="通过description自定义文案"
  >
   <p>自定义内容</p>
  </infinite-empty>
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


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| imageType | 图片类型，可选值为 error network search，支持传入图片 URL | string | default |
| imageSize | 图片大小，默认单位为 px | string/number | - |
| description | 图片下方的描述文字 | string | - |
| insertStyle | 动态传入容器样式 | object | - |
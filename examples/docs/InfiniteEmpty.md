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

:::demo 使用`imageType`传图片类型，可选值为noUpdate, noData, noMessage, noFinish, noTask, noNetwork，支持传入图片 URL； 使用`imageSize`传图片大小，默认单位为 px； 使用`description`传图片下方的描述文字


```html
<el-row>  
  <infinite-empty
    imageType="noData"
    imageSize="100px"
    description="noData图片类型"
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
    imageType="noUpdate"
    imageSize="100px"
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


### 自定义样式

通过insertStyle添加自定义样式, container对象可修改容器样式, description对象可修改描述信息样式

:::demo 


```html
<el-row>  
  <infinite-empty
    imageType="noUpdate"
    imageSize="100px"
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
| imageType | 图片类型，可选值为 error network search，支持传入图片 URL | _string_ | default |
| imageSize | 图片大小，默认单位为 px | _string/number_ | - |
| description | 图片下方的描述文字 | _string_ | - |
| insertStyle | 动态传入容器样式 | _object_ | - |
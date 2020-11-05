## loading 组件

加载功能

### 基础用法

:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading></infinite-loading>
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

### 加载类型
通过 type 属性可以设置加载图标的类型，默认为 circular，可选值为 spinner。

:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading
    type="spinner"
    @handleClick="handleClick"
  ></infinite-loading>
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


### 自定义颜色
通过 color 属性设置加载图标的颜色。

### 自定义大小
通过 size 属性设置加载图标的大小，默认单位为 px。

:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading
    type="spinner"
    color="orange"
    size="60"
    @handleClick="handleClick"
  ></infinite-loading>
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


### 加载文案
可以使用默认插槽在图标的右侧插入加载文案。

:::demo 使用`loadingText`传入加载文案

```html
<el-row>
  <infinite-loading
    type="spinner"
    color="orange"
    size="60"
    loadingText="测试文案"
    @handleClick="handleClick"
  ></infinite-loading>
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

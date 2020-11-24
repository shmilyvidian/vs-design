## headerNav 组件



### 基础用法

:::demo


```html
<el-row>  
  <vs-header-nav>
  </vs-header-nav>
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

### 通过slot传入 左侧、中间、右侧的内容


:::demo 使用slot="leftItem" slot="centerItem" slot="rightItem" 传入内容

```html
<el-row>  
  <vs-header-nav class="header-nav" @goBack="goBackClick">
    <div slot="leftItem">
      返回
    </div>
    <div slot="centerItem">
      {{headerTitle}}
    </div>
    <div slot="rightItem">
      提交
    </div>
  </vs-header-nav>
</el-row>
<script>
  export default {
    data() {
      return {
        headerTitle: '中间文字'
      }
    },
    methods: {
      goBackClick(val) {
        console.log("clicked parent loading", val);
        this.headerTitle = val ? val.name : '中间文字'
      }
    }
  }
</script>
```

:::



### useVantIcon


:::demo 通过useVantIcon选择是否使用vant默认图标，设为false则可通过slot="leftItem"传入自定义图标

```html
<el-row class="infinite-doc-demo-block-row">
  <vs-header-nav :useVantIcon="false">
    <div slot="leftItem">
      <img class="arrow-icon" :src="require('../../packages/theme-chalk/src/imgs/arrow.png')" alt="arrow-icon">
      <span>返回</span>
    </div>
    <div slot="centerItem">
      标题
    </div>
    <div slot="rightItem">
      提交
    </div>
  </vs-header-nav>
</el-row>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      goBackClick(val) {
        console.log("clicked parent loading", val);
      }
    }
  }
</script>
```

:::


### showBackIcon


:::demo 通过showBackIcon控制左侧的icon显示

```html
<el-row>  
  <vs-header-nav class="header-nav" @goBack="goBackClick" :showBackIcon="showBackIcon">
    <div slot="leftItem">
      返回
    </div>
    <div slot="centerItem">
      {{headerTitle}}
    </div>
    <div slot="rightItem">
      提交
    </div>
  </vs-header-nav>
</el-row>
<script>
  export default {
    data() {
      return {
        headerTitle: '中间文字',
        showBackIcon: false
      }
    },
    methods: {
      goBackClick(val) {
        console.log("clicked parent loading", val);
        this.headerTitle = val ? val.name : '中间文字'
      }
    }
  }
</script>
```

:::



### 通过insertStyle对象传入需要的样式


:::demo

```html
<el-row>  
  <vs-header-nav 
    :insertStyle="insertStyle"
    @goBack="goBackClick">
    <div slot="leftItem">
      左文字
    </div>
    <div slot="centerItem">
      中间文字
    </div>
    <div slot="rightItem">
      右文字
    </div>
  </vs-header-nav>
</el-row>
<script>
  export default {
    data() {
      return {
        insertStyle: { background: '#fff', color: 'lightblue', fontSize: '28px', paddingTop: '10px'}
      }
    },
    methods: {
      goBackClick(val) {
        console.log("parent goBackClick", val);
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
| size | icon大小，默认单位为 px | _string/number_ | 18px |
| color | 定制icon颜色 | _string_ | orange |
| useVantIcon | 是否使用vant默认图标 | _Boolean_ | true |
| showBackIcon | 是否展示返回ICON | _Boolean_ | true |
| insertStyle | 动态传入容器样式 | _object_ | - |
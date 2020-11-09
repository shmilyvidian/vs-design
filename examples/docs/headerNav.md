## headerNav 组件



### 基础用法

:::demo


```html
<el-row>  
  <infinite-header-nav>
  </infinite-header-nav>
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
  <infinite-header-nav @goBack="goBackClick">
    <div slot="leftItem">
      左文字
    </div>
    <div slot="centerItem">
      {{headerTitle}}
    </div>
    <div slot="rightItem">
      右文字
    </div>
  </infinite-header-nav>
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


### 通过insertStyle对象传入需要的样式


:::demo

```html
<el-row>  
  <infinite-header-nav 
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
  </infinite-header-nav>
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
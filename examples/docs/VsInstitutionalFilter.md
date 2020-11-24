## 机构筛选器 组件

### 介绍

标准组件用法 `columns`结构参考下方文档

:::demo

```html
<vs-institutional-filter
  :columns="columns"
  v-model="showModel"
  @onConfirm="onConfirm"
></vs-institutional-filter>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      onConfirm(val) {
        console.log("clicked parent loading", val);
      },
    },
  };
</script>
```

:::

事件包括 `onConfirm` `onCancel` `onClickOverlay`

:::demo

```html
<vs-institutional-filter
  :columns="columns"
  v-model="showModel"
  @onConfirm="onConfirm"
  @onCancel="onCancel"
  @onClickOverlay="onClickOverlay"
></vs-institutional-filter>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      onConfirm(val) {
        console.log( val);
      },
      onCancel(val) {
        console.log( val);
      },
      onClickOverlay(val) {
        console.log( val);
      },
    },
  };
</script>
```

:::

事件包括 `showSearch` 是否显示输入框

:::demo

```html
<vs-institutional-filter
  :columns="columns"
  v-model="showModel"
  :showSearch="showSearch"
  @onConfirm="onConfirm"
></vs-institutional-filter>
<script>
  export default {
    data() {
      return {
        showSearch: false
      };
    },
    methods: {
      onConfirm(val) {
        console.log( val);
      }
    },
  };
</script>
```

:::

### Props

| 参数             | 说明                      | 类型      | 默认值 |
| ---------------- | ------------------------- | --------- | ------ |
| columns          | 树形结构，参考[columns]   | _Object_  | []     |
| showModel        | 控制弹窗显示              | _Boolean_ | false  |
| headerMap        | 表头内容自定义            | _Array_   | []     |
| showSearch       | 是否显示搜索框            | _Boolean_ | true   |
| showNameToHeader | 是否将选中值显示在 header | _Boolean_ | true   |
| wrappperStyle    | 自定义整体样式            | _Object_  | {}     |

### Event

| 参数           | 说明       | 类型       | 默认值 |
| -------------- | ---------- | ---------- | ------ |
| onConfirm      | 确认回调   | _Array_    | []     |
| onCancel       | 取消回调   | _Function_ |        |
| onClickOverlay | 遮罩层回调 | _Function_ |        |

### columns

```js
columns: {
  children: [],
  name: '名称',
  code: '枚举'
}
```

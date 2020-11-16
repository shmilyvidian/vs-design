## 机构筛选器 组件

### 介绍

统一机构筛选器

:::demo

```html
  <infinite-institutional-filter
    :columns="columns"
    v-model="showModle"
  ></infinite-institutional-filter>
```

:::

### Props

| 参数      | 说明           | 类型      | 默认值 |
| --------- | -------------- | --------- | ------ |
| columns   | 树形结构，参考[columns]       | _Object_  | []     |
| showModle | 控制弹窗显示   | _Boolean_ | false  |
| headerMap | 表头内容自定义 | _Array_   | []     |

### Event

| 参数      | 说明     | 类型    | 默认值 |
| --------- | -------- | ------- | ------ |
| onConfirm | 确认回调 | _Array_ |        |

### columns

```js
columns: {
  children: [],
  name: '名称',
  code: '枚举'
}
```

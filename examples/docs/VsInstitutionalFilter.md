## 机构筛选器 组件

### 介绍

标准用法

:::demo

``` html

  <vs-institutional-filter
    :columns="columns"
    v-model="showModle"
  ></vs-institutional-filter>

```

:::

### Props

| 参数          | 说明                    | 类型      | 默认值 |
| ------------- | ----------------------- | --------- | ------ |
| columns       | 树形结构，参考[columns] | _Object_  | []     |
| showModle     | 控制弹窗显示            | _Boolean_ | false  |
| headerMap     | 表头内容自定义          | _Array_   | []     |
| showSearch     | 是否显示搜索框          | _Boolean_   | true     |
| showNameToHeader     | 是否将选中值显示在header          | _Boolean_   | true     |
| wrappperStyle | 自定义整体样式          | _Object_  | {}     |

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

## InfinitePicker 组件

picker 组件

### 基础用法

:::demo `default-index` 默认选中下标参数

```html
<el-row>
  <infinite-button @click="onClick">默认按钮</infinite-button>
  <infinite-picker :default-index="2"></infinite-picker>
</el-row>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClick() {
        this.show = true;
      },
      onClickOverlay() {
        this.show = false;
      },
    },
  };
</script>
```

:::

### 默认选中参数

:::demo

```html
<el-row>
  <infinite-button @click="onClick">默认按钮</infinite-button>
  <infinite-picker></infinite-picker>
</el-row>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      onClick() {
        this.show = true;
      },
      onClickOverlay() {
        this.show = false;
      },
    },
  };
</script>
```

:::

## API

### Props

| 参数        | 说明                           | 类型    | 默认值 |
| ----------- | ------------------------------ | ------- | ------ |
| columns     | 对象数组，配置每一列显示的数据 | Array   | []     |
| showToolbar | 是否显示顶部栏                 | Boolean | false  |
| title       | 顶部栏标题                     | String  | 标题   |
| loading     | 是否显示加载状态               | Boolean | false  |

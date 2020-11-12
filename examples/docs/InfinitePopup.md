## InfinitePopup 组件

弹窗

### 基础用法

:::demo

```html
<el-row>
  <infinite-button @click="onClick">默认按钮</infinite-button>
  <infinite-popup
    v-model="show"
    @onClickOverlay="onClickOverlay"
  ></infinite-popup>
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

### 基础用法

:::demo

```html
<el-row>
  <infinite-button @click="onClick">默认按钮</infinite-button>
  <infinite-popup
    v-model="show"
    @onClickOverlay="onClickOverlay"
  ></infinite-popup>
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

| 参数                | 说明                                     | 类型             | 默认值   |
| ------------------- | ---------------------------------------- | ---------------- | -------- |
| show                | 是否处于加载中状态                       | Boolean          | false    |
| zIndex              | z-index 层级                             | Number           | 100      |
| overlay             | 是否显示遮罩层                           | Boolean          | true     |
| position            | 弹出位置，可选值为 top bottom right left | String           | 'center' |
| duration            | 动画时长，单位为毫秒                     | [Number, Object] | 300      |
| round               | 是否显示圆角                             | Boolean          | false    |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                   | Boolean          | true     |

## Button 按钮
常用的操作按钮。

### 基础用法
基础的按钮用法。
:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
    <el-row>
        <infinite-button>默认按钮</infinite-button>
        <infinite-button type="primary" @click="handleClick">主要按钮</infinite-button>
        <infinite-button type="success">成功按钮</infinite-button>
        <infinite-button type="info">信息按钮</infinite-button>
        <infinite-button type="warning">警告按钮</infinite-button>
        <infinite-button type="danger">危险按钮</infinite-button>
    </el-row>
    <el-row>
        <infinite-button plain>朴素按钮</infinite-button>
        <infinite-button type="primary" plain>主要按钮</infinite-button>
        <infinite-button type="success" plain>成功按钮</infinite-button>
        <infinite-button type="info" plain>信息按钮</infinite-button>
        <infinite-button type="warning" plain>警告按钮</infinite-button>
        <infinite-button type="danger" plain>危险按钮</infinite-button>
    </el-row>
    <script>
        export default{
            methods: {
                handleClick(val){
                    console.log(val,'clicked the button')
                }
            }
        }
    </script>
```
:::
### 禁用状态
按钮不可用状态。
:::demo 通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。

```html
    <el-row>
        <infinite-button>默认按钮</infinite-button>
        <infinite-button type="primary" disabled>主要按钮</infinite-button>
        <infinite-button type="success" disabled>成功按钮</infinite-button>
        <infinite-button type="info" disabled>信息按钮</infinite-button>
        <infinite-button type="warning" disabled>警告按钮</infinite-button>
        <infinite-button type="danger" disabled>危险按钮</infinite-button>
    </el-row>
    <el-row>
        <infinite-button plain disabled>朴素按钮</infinite-button>
        <infinite-button type="primary" plain disabled>主要按钮</infinite-button>
        <infinite-button type="success" plain disabled>成功按钮</infinite-button>
        <infinite-button type="info" plain disabled>信息按钮</infinite-button>
        <infinite-button type="warning" plain disabled>警告按钮</infinite-button>
        <infinite-button type="danger" plain disabled>危险按钮</infinite-button>
    </el-row>
```
:::


### 按钮形状
:::demo 通过 square 设置方形按钮，通过 round 设置圆形按钮

```html
    <el-row>
        <infinite-button type="primary" square>方形按钮</infinite-button>
        <infinite-button type="info" round>圆形按钮</infinite-button>
    </el-row>
```
:::

### 图标按钮
:::demo 通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL。

```html
    <el-row>
        <infinite-button type="primary" icon="plus"></infinite-button>
        <infinite-button type="primary" icon="plus">按钮</infinite-button>
        <infinite-button icon="https://img.yzcdn.cn/vant/user-active.png">按钮</infinite-button>
    </el-row>
```
:::


### 按钮尺寸
:::demo 支持 large、normal、small、mini 四种尺寸，默认为 normal。

```html
    <el-row>
        <infinite-button size="large">大号按钮</infinite-button>
        <infinite-button size="normal">普通按钮</infinite-button>
        <infinite-button size="small">小型按钮</infinite-button>
        <infinite-button size="mini">迷你按钮</infinite-button>
    </el-row>
```
:::
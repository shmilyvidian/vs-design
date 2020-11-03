## DatetimePicker 日期组件
常用的操作按钮。

### 基础用法
基础的按钮用法。
:::demo 使用`date`、`year-month`、`month-day`、`year`、`month`、`quarterly`、`week-end`、`week-segment`和`just-show`属性来定义 DatetimePicker 的类型。

```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        :picker-radius="pickerRadius"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
    />
    </el-row>

    <script>
    export default {
        methods: {
        
        },
        data() {
        return {
            currentDate: '2020/06/05',
            dataStartTime: '2019/01/23',
            dataEndTime: '2020/11/03',
            pickerRadius: '5px',
        };
        },
    };
    </script>
```

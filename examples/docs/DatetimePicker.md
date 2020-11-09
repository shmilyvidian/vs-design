## DatetimePicker 日期组件
根据type类型选择日期。

### 基础用法
默认为date类型，获得日期格式为yyyyMMdd。
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
            currentDate: '20200605',
            dataStartTime: '20190123',
            dataEndTime: '20201103',
            pickerRadius: '5px',
        };
        },
    };
    </script>
```
:::

### 年月类型
获得日期格式为yyyyMM。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="year-month"
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
                currentDate: '202006',
                dataStartTime: '201901',
                dataEndTime: '202011',
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 月日类型
获得日期格式为MMdd。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="month-day"
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
                currentDate: '0601',
                dataStartTime: '0101',
                dataEndTime: '1102',
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 年类型
获得日期格式为yyyy。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="year"
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
                currentDate: '2015',
                dataStartTime: '2010',
                dataEndTime: '2020',
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 月类型
获得日期格式为MM。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="month"
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
                currentDate: '06',
                dataStartTime: '02',
                dataEndTime: '11',
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 季度类型
获得日期格式为yyyyMM。
:::demo 传入的日期会处理成所在季度，如02月会默认为1季度
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="quarterly"
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
                currentDate: '202005',
                dataStartTime: '202001',
                dataEndTime: '202011',
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 周期-不连续类型
获得日期格式为MMdd。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="week-end"
        :sunday-array="sundayArray"
        :picker-radius="pickerRadius"
        @confirm="confirm"
    />
    </el-row>

    <script>
    export default {
        methods: {
          confirm(currentDate) {
            console.log('currentDate == ', currentDate);
          }
        },
        data() {
            return {
                currentDate: '0607',
                sundayArray: ['0823', '0607', '0531', '0517', '0510'],
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 周期-连续类型
获得日期格式为yyyyMMdd。
:::demo
```html
    <el-row>
    <infinite-datetime-picker
        v-model="currentDate"
        type="week-segment"
        :valid-date="validDate"
        :picker-radius="pickerRadius"
        @confirm="confirm"
    />
    </el-row>

    <script>
    export default {
        methods: {
          confirm(currentDate) {
            console.log('currentDate == ', currentDate);
          }
        },
        data() {
            return {
                currentDate: '20200607',
                validDate: ['2020.08.17-2020.08.23', '2020.06.01-2020.06.07', '2020.05.25-2020.05.31', '2020.05.18-2020.05.24', '2020.05.11-2020.05.17'],
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::


## API

### Props

| 参数            | 说明                        | 类型        | 默认值 |
| --------------- | -------------------------- | ---------- | ------ |
| type            |      date、year-month、month-day、<br>year、month、quarterly、<br>week-end、week-segment、just-show         | _string_   | date |
| picker-radius   |      日期选择器四周圆角      | _string_   | 0px |

###

当时间选择器类型为 date、year-month、month-day、year、month、quarterly 时，支持以下 props:

| 参数       | 说明                       | 类型        | 默认值 |
| ---------- | -------------------------- | ---------- | ------ |
| start-time |      可选的最小日期         | _string_   | 当前日期 |
| end-time   |      可选的最大日期         | _string_   | 当前日期 |

### Events

| 事件名  | 说明                     | 回调参数              |
| ------- | ----------------------- | --------------------- |
| change  | 当值变化时触发的事件      | 实例                  |
| confirm | 点击完成按钮时触发的事件  | value: 当前选中的时间  |
| cancel  | 点击取消按钮时触发的事件  | -                     |

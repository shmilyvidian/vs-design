## DatetimePicker 日期组件
### 介绍
` 根据type类型选择日期，使用date、year-month、month-day、year、month、quarterly、week-end、week-segment和just-show属性来定义 DatetimePicker 的类型。`

### 基础用法
:::demo  默认为date类型，获得日期格式为yyyyMMdd。
```html
    <infinite-datetime-picker
        v-model="currentDate"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
    />
    <script>
        export default {
            data() {
                return {
                    currentDate: '20200605',
                    dataStartTime: '20190123',
                    dataEndTime: '20201103',
                };
            },
        };
    </script>
```
:::

### 取消时保留选中值
:::demo  默认为date类型，获得日期格式为yyyyMMdd。
```html
    <infinite-datetime-picker
        v-model="currentDate"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
        :is-it-save-selected="isItSaveSelected"
    />
    <script>
        export default {
            data() {
                return {
                    currentDate: '20200605',
                    dataStartTime: '20190123',
                    dataEndTime: '20201103',
                    isItSaveSelected: true
                };
            },
        };
    </script>
```
:::

### 图标类型
:::demo  默认为date类型，获得日期格式为yyyyMMdd，图标为三角箭头。
```html
    <infinite-datetime-picker
        v-model="currentDate"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
        :useDefaultIcon: "useDefaultIcon",
    />
    <script>
        export default {
            data() {
                return {
                    currentDate: '20200605',
                    dataStartTime: '20190123',
                    dataEndTime: '20201103',
                    useDefaultIcon: false
                };
            },
        };
    </script>
```
:::

### 年月类型
:::demo  获得日期格式为yyyyMM。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :start-time="dataStartTime"
            :end-time="dataEndTime"
        />
    </el-row>
    <script>
        export default {
            data() {
                return {
                    currentDate: '202006',
                    dateType: 'year-month',
                    dataStartTime: '201901',
                    dataEndTime: '202011',
                };
            },
        };
    </script>
```
:::

### 月日类型
:::demo 获得日期格式为MMdd。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :start-time="dataStartTime"
            :end-time="dataEndTime"
        />
    </el-row>
    <script>
    export default {
        data() {
            return {
                currentDate: '0601',
                dateType: 'month-day',
                dataStartTime: '0101',
                dataEndTime: '1102',
            };
        },
    };
    </script>
```
:::

### 年类型
:::demo 获得日期格式为yyyy。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :start-time="dataStartTime"
            :end-time="dataEndTime"
        />
    </el-row>
    <script>
    export default {
        data() {
            return {
                currentDate: '2015',
                dateType: 'year',
                dataStartTime: '2010',
                dataEndTime: '2020',
            };
        },
    };
    </script>
```
:::

### 月类型
:::demo 获得日期格式为MM。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :start-time="dataStartTime"
            :end-time="dataEndTime"
        />
    </el-row>
    <script>
    export default {
        data() {
            return {
                currentDate: '06',
                dateType: 'month',
                dataStartTime: '02',
                dataEndTime: '11',
            };
        },
    };
    </script>
```
:::

### 季度类型
:::demo 获得日期格式为yyyyMM。传入的日期会处理成所在季度，如02月会默认为1季度
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :picker-radius="pickerRadius"
            :start-time="dataStartTime"
            :end-time="dataEndTime"
        />
    </el-row>
    <script>
    export default {
        data() {
            return {
                currentDate: '202005',
                dateType: 'quarterly',
                dataStartTime: '202001',
                dataEndTime: '202011',
            };
        },
    };
    </script>
```
:::

### 周期-不连续类型
:::demo 获得日期格式为MMdd。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
            :sunday-array="sundayArray"
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
                dateType: 'week-end',
                sundayArray: ['0823', '0607', '0531', '0517', '0510'],
            };
        },
    };
    </script>
```
:::

### 周期-连续类型
:::demo 获得日期格式为yyyyMMdd。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
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
                dateType: 'week-segment',
                validDate: ['2020.08.17-2020.08.23', '2020.06.01-2020.06.07', '2020.05.25-2020.05.31', '2020.05.18-2020.05.24', '2020.05.11-2020.05.17'],
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 不规则日期类型
:::demo 默认为date类型，获得日期格式为yyyyMMdd。
```html
    <el-row>
        <infinite-datetime-picker
            v-model="currentDate"
            :type="dateType"
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
                validDate: ['2020/06/05', '2020/06/06', '2020/07/06', '2020/08/09', '2020/08/11', '2020/08/12'],
                pickerRadius: '5px',
            };
        },
    };
    </script>
```
:::

### 仅展示类型
:::demo  默认为date类型。
```html
    <infinite-datetime-picker
        v-model="currentDate"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
    />
    <script>
        export default {
            data() {
                return {
                    currentDate: '20200605',
                    type: 'just-show',
                    dataStartTime: '20190123',
                    dataEndTime: '20201103',
                };
            },
        };
    </script>
```
:::

### 间隔符为-
:::demo  默认为date类型。
```html
    <infinite-datetime-picker
        v-model="currentDate"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
    />
    <script>
        export default {
            data() {
                return {
                    currentDate: '20200605',
                    type: 'just-show',
                    dataStartTime: '20190123',
                    dataEndTime: '20201103',
                    diviedTag: '-',
                };
            },
        };
    </script>
```
:::

## API
| 参数            | 说明                           | 类型        | 默认值 |
| --------------- | ------------------------------ | ---------- | ------ |
| slot            |   在子节点中自定义右侧图标内容   |            |        |
| v-model         |   组件选中时间                  |            |        |

### Props

| 参数               | 说明                             | 类型        | 默认值 |
| ------------------ | ------------------------------- | ---------- | ------ |
| type               |      date、year-month、month-day、<br>year、month、quarterly、<br>week-end、week-segment、just-show         | _string_   | date |
| pickerRadius       |  日期选择器四周圆角                      | _string_   | 0           |
| pickerColor        |  日期选择器四周圆角                      | _string_   | 0           |
| isItSaveSelected   |  是否在取消或点击蒙层时保留选中值         | _boolean_   | false      |
| useDefaultIcon     |  是否使用默认日期图标                    | _boolean_   | true       |
| sundayArray        |  周期-不连续类型week-end类型可选时间区间  | _array_     | []         |
| validDate          |  周期-连续类型week-segment可选时间区间   | _array_     | []         |
| cancelButtonText   |  取消按钮文字                           | _string_    | 取消       |
| confirmButtonText  |  确认按钮文字                           | _string_    | 确认       |
| diviedTag          |  显示时间间隔符                         | _string_    | .          |

###
当时间选择器类型为 `date`、`year-month`、`month-day`、`year`、`month`、`quarterly` 时，支持以下 props:

| 参数       | 说明                       | 类型        | 默认值 |
| ---------- | -------------------------- | ---------- | ------ |
| startTime  |      可选的最小日期         | _string_   | 当前日期 |
| endTime    |      可选的最大日期         | _string_   | 当前日期 |

### Events

| 事件名  | 说明                     | 回调参数              |
| ------- | ----------------------- | --------------------- |
| change  | 当值变化时触发的事件      | 实例                  |
| confirm | 点击完成按钮时触发的事件  | value: 当前选中的时间  |
| cancel  | 点击取消按钮时触发的事件  | -                     |

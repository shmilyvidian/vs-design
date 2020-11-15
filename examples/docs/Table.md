## table 组件
### 介绍
`自适应的table`

### 基础用法
:::demo  表格title使用headers
```html
  <el-row>  
    <infinite-table
      :rank-data-obj="rankDataObj"
    />
  </el-row>
  <script>
    export default {
      data() {
        return {
          rankDataStr: {
            headers: ['产品名称', '当年收入(亿)', '当月收入(亿)', '当日收入(亿)'],
            rows: [
              {
                rowValue: ['卓越系列', '0.11', '0.07', '0.11'],
                rows: [
                  {
                    rowValue: ['卓越一年1号', '0.03', '0.01', '0.03'],
                    rows: []
                  },
                  {
                    rowValue: ['卓越一年3号', '0.01', '0.00', '0.01'],
                    rows: []
                  },
                  {
                    rowValue: ['卓越一年2号', '0.01', '0.01', '0.01'],
                    rows: []
                  }
                ]
              },
              {
                rowValue: ['现金类', '4.62', '1.93', '4.62'],
                rows: [
                  {
                    rowValue: ['天天成长C', '1.69', '0.66', '1.69'],
                    rows: []
                  },
                  {
                    rowValue: ['天天成长A', '1.45', '0.59', '1.45'],
                    rows: []
                  },
                  {
                    rowValue: ['天天成长B', '0.85', '0.33', '0.85'],
                    rows: []
                  }
                ]
              },
              {
                rowValue: ['启航系列', '0.66', '0.33', '0.66'],
                rows: [
                  {
                    rowValue: ['启航半年1号', '0.11', '0.05', '0.11'],
                    rows: []
                  },
                  {
                    rowValue: ['启航一年5号', '0.06', '0.02', '0.06'],
                    rows: []
                  },
                  {
                    rowValue: ['启航半年4号', '0.03', '0.02', '0.03'],
                    rows: []
                  }
                ]
              }
            ]
          },
        }
      }
    }
  </script>
```
:::

### 自定义列用法
:::demo  表格title使用columns
```html
  <el-row>  
    <infinite-table
      :rank-data-obj="rankDataObj"
    />
  </el-row>
  <script>
    export default {
      data() {
        return {
          rankDataStr: {
            columns: [
              {
                name: '产品名称',
              },
              {
                name: '当年收入',
                unit: '亿',
              },
              {
                name: '当月收入',
                unit: '亿',
              },
              {
                name: '当日收入',
                unit: '亿',
              }
            ],
            rows: [
              {
                rowValue: ['卓越系列', '0.11', '0.07', '0.11'],
                rows: [
                  {
                    rowValue: ['卓越一年1号', '0.03', '0.01', '0.03'],
                    rows: []
                  },
                  {
                    rowValue: ['卓越一年3号', '0.01', '0.00', '0.01'],
                    rows: []
                  },
                  {
                    rowValue: ['卓越一年2号', '0.01', '0.01', '0.01'],
                    rows: []
                  }
                ]
              },
              {
                rowValue: ['现金类', '4.62', '1.93', '4.62'],
                rows: [
                  {
                    rowValue: ['天天成长C', '1.69', '0.66', '1.69'],
                    rows: []
                  },
                  {
                    rowValue: ['天天成长A', '1.45', '0.59', '1.45'],
                    rows: []
                  },
                  {
                    rowValue: ['天天成长B', '0.85', '0.33', '0.85'],
                    rows: []
                  }
                ]
              },
              {
                rowValue: ['启航系列', '0.66', '0.33', '0.66'],
                rows: [
                  {
                    rowValue: ['启航半年1号', '0.11', '0.05', '0.11'],
                    rows: []
                  },
                  {
                    rowValue: ['启航一年5号', '0.06', '0.02', '0.06'],
                    rows: []
                  },
                  {
                    rowValue: ['启航半年4号', '0.03', '0.02', '0.03'],
                    rows: []
                  }
                ]
              }
            ]
          },
        }
      }
    }
  </script>
```
:::

### 个性化配置列
:::demo  表格title使用columns
```html
  <el-row>  
    <infinite-table
      :rank-data-obj="rankDataObj"
    />
  </el-row>
  <script>
    export default {
      data() {
        return {
          isDefaultNumber: false,
          rankDataStr: {
            columns: [
              {
                name: '产品名称',
                style: {
                  color: '#6195FF'
                }
              },
              {
                name: '自成立以来年化',
                nameIncludesArray: ['自成立以来年化'],
                splitArray: [4],
                unit: '合同法',
                style: {
                  color: '#F9BB4C'
                }
              },
              {
                name: '七日年化',
                nameIncludesArray: ['七日年化'],
                splitArray: [2],
                unit: '%'
              },
              {
                name: '近一月年化',
                nameIncludesArray: ['近一月年化'],
                splitArray: [3],
                unit: '%'
              },
              {
                name: '近三月年化',
                unit: '%'
              },
              {
                name: '自成立以来年化',
                unit: '市值法'
              },
              {
                name: '偏离度',
                unit: '%'
              },
              {
                name: '杠杆',
                unit: '%'
              },
              {
                name: '直融占比',
                unit: '%'
              },
              {
                name: '债券久期',
                unit: '管理口径'
              },
              {
                name: '资产组合久期',
                unit: '管理口径'
              },
              {
                name: '资产组合久期',
                unit: '监管口径'
              }
            ],
            rows: [
              {
                rowValue: ['稳健20年3期', '3.69', '4.69', '4.01', '3.27', '2.87', '-0.51', '112.55', '38.25', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年2号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年3号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年4号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年5号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年6号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年7号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年8号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年9号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年20号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              },
              {
                rowValue: ['启航一年23号', '3.83', '3.62', '3.63', '3.64', '3.09', '-0.49', '128.69', '38.11', '-', '-', '-'],
                rows: []
              }
            ]
          },
        }
      }
    }
  </script>
```
:::

### API

| 参数            | 说明                                | 类型       | 默认值 |
| --------------- | ---------------------------------- | --------- | ------- |
| isDefaultNumber | 表格是否展示排名列                   | _boolean_ | false_ |

### rankDataObj 的 options

| 参数   | 说明                        | 类型        | 默认值 |
| ------- | -------------------- | ----------- | --------------------------- |
| headers | 表格列的title数组，元素是字符串，当存在headers时取headers不取columns，此时columns的options不会生效                                                  | _array_ | _[_string_]_ |
| columns | 表格列的title数组，元素是对象             | _array_ | _[_object_]_ |
| rows    | 表格的body数据                           | _array_ | _[_object_]_ |

### columns 的 options

| 参数              | 说明                        | 类型        | 默认值 |
| ----------------- | -------------------- | ----------- | --------------------------- |
| name              | 表格列title，headers中由其元素决定，columns中由name属性决定 | _string_    |     |
| fixed             | 该列是否为固定列，其中第一列必然固定 true固定 false不固定 | _boolean_   | 第一列为true，其他为false |
| isSort            | 列是否可排序，其中非数字必然不可排序 | _boolean_ | true |
| sort              | 列是否有执行排序，'1'已排序 '0'未排序，是否执行排序由columns第一个为'1'的sort决定，其他皆处理为'0' | _string_ | '0' |
| unit              | 表格列单位，headers中由括号内决定，columns中由unit属性决定 | _string_ |     |
| style             | 表身补充样式，只由columns中style决定 | _object_ | _object_ |
| nameIncludesArray | 需要额外进行换行的title数组 | _array_ | _[_string_]_ |
| splitArray | 需要额外进行换行的开始换行位置 | _array_ | _[_number_]_ |

### rows 的 options

| 参数   | 说明                        | 类型        | 默认值 |
| -------- | -------------------- | ------- | --------------------------- |
| rowValue | 当前级的表格body数据  | _array_ | _[_string_]_                 |
| rows     | 下一级的表格body数据  | _array_ | _[_object_]_                 |

### Events

| 事件名                | 说明                                 | 回调参数        |
| -------------------- | -------------------- | ------- |
| ontableUnitClick     | 固定列的点击事件 | _object_，内参：col：当前列参数；colIndex：当前列序号；name：当前行name；row：当前行数据；status：当前行收起状态，展开为false，收起为true |
| onTableUnfoldMore    | 表格的展开更多点击事件  |  -  |
| onTableFold          | 表格的收起点击事件  |  -  |
| onTableColSort       | 表格列的排序点击事件  | _object_，内参：status：1当前为正序排列 -1当前为倒序排列；name：点击排序列的表格头name，单位不在其中 |
| onTableOpenChildMore | 表格展开后子级的查看更多点击事件；需要说明的是，点击后会跳转至一个路径为ChildrenCardTable的路由，请自行准备  |  -  |

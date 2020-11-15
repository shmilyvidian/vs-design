<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <div class="infinite-doc-demo-block-table ">
        <!-- <infinite-table :table-data="tableData"> </infinite-table> -->
        <infinite-table :rank-data-obj="rankDataStr"> </infinite-table>
        <!-- <infinite-table :rank-data-obj="rankDataObj"> </infinite-table> -->
      </div>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义列用法</h2>
      <div class="infinite-doc-demo-block-table ">
        <infinite-table 
          :rank-data-obj="rankDataObjOnly"
          @ontableUnitClick="ontableUnitClick"
          @onTableUnfoldMore="onTableUnfoldMore"
          @onTableFold="onTableFold"
          @onTableColSort="onTableColSort"
          @onTableOpenChildMore="onTableOpenChildMore"
        > </infinite-table>
      </div>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">个性化配置列</h2>
      <div class="infinite-doc-demo-block-table ">
        <infinite-table 
          :rank-data-obj="rankDataWarp" 
          :is-default-number="isDefaultNumber"
          @ontableUnitClick="ontableUnitClick"
          @onTableUnfoldMore="onTableUnfoldMore"
          @onTableFold="onTableFold"
          @onTableColSort="onTableColSort"
          @onTableOpenChildMore="onTableOpenChildMore"
        > </infinite-table>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: {
        data: [
          {
            query: {
              jumpCode: null,
              jumpValue: null
            },
            key: '0000-0000-0000-0000',
            '2585-2314-2501-0000': '卓越系列',
            '2585-2314-2501-0001': '0.01',
            '2585-2314-2501-0002': '0.02',
            '2585-2314-2501-0003': '0.03',
            children: [
              {
                '2585-2314-2501-0000': '卓越一级1号',
                '2585-2314-2501-0001': '0.11',
                '2585-2314-2501-0002': '0.12',
                '2585-2314-2501-0003': '0.13',
                pKey: '0000-0000-0000-0000',
                key: '0000-0001-0000-0000'
              },
              {
                '2585-2314-2501-0000': '卓越一级1号',
                '2585-2314-2501-0001': '0.11',
                '2585-2314-2501-0002': '0.12',
                '2585-2314-2501-0003': '0.13',
                pKey: '0000-0000-0000-0000',
                key: '0000-0002-0000-0000'
              }
            ]
          },
          {
            query: {
              jumpCode: null,
              jumpValue: null
            },
            key: '0001-0000-0000-0000',
            '2585-2314-2501-0000': '稳健系列',
            '2585-2314-2501-0001': '1.01',
            '2585-2314-2501-0002': '1.02',
            '2585-2314-2501-0003': '1.03',
            children: [
              {
                '2585-2314-2501-0000': '卓越一级1号',
                '2585-2314-2501-0001': '1.11',
                '2585-2314-2501-0002': '1.12',
                '2585-2314-2501-0003': '1.13',
                pKey: '0001-0000-0000-0000',
                key: '0001-0001-0000-0000'
              },
              {
                '2585-2314-2501-0000': '卓越一级1号',
                '2585-2314-2501-0001': '1.11',
                '2585-2314-2501-0002': '1.12',
                '2585-2314-2501-0003': '1.13',
                pKey: '0001-0000-0000-0000',
                key: '0001-0002-0000-0000'
              }
            ]
          }
        ],
        columns: [
          {
            fixed: true,
            isSort: false,
            key: '2585-2314-2501-0000',
            name: '产品名称',
            sort: '0',
            style: {},
            unit: ''
          },
          {
            fixed: false,
            isSort: true,
            key: '2585-2314-2501-0001',
            name: '当年收入',
            sort: '1',
            style: {},
            unit: '亿'
          },
          {
            fixed: false,
            isSort: true,
            key: '2585-2314-2501-0002',
            name: '当月收入',
            sort: '0',
            style: {},
            unit: '亿'
          },
          {
            fixed: false,
            isSort: true,
            key: '2585-2314-2501-0003',
            name: '当日收入',
            sort: '0',
            style: {},
            unit: '亿'
          }
        ]
      },
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
      rankDataObjOnly: {
        columns: [
          {
            name: '产品名称'
          },
          {
            name: '当年收入',
            unit: '亿'
          },
          {
            name: '当月收入',
            unit: '亿'
          },
          {
            name: '当日收入',
            unit: '亿'
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
            rowValue: ['现金类', '4.62', '0.33', '4.62'],
            rows: [
              {
                rowValue: ['天天成长C', '1.69', '0.66', '0.11'],
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
            rowValue: ['启航系列', '0.66', '1.93', '0.66'],
            rows: [
              {
                rowValue: ['启航半年1号', '0.11', '0.05', '1.69'],
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
      rankDataObj: {
        columns: [
          {
            name: '产品名称',
            isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '',
            style: {
              color: '#6195FF'
            }
          },
          {
            name: '当年收入',
            isSort: false,
            sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '亿',
            style: {
              color: '#F9BB4C'
            }
          },
          {
            name: '当月收入',
            isSort: true,
            sort: '1',
            // key: '2585-2314-2501-0000',
            unit: '亿',
            style: {}
          },
          {
            name: '当日收入',
            isSort: false,
            sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '亿',
            style: {}
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
            rowValue: ['现金类', '4.62', '0.33', '4.62'],
            rows: [
              {
                rowValue: ['天天成长C', '1.69', '0.66', '0.11'],
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
            rowValue: ['启航系列', '0.66', '1.93', '0.66'],
            rows: [
              {
                rowValue: ['启航半年1号', '0.11', '0.05', '1.69'],
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
      rankDataWarp: {
        columns: [
          {
            name: '产品名称',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            // unit: '',
            style: {
              color: '#6195FF'
            }
          },
          {
            name: '自成立以来年化',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            nameIncludesArray: ['自成立以来年化'],
            splitArray: [4],
            unit: '合同法',
            style: {
              color: '#F9BB4C'
            }
          },
          {
            name: '七日年化',
            // isSort: true,
            // sort: '1',
            // key: '2585-2314-2501-0000',
            nameIncludesArray: ['七日年化'],
            splitArray: [2],
            unit: '%'
            // style: {}
          },
          {
            name: '近一月年化',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            nameIncludesArray: ['近一月年化'],
            splitArray: [3],
            unit: '%'
            // style: {}
          },
          {
            name: '近三月年化',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '%'
            // style: {}
          },
          {
            name: '自成立以来年化',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '市值法'
            // style: {}
          },
          {
            name: '偏离度',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '%'
            // style: {}
          },
          {
            name: '杠杆',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '%'
            // style: {}
          },
          {
            name: '直融占比',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '%'
            // style: {}
          },
          {
            name: '债券久期',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '管理口径'
            // style: {}
          },
          {
            name: '资产组合久期',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '管理口径'
            // style: {}
          },
          {
            name: '资产组合久期',
            // isSort: false,
            // sort: '0',
            // key: '2585-2314-2501-0000',
            unit: '监管口径'
            // style: {}
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
      isDefaultNumber: false
    }
  },
  methods: {
    ontableUnitClick (obj) {
      console.log('this is event of ontableUnitClick, params is === ', obj)
    },
    onTableUnfoldMore (obj) {
      console.log('this is event of onTableUnfoldMore, params is === ', obj)
    },
    onTableFold (obj) {
      console.log('this is event of onTableFold, params is === ', obj)
    },
    onTableColSort (obj) {
      console.log('this is event of onTableColSort, params is === ', obj)
    },
    onTableOpenChildMore (obj) {
      console.log('this is event of onTableOpenChildMore, params is === ', obj)
    }
  }
}
</script>

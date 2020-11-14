<template>
  <div class="common-card-table">
    <div class="common-card-table-box">
      <div class="common-card-table-box-unit">

      </div>
      <CardTable
         :table-data="tableData"
      >

      </CardTable>
    </div>
  </div>
</template>
<script>

import CardTable from './card-table'

export default {
  name: 'InfiniteTable',
  components: {
    CardTable
  },
  props: {
    // 表格数据
    // tableData: {
    //   type: Object,
    //   default: () => ({
    //     data: [],
    //     columns: []
    //   })
    // },
    rankDataObj: {
      type: Object,
      default: () => ({
        headers: [],
        rows: []
      })
    },
    // 跳转子页面参数
    goChildTableQuery: {
      type: Object,
      default: () => {}
    },
    // 是否需要默认排序
    isDefaultNumber: {
      type: Boolean,
      default: true
    },
    // 排序列标题
    numberTitle: {
      type: String,
      default: '排名'
    },
    // 表格背景色
    tableBgColor: {
      type: String,
      default: '#2e3036'
    },
    // 单元格最大长度宽度
    maxUnitLengthWidth: {
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      tableData: {
        data: [],
        columns: []
      }
      
    }
  },
  computed: {
    tableHead () {
      console.log('computed - tableHead == ', this.rankDataObj)
      return this.rankDataObj && this.rankDataObj.headers ? this.rankDataObj.headers : []
    },
    tableBody () {
      return this.rankDataObj && this.rankDataObj.rows ? this.rankDataObj.rows : []
    },
    isNumbers () {
      const res = []
      if (Array.isArray(this.tableBody)) {
        this.tableBody.forEach((list, i) => {
          const { rowValue } = list
          if (rowValue && Array.isArray(rowValue)) {
            rowValue.forEach((item, j) => {
              if (!i) {
                res.push(false)
              }
              if (!Number.isNaN(Number(item))) {
                res[j] = true
              }
            })
          }
        })
      }
      return res
    }
  },
  watch: {
    // tableHead: {
    rankDataObj: {
      handler (val) {
        this.$nextTick(() => {
          this.tableData = this.tableDataInit(this.tableHead, this.tableBody, this.factoryData)
          console.log('watch - this.tableData == ', this.tableData, this.tableHead, this.tableBody)
        })
      },
      immediate: true
    }
  },
  mounted () {
    
  },
  // beforeDestroy () {
  //   clearTimeout(this.viewTableTime)
  // },
  methods: {
    factoryData (columns, data) {
      columns.forEach((item, index) => {

      })
    },
    reNameFun (str, colIndex) {
      let name = ''
      let unit = ''
      const startIndex = str.indexOf('(')
      const endIndex = str.indexOf(')')
      if (startIndex !== -1) { // 首页展示4列，0为产品名称，所有加上index处理
        unit = str.slice(startIndex + 1, endIndex)
        name = str.slice(0, startIndex)
        return { name, unit }
      }
      return { name: str, unit: '' }
    },
    uuid () {
      const s = []
      const hexDigits = '0123456789abcdef'
      for (let i = 0; i < 36; i += 1) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4'
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
      s[8] = s[13] = s[18] = s[23] = '-'
      return s.join('')
    },
    // 表格数据处理
    tableDataInit (columns, rows, cb) {
      // 表头数据处理 - start
      const nameColumns = [...columns]
      const reColumns = nameColumns.map((colItem, colIndex) => {
        const isFixeds = [0].includes(colIndex)
        let isSort = !isFixeds
        const { name, unit } = this.reNameFun(colItem, colIndex)
        const style = {}
        // if(columns.color){
        //   style.color = 
        // }
        // if(hasNonSorted){
        //   isSort = 0
        // }
        const sortIndex = this.tableOption
        const colObj = {
          name, 
          fixed: isFixeds, // 是否固定列
          isSort, // 0支持排序
          sort: colIndex === sortIndex ? '1' : '0', // 排序方式
          key: this.uuid(),
          unit,
          style
        }

        const brFunc = (col, nameIncludesArray, splitArray) => {
          let flag = false
          nameIncludesArray.forEach((iItem, iIndex) => {
            if (!flag && col.name === iItem) {
              const splitInd = splitArray[iIndex] || -1
              col.name = `${col.name.substring(0, splitInd)}\n${col.name.substring(splitInd)}`
              flag = true
            }
          })
        }
        // brFunc(colObj, [], [])
        return colObj
      })
      // 表头数据处理 end

      // 表身数据处理 start
      const reRows = rows.map((rowItem, rowIndex) => {
        const pRowObj = {}
        pRowObj.key = this.uuid()
        pRowObj.query = {
          jumpCode: rowItem.jumpCode,
          jumpValue: rowItem.jumpValue
        }
        if (rowItem.rowValue && rowItem.rowValue.length) {
          rowItem.rowValue.forEach((row, jIndex) => {
            pRowObj[reColumns[jIndex].key] = row
          })
        }
        if (rowItem.rows && rowItem.rows.length) {
          pRowObj.children = []
          rowItem.rows.forEach((bItem, bIndex) => {
            const cObj = {}
            const cUuid = this.uuid()
            if (bItem.rowValue && bItem.rowValue.length) {
              bItem.rowValue.forEach((cImte, cIndex) => {
                if (cImte.trim() === '-%') {
                  cObj[reColumns[cIndex].key] = '-'
                } else {
                  cObj[reColumns[cIndex].key] = cImte.trim()
                }
              })
              cObj.pKey = pRowObj.key
              cObj.key = cUuid
              pRowObj.children.push(cObj)
            }
          })
        }
        return pRowObj
      })
      // 表身数据处理 end

      if (cb) {
        cb(reColumns, reRows)
      }

      const localTableData = {
        columns: reColumns,
        data: reRows
      }
      console.log('localTableData == ', localTableData, reColumns, reRows)
      return JSON.parse(JSON.stringify(localTableData))
    }
  }

}
</script>

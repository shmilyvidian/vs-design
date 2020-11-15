<template>
  <div class="common-card-table">
    <div class="common-card-table-box">
      <div class="common-card-table-box-unit">

      </div>
      <CardTable
         :table-data="tableData"
         :is-default-number="isDefaultNumber"
         @ontableUnitClick="tableEvent(arguments, 'ontableUnitClick')"
         @onTableUnfoldMore="tableEvent(arguments, 'onTableUnfoldMore')"
         @onTableFold="tableEvent(arguments, 'onTableFold')"
         @onTableColSort="tableEvent(arguments, 'onTableColSort')"
         @onTableOpenChildMore="tableEvent(arguments, 'onTableOpenChildMore')"
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
    // 是否需要排名列
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
      if (this.rankDataObj && this.rankDataObj.headers) {
        return this.rankDataObj.headers
      } else if (this.rankDataObj && this.rankDataObj.columns) {
        return this.rankDataObj.columns
      } else {
        return []
      }
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
      // console.log('isNumbers - res === ', res)
      return res
    }
  },
  watch: {
    // tableHead: {
    rankDataObj: {
      handler (val) {
        this.$nextTick(() => {
          this.tableData = this.tableDataInit(this.tableHead, this.tableBody, this.factoryData)
          // console.log('watch - this.tableData == ', this.tableData, this.tableHead, this.tableBody)
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
      let sortInd = '0'
      const reColumns = nameColumns.map((colItem, colIndex) => {
        const isFixeds = [0].includes(colIndex)
        // let isSort = !isFixeds
        let isSort = false
        const colItemName = typeof (colItem) === 'string' ? colItem : (colItem.name || '')
        const colItemObj = Object.prototype.toString.call(colItem) === '[object Object]' ? colItem : {}
        // const { name, unit } = this.reNameFun(colItem, colIndex)
        const { name, unit } = this.reNameFun(colItemName, colIndex)
        const style = colItemObj.style || {}
        // 是否执行排序由columns第一个为'1'的sort决定，其他皆处理为'0'
        if (sortInd === '0' && colItemObj.sort === '1') {
          sortInd = '1'
        } else {
          sortInd = '0'
        }
        // if(columns.color){
        //   style.color = 
        // }
        // if(hasNonSorted){
        //   isSort = 0
        // }
        // 列是否可排序，headers中由其是否是数字决定，columns中由其是否是数字和isSort两者共同决定
        if ((colItemObj.hasOwnProperty('isSort') && colItemObj.isSort === true && this.isNumbers[colIndex]) || 
          (!colItemObj.hasOwnProperty('isSort') && this.isNumbers[colIndex])
        ) {
          isSort = true
        }
        // if(colItemObj.hasOwnProperty('isSort')){
        //   if(this.isNumbers[colIndex] && colItemObj.isSort === true){
        //     isSort = true
        //   }
        // }else{
        //   if(this.isNumbers[colIndex]){
        //     isSort = true
        //   }
        // }
        // const sortIndex = this.tableOption
        // console.log('isNumbers == ', this.isNumbers)
        // console.log('sort == ', isSort ? (colItemObj.sort || '1') : '0')
        // console.log('sort == ', colItemObj.sort || '1')
        const colObj = {
          name: name || colItemObj.name || '', // 表头名称，headers中由其元素决定，columns中由name属性决定
          fixed: isFixeds || colItemObj.fixed || false, // 列是否固定，其中第一列必然固定
          isSort, // 列是否可排序，其中非数字必然不可排序
          sort: sortInd, // 列是否有执行排序，1已排序 0未排序 -- isSort ? (colItemObj.sort || '0') : '0'
          key: this.uuid(),
          unit: unit || colItemObj.unit || '', // 表头单位，headers中由括号内决定，columns中由unit属性决定
          style // 表身样式，只由columns中style决定
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
        const a = Array.isArray(colItemObj.nameIncludesArray) ? colItemObj.nameIncludesArray : []
        const b = Array.isArray(colItemObj.splitArray) ? colItemObj.splitArray : []
        brFunc(colObj, a, b)
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
    },
    // table接收事件
    tableEvent (argumentsArr = [], tableEventType) {
      switch (tableEventType) {
        // case 'ontableUnitClick':
        //   // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
        //   this.$emit('ontableUnitClick', ...argumentsArr)
        //   break
        // case 'onTableUnfoldMore':
        //   // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
        //   this.$emit('onTableUnfoldMore', ...argumentsArr)
        //   break
        // case 'onTableFold':
        //   // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
        //   this.$emit('onTableFold', ...argumentsArr)
        //   break
        // case 'onTableColSort':
        //   // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
        //   this.$emit('onTableColSort', ...argumentsArr)
        //   break
        // case 'onTableOpenChildMore':
        //   // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
        //   this.$emit('onTableOpenChildMore', ...argumentsArr)
        //   break
        case 'null':
          // console.log('ontableUnitClick - argumentsArr = ', argumentsArr)
          // this.$emit('onTableOpenChildMore', ...argumentsArr)
          break
      
        default:
          this.$emit(tableEventType, ...argumentsArr)
          break
      }
    }
  }

}
</script>

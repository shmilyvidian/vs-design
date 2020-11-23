export const cardTableComputed = {
  // 固定列索引，用于考虑做阴影，目前不考虑右侧固定列
  leftFixedIndex () {
    let index = -1
    this.nearViewTableColumns.forEach((item) => {
      if (item.fixed) {
        index += 1
      }
    })
    return index
  },
  // 是否已存在展开子节点的状态
  expanded () {
    let guess = false
    Object.keys(this.childrenKeys).forEach((key) => {
      if (this.childrenKeys[key]) {
        guess = true
      }
    })
    return guess 
  }
}

export const cardTableWatch = {
  tableData: {
    handler (val, oldVal) {
      // 处理表头数据
      const sortOrders = {}
      this.viewTableColumns = []
      this.localStyles = {}
      this.sortKey = ''
      let numberCol = []
      if (this.isDefaultNumber) {
        numberCol = [{
          name: this.numberTitle,
          key: this.numberUUID,
          fixed: 1
        }]
      }

      this.nearViewTableColumns = [...numberCol, ...this.tableData.columns]
      if (this.nearViewTableColumns.length) {
        this.nearViewTableColumns[0].fixed = true
      }
      this.nearViewTableColumns.slice(0).forEach((item, index) => {
        // 设定第一列一定为固定列，便于给存在子节点的单元格添加展开功能

        // 判断为正序或倒序
        if (item.sort === '-1' || item.sort === '1') {
          this.sortKey = !this.sortKey ? item.key : this.sortKey
          if (item.sort === '-1') {
            sortOrders[item.key] = -1
          }
          if (item.sort === '1') {
            sortOrders[item.key] = 1
          }
        }
      })
      this.sortOrders = sortOrders

      // 处理表格数据
      // 初始化部分变量
      this.currentNum = 1
      this.hashMore = true
      this.isScroll = false
      this.viewTableData = []
      this.childrenKeys = {}
      this.rowShowLength = this.currentNum * this.everyAddNum
      this.tableData.data.forEach(item => {
        if (item.children && item.children.length) {
          this.$set(this.childrenKeys, item.key, false)
        }
      })
      this.initView()
    },
    immediate: true
  },
  nearViewTableData: {
    handler () {
      this.$nextTick(() => {
        const localStylesFlat = !!Object.keys(this.localStyles).length
        let tdStyle = {}

        if (!localStylesFlat) {
          const { tableContent } = this.$refs
          // 同步每列的宽度
          const initKeylocalStyles = []
          // 最小列间距
          const paddingVal = Math.ceil(this.getStrLengthWidth(null, this.pxToVw(7)))
          // 列头或列尾的左右固定边距
          const startOrEndPadding = Math.ceil(this.getStrLengthWidth(null, this.pxToVw(14)))
          // 排序或展开按钮的宽度预留
          const expandOrSortWidth = Math.ceil(this.getStrLengthWidth(null, this.pxToVw(10)))
          // 计算每列所有文案宽度
          const widthDifferenceStatus = {} // 宽度差异状态（判断身体内容是否大于表头内容）
          this.nearViewTableColumns.forEach((vItem, vIndex) => {
            const keylocalStylesArr = []
            vItem.name.split('\n').forEach(colItem => {
              keylocalStylesArr.push(this.getStrLengthWidth(colItem))
            })
            const headerMaxWidth = Math.max(...keylocalStylesArr)

            this.tableData.data.forEach((dItem, dIndex) => {
              keylocalStylesArr.push(this.getStrLengthWidth(dItem[vItem.key]))
              if (dItem.children && dItem.children.length) {
                dItem.children.forEach((dcItem, dcIndex) => {
                  keylocalStylesArr.push(this.getStrLengthWidth(dcItem[vItem.key]))
                })
              }
            })
            const contanerMaxWidth = Math.max(...keylocalStylesArr)
            widthDifferenceStatus[vItem.key] = contanerMaxWidth > (headerMaxWidth + 10)
            // 获取每一列所有文案宽度
            initKeylocalStyles.push(keylocalStylesArr)
          })

          // 根据每一列是否存在展开按钮、排序按钮、第一列、最后一列、当前视图下最后一列等等。。。
          let widthCount = 0 // 文案列宽总和
          let viewLastWidth = 0 // 直观区域列的文案列宽度和
          let paddingCount = 2 * (startOrEndPadding - paddingVal) // 间距总和
          let viewLastColIndex = 0 // 需要做到滑动区域的开始索引
          let tableContentWidth = 0 // 表格所属区域宽度
          let expandOrSortWidthAdd = 0 // 展开或排序的宽度总和
          let viewExpandOrSortWidthAdd = 0 // 视图区域展开或排序的宽度总和

          // maxUnitLengthWidth 最宽字符宽度
          const resetComputed = (maxUnitLengthWidth) => {
            const newMaxUnitLengthWidth = maxUnitLengthWidth || this.maxUnitLengthWidth

            this.colTextMaxWidth = this.getStrLengthWidth('这里最长十个中文字符'.slice(0, newMaxUnitLengthWidth))

            // 设置每一列最大宽度
            const newKeylocalStyles = initKeylocalStyles.map(iItem => {
              const max = Math.max(...iItem)
              const result = max <= this.colTextMaxWidth ? max : this.colTextMaxWidth
              return result
            })

            // 根据每一列是否存在展开按钮、排序按钮、第一列、最后一列、当前视图下最后一列等等。。。
            tdStyle = {}
            widthCount = 0 // 文案列宽总和
            viewLastWidth = 0 // 直观区域列的文案列宽度和
            paddingCount = 2 * (startOrEndPadding - paddingVal) // 间距总和
            viewLastColIndex = 0 // 需要做到滑动区域的开始索引
            tableContentWidth = 0 // 表格所属区域宽度
            expandOrSortWidthAdd = 0 // 展开或排序的宽度总和
            viewExpandOrSortWidthAdd = 0 // 视图区域展开或排序的宽度总和
            // 计算以上声明变量值
            if (tableContent) {
              tableContentWidth = Math.floor(
                parseFloat(window.getComputedStyle(tableContent).width)
              )
              this.nearViewTableColumns.forEach((item, index) => {
                const currentWidthPx = newKeylocalStyles[index] + 1
                widthCount += currentWidthPx
                paddingCount += paddingVal * 2
                const everyDxpandOrSortWidth = (
                  index === 1 && Object.keys(this.childrenKeys).length
                ) ||
                item.isSort ? expandOrSortWidth : 0
                expandOrSortWidthAdd += everyDxpandOrSortWidth

                // console.log('index, widthCount, paddingCount, expandOrSortWidthAdd, ==, tableContentWidth == ', index, widthCount, paddingCount, expandOrSortWidthAdd, widthCount + paddingCount + expandOrSortWidthAdd, tableContentWidth)
                if (widthCount + paddingCount + expandOrSortWidthAdd > tableContentWidth &&
                  !viewLastColIndex) {
                  viewLastColIndex = index
                  // console.log('widthCount + paddingCount + expandOrSortWidthAdd, viewLastColIndex - index == ', widthCount + paddingCount + expandOrSortWidthAdd, viewLastColIndex)
                  viewLastWidth = widthCount - currentWidthPx
                  viewExpandOrSortWidthAdd = expandOrSortWidthAdd - everyDxpandOrSortWidth
                }
                // 设置每个单元格样式
                tdStyle[item.key] = {
                  width: `${currentWidthPx}px`,
                  minWidth: `${currentWidthPx}px`
                }
              })
            }
          }
          resetComputed()

          // 设置可视区域最少展示4列设置
          const contColLen = this.nearViewTableColumns.length
          let curTestMaxStrWidth = 6
          if (contColLen >= 4 && viewLastColIndex - 1 === 2) {
            resetComputed(curTestMaxStrWidth)
            curTestMaxStrWidth -= 1 // 防止死循环
          }

          // 判断是否出现滚动提示箭头
          this.isScroll = !!viewLastColIndex
          viewLastColIndex = viewLastColIndex || this.nearViewTableColumns.length
          viewLastWidth = viewLastWidth || widthCount
          viewExpandOrSortWidthAdd = viewExpandOrSortWidthAdd || expandOrSortWidthAdd
          // 默认间距
          this.defaultColPaddingWidth = 0
          // 判断各种场景下的单元格样式
          this.nearViewTableColumns.forEach((item, index) => {
            // console.log('viewLastColIndex, item == ', viewLastColIndex, item)
            const topNum = tableContentWidth - viewLastWidth - viewExpandOrSortWidthAdd - 2 * startOrEndPadding
            const bottomNum = 2 * (viewLastColIndex - 1)
            this.defaultColPaddingWidth = topNum / bottomNum
            if (!tdStyle[item.key])tdStyle[item.key] = {}
            if (!index) {
              // console.log('1')
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth}px 0 ${startOrEndPadding}px`
            } else if ((index === 1 && Object.keys(this.childrenKeys).length)) {
              // console.log('2')
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth + expandOrSortWidth}px 0 ${this.defaultColPaddingWidth}px`
            } else if (item.isSort && index === viewLastColIndex - 1) {
              // console.log('3')
              tdStyle[item.key].padding = `0 ${startOrEndPadding + expandOrSortWidth}px 0 ${this.defaultColPaddingWidth}px`
            } else if (item.isSort && index === viewLastColIndex) {
              // console.log('4')
              const lPadding = 2 * this.defaultColPaddingWidth - startOrEndPadding
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth + expandOrSortWidth}px 0 ${lPadding > 2 ? lPadding : 2}px`
            } else if (item.isSort && index === this.nearViewTableColumns.length - 1) {
              // console.log('5')
              tdStyle[item.key].padding = `0 ${expandOrSortWidth + startOrEndPadding}px 0 ${this.defaultColPaddingWidth}px`
            } else if (index === this.nearViewTableColumns.length - 1) {
              // console.log('6')
              tdStyle[item.key].padding = `0 ${startOrEndPadding}px 0 ${this.defaultColPaddingWidth}px`
            } else if (index === viewLastColIndex - 1) {
              // console.log('7')
              tdStyle[item.key].padding = `0 ${startOrEndPadding}px 0 ${this.defaultColPaddingWidth}px`
            } else if (index === viewLastColIndex) {
              // console.log('8')
              const lPadding = 2 * this.defaultColPaddingWidth - startOrEndPadding
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth}px 0 ${lPadding > 2 ? lPadding : 2}px`
            } else if (item.isSort) {
              // console.log('9')
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth + expandOrSortWidth}px 0 ${this.defaultColPaddingWidth}px`
            } else {
              // console.log('10')
              tdStyle[item.key].padding = `0 ${this.defaultColPaddingWidth}px 0 ${this.defaultColPaddingWidth}px`              
            }
          })
        }

        // 每次更新可视数据后
        // 同步提示右滑箭头定位
        let aTop = 0
        setTimeout(() => {
          if (this.$refs.headerTableRef) {
            this.$refs.headerTableRef.$el.querySelectorAll('.vs-thead-content').forEach((item) => {
              aTop = item.clientHeight > aTop ? item.clientHeight : aTop
            })
          }
          this.arrowsTop = aTop
        })
        // 表头不变时列样式赋值
        if (!localStylesFlat) {
          this.localStyles = tdStyle
          // console.log('tdStyle == ', tdStyle)
        }
        // 渲染数据
        this.viewTableData = JSON.parse(JSON.stringify(this.nearViewTableData))
        // 表头
        this.viewTableColumns = this.nearViewTableColumns
      })
    },
    immediate: true
  },
  expanded (val) {
    this.$emit('onTableExpandChange', val)
  }
}

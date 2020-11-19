<template>
  <div class="card-table">
    <div class="c-table-conform">
      <div class="c-table-container" ref="cTableContainer">
        <div class="table-box">
          <div 
            class="scroll-icon right"
            v-show="isScroll && scrollIcon"
            :style="{top:'calc('+(arrowsTop/2)+'px)'}"
          >
          <img src="../../../theme-chalk/src/imgs/swipe-arrow-right.png" alt="" class="icon-png">
            <!-- <img :src="require('../svg/arrow-right.svg')" alt="" class="icon-png"> -->
          </div>
          <div 
            class="table-content"
            ref="tableContent"
          >
            <div class="scroll-div" ref="scrollDiv">
              <div class="table-div head-div">
                <table
                  class="table"
                  ref="headerTable"
                >
                  <thead class="thead">
                    <tr class="p-head-tr" ref="scrollTheadTr">
                      <th class="p-head-th"
                        v-for="(item,index) in columns"
                        :key="index"
                        :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
                        :class="[
                          item.isSort === sortKey?'active':'',
                          item.fixed?'opacity':'',
                          item.align?'row-align-'+item.align+'-textalign':
                          (item.fixed?'row-align-center-textalign':'row-align-right-textalign')
                        ]"
                        @click="_sortBy(item)"
                      >
                        <div class="p-head-th-box">
                          <div class="content">
                            <div class="care-icon-box" :class="{'header-sort-box':item.isSort}">
                              {{item.name}}
                              <div class="unit" v-show="item.unit">
                                <div v-show="item.unit">{{item.unit}}</div>
                              </div>
                              <div class="sort-div-ab"
                                :class="{
                                  'sort-div-ab-top': sortOrders[item.key] === -1,
                                  'sort-div-ab-bottom': sortOrders[item.key] === 1
                                }"
                                v-show="item.isSort"
                              >
                                <div class="sort-div-re">
                                  <div class="sort-icon sort-top"
                                    :class="{active:sortOrders[item.key] === -1}"
                                  ></div>
                                  <div class="sort-icon sort-bottom"
                                    :class="{active:sortOrders[item.key] === 1}"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div class="table-div containe-div">
                <table
                  class="table"
                  ref="bodyTable"
                >
                  <tBody
                    class="tbody"
                  >
                    <tr
                      class="p-tr"
                      v-for="(item, index) in viewTableData"
                      :key="index"
                      :ref="item.isChildrens?`trMove${item.key}`:''"
                      :class="{
                        'tr-children': item.isChildrens,
                        'c-children-hide': (item.isChildrens && !childrenKeys[item.key])
                      }"
                    >
                      <template>
                        <td class="p-td"
                          v-for="(item2, index2) in columns"
                          :key="index2"
                          :class="[
                            recordUnitClicks[`${item.key}*${item2.key}`]?'unit-clicked':'',
                            item2.align?'row-align-'+item2.align+'textalign':
                            (item2.fixed?'row-align-center-textalign':'row-align-right-textalign')
                          ]"
                          :style="localStyles[item2.key]"
                          @click="ontableUnitClick( item, index,item2, index2)"
                        >
                          <div class="p-td-container"
                            :class="{opacity:item2.fixed,'c-td-padding':index2 === 1
                            && item.children && item.children.length}"
                            :style="[item2.style]"
                          >
                            <span class="p-td-text"
                              :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                            >{{item[item2.key]}}</span>
                          </div>
                        </td>
                      </template>
                    </tr>
                  </tBody>
                </table>
              </div>
            </div>

            <div class="table-div fixed-div">
              <table
                class="table fixed-table"
              >
                <thead class="thead">
                  <tr class="p-head-tr">
                    <th class="p-head-th"
                      v-for="(item,index) in columns"
                      :key="'item'+index"
                      :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
                      :class="{
                        active: item.isSort === sortKey, shelter: item.fixed,
                        'risk-hasShadow': index===leftFixedIndex && !scrollIcon && isScroll
                      }"
                    >
                      <div class="p-head-th-box"
                        :class="{opacity:!item.fixed}"
                      >
                        <div class="content"
                          :class="[
                            item.align?'row-align-'+item.align+'textalign':
                            (item.fixed?'row-align-center-textalign':'row-align-right-textalign')
                          ]"
                        >
                          <div class="care-icon-box" :class="{'header-sort-box':item.isSort}">
                            {{item.name}}
                            <div class="unit" v-show="item.unit">
                              <div v-show="item.unit">{{item.unit}}</div>
                            </div>
                            <div class="sort-div-ab"
                              :class="{
                                'sort-div-ab-top': sortOrders[item.key] === -1,
                                'sort-div-ab-bottom': sortOrders[item.key] === 1
                              }"
                              v-show="item.isSort"
                            >
                              <div class="sort-div-re">
                                <div class="sort-icon sort-top"
                                  :class="{active:sortOrders[item.key] === -1}"
                                ></div>
                                <div class="sort-icon sort-bottom"
                                  :class="{active:sortOrders[item.key] === 1}"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="tbody fixed-tbody">
                  <tr class="p-tr"
                    v-for="(item, index) in viewTableData"
                    :key="index"
                    :class="{
                      'tr-children': item.isChildrens,
                      'c-children-hide': (item.isChildrens && !childrenKeys[item.key])
                    }"
                  >
                    <template>
                      <td class="p-td"
                        v-for="(item2,index2) in columns"
                        :key="index2"
                        :class="{
                          'p-td-move': !item2.fixed,
                          'c-shelter': item2.fixed,
                          'risk-hasShadow': index2===leftFixedIndex && !scrollIcon && isScroll,
                          'unit-clicked':recordUnitClicks[`${item.key}*${item2.key}`]
                        }"
                        :style="localStyles[item2.key]"
                        @click="ontableUnitClick(item, index,item2,index2)"
                      >
                        <div class="p-td-container"
                          :class="{opacity:!item2.fixed,'c-td-padding': index2===1
                            && item.children && item.children.length}"
                          :style="[item2.style]"
                        >
                          <span class="p-td-text">{{item[item2.key]}}</span>
                        </div>
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CardChildTable',
  data () {
    return {
      sortKey: '', // 当前排序的列key
      sortOrders: {}, // 值为{name: 1/-1, power: 1/-1}, 控制正反排序
      widths: {}, // 所有列宽度
      scrollIcon: true, // 表头最右侧箭头状态
      arrowsTop: 0, // 表头最右侧箭头定位值
      localData: [], 
      columns: [],
      moveLength: 0, // 滑动距离，控制滑动阴影
      localStyles: {}, // 所有列的宽度
      isScroll: false, // 是否存在提示最右滑动icon
      recordUnitClicks: {},
      headerMinHeight: '0',
      numberUUID: '', // 排名列ID
      isDefaultNumber: true, 
      arrowsRange: 10, // 滑动箭头误差值
      maxUnitLengthWidth: 8
    }
  },
  computed: {
    viewTableData () {
      const { sortKey } = this
      const order = this.sortOrders[sortKey]
      let data = this.localData.slice(0)

      if (sortKey && sortKey !== -1) {
        // 表格排序
        data = this.sortTableArr(data, sortKey, order)
      }

      const data2 = []
      data.forEach((item, index) => {
        if (this.isDefaultNumber) {
          // 设置序号
          item[this.columns[0].key] = index + 1
          data2.push(item)
        }
      })
      return data2
    },
    // 单位集合
    hashUnit () {
      return this.columns.some((item) => item.unit)
    },
    // 固定列索引，用于考虑做阴影，目前不考虑右侧固定列
    leftFixedIndex () {
      let index = -1
      this.columns.forEach((item) => {
        if (item.fixed) {
          index += 1
        }
      })
      console.log('index', index)

      return index
    }
  },
  mounted () {
    const data = JSON.parse(localStorage.getItem('cTable'))
    if (data) {
      data.viewTableData.forEach((item, index) => {
        item[data.columns[0].key] = index + 1
      })

      this.localData = data.viewTableData
      const headerName = data.columns[1].name
      if (headerName === '团队') {
        data.columns[1].name = '客户'
      }
      this.columns = data.columns

      this.sortOrders = data.sortOrders
      this.localStyles = data.localStyles
      this.sortKey = data.sortKey
      this.isScroll = data.isScroll
      this.recordUnitClicks = data.recordUnitClicks
      this.headerMinHeight = data.headerMinHeight
      this.isDefaultNumber = data.isDefaultNumber
      this.numberUUID = data.numberUUID
      this.maxUnitLengthWidth = data.maxUnitLengthWidth
      this.$nextTick(() => {
        // 表格是否结束滑动标识
        let isTableMove = false
        this.$refs.scrollDiv.addEventListener('scroll', (e) => {
          const { scrollLeft } = e.target
          isTableMove = true
          this.moveLength = scrollLeft
          e.stopPropagation() // 阻止冒泡
          requestAnimationFrame(() => {
            this.scrollIcon = e.target.scrollLeft === 0
          })
        })
        // this.$refs.scrollDiv.onScroll = 
        this.$refs.scrollDiv.addEventListener('touchend', e => {
          if (isTableMove) {
            this.$emit('onTableTouchEnd')
          }
          isTableMove = false
        })
        this.$refs.scrollDiv.addEventListener('touchmove', e => {
          isTableMove = true
          e.stopPropagation() // 阻止冒泡
        })
        // 提示右滑箭头定位
        let aTop = 0
        setTimeout(() => {
          this.$refs.headerTable.querySelectorAll('.content').forEach((item) => {
            aTop = item.clientHeight > aTop ? item.clientHeight : aTop
          }) 
          this.arrowsTop = aTop
        })
      })
    }
  },
  destroyed () {
    localStorage.removeItem('cTable')
  },
  methods: {
    // 表格排序方法
    sortTableArr (arrList, sortKey, order) {
      const numberArr = []
      const specialArr = []
      arrList.forEach(item => {
        if (item[sortKey] === '-') { // 值为'-'的数据不参与排序，放在表格末尾
          specialArr.push(item)
        } else {
          numberArr.push(item)
        }
      })
      numberArr.sort((a, b) => {
        const firstNum = parseFloat((a[sortKey] || '0'))
        const lastNum = parseFloat((b[sortKey] || '0'))
        return (firstNum === lastNum ? 0 : firstNum > lastNum ? -1 : 1) * order
      })
      return numberArr.concat(specialArr)
    },
    // 点击单元格，这里做了展开/收起子表格操作
    ontableUnitClick (row, rowIndex, col, colIndex) {
      this.$set(this.recordUnitClicks, `${row.key}*${col.key}`, true)
    },
    // 排序···-1（正序）0（无序）1（倒序），三种排序状态
    _sortBy (item) {
      // 没有排序标识return
      if (!item.isSort) {
        return
      }
      const { key, name } = item
      // 当两次点击的排序按钮不一样时
      if (key !== this.sortKey) {
        // 存在this.sortKey则清空上一次排序列状态
        if (this.sortKey) {
          this.$set(this.sortOrders, this.sortKey, 0)
        }
        // 设置新列状态
        this.$set(this.sortOrders, key, 1)
      } else {
        // 设置当前排序列状态
        const status = this.sortOrders[key]
        this.$set(this.sortOrders, key, status === 0 ? 1 : status === 1 ? -1 : 1)
      }
      // 记录这一列的唯一标识
      this.sortKey = key
      // 设置返回值
      const reName = name.split('\n').join('')
      // 设置排序方法
      this.$emit('onTableColSort', { status: this.sortOrders[key], name: reName })
    }
  }
}
</script>

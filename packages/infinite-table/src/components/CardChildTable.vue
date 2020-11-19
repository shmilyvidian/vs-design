<template>
  <div class="infinite-table">
    <div class="infinite-c-table-conform">
      <div class="infinite-c-table-container" ref="cTableContainer">
        <div class="infinite-table-box">
          <div 
            class="infinite-table-scroll-icon right"
            v-show="isScroll && scrollIcon"
            :style="{top:'calc('+(arrowsTop/2)+'px)'}"
          >
          <img src="../../../theme-chalk/src/imgs/swipe-arrow-right.png" alt="" class="infinite-table-icon-png">
            <!-- <img :src="require('../svg/arrow-right.svg')" alt="" class="infinite-table-icon-png"> -->
          </div>
          <div 
            class="infinite-table-content"
            ref="tableContent"
          >
            <div class="infinite-scroll-div" ref="scrollDiv">
              <div class="infinite-table-div head-div">
                <table
                  class="infinite-label-table"
                  ref="headerTable"
                >
                  <thead class="infinite-label-thead">
                    <tr class="infinite-p-head-tr" ref="scrollTheadTr">
                      <th class="infinite-p-head-th"
                        v-for="(item,index) in columns"
                        :key="index"
                        :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
                        :class="[
                          item.isSort === sortKey?'infinite-table-active':'',
                          item.fixed?'infinite-table-opacity':'',
                          item.align?'infinite-row-align-'+item.align+'-textalign':
                          (item.fixed?'infinite-row-align-center-textalign':'infinite-row-align-right-textalign')
                        ]"
                        @click="_sortBy(item)"
                      >
                        <div class="infinite-p-head-th-box">
                          <div class="infinite-thead-content">
                            <div class="infinite-thead-care-icon-box" :class="{'infinite-header-sort-box':item.isSort}">
                              {{item.name}}
                              <div class="infinite-unit" v-show="item.unit">
                                <div v-show="item.unit">{{item.unit}}</div>
                              </div>
                              <div class="infinite-table-sort-div-ab"
                                :class="{
                                  'infinite-table-sort-div-ab-top': sortOrders[item.key] === -1,
                                  'infinite-table-sort-div-ab-bottom': sortOrders[item.key] === 1
                                }"
                                v-show="item.isSort"
                              >
                                <div class="infinite-table-sort-div-re">
                                  <div class="infinite-table-sort-icon infinite-table-sort-top"
                                    :class="{'infinite-table-active':sortOrders[item.key] === -1}"
                                  ></div>
                                  <div class="infinite-table-sort-icon infinite-table-sort-bottom"
                                    :class="{'infinite-table-active':sortOrders[item.key] === 1}"
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

              <div class="infinite-table-div infinite-table-containe-div">
                <table
                  class="infinite-label-table"
                  ref="bodyTable"
                >
                  <tBody
                    class="infinite-label-tbody"
                  >
                    <tr
                      class="infinite-p-tr"
                      v-for="(item, index) in viewTableData"
                      :key="index"
                      :ref="item.isChildrens?`trMove${item.key}`:''"
                      :class="{
                        'infinite-tr-children': item.isChildrens,
                        'infinite-c-children-hide': (item.isChildrens && !childrenKeys[item.key])
                      }"
                    >
                      <template>
                        <td class="infinite-p-td"
                          v-for="(item2, index2) in columns"
                          :key="index2"
                          :class="[
                            recordUnitClicks[`${item.key}*${item2.key}`]?'infinite-unit-clicked':'',
                            item2.align?'infinite-row-align-'+item2.align+'textalign':
                            (item2.fixed?'infinite-row-align-center-textalign':'infinite-row-align-right-textalign')
                          ]"
                          :style="localStyles[item2.key]"
                          @click="ontableUnitClick( item, index,item2, index2)"
                        >
                          <div class="infinite-p-td-container"
                            :class="{'infinite-table-opacity':item2.fixed,'infinite-table-c-td-padding':index2 === 1
                            && item.children && item.children.length}"
                            :style="[item2.style]"
                          >
                            <span class="infinite-p-td-text"
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

            <div class="infinite-table-div infinite-table-fixed-div">
              <table
                class="infinite-label-table infinite-fixed-table"
              >
                <thead class="infinite-label-thead">
                  <tr class="infinite-p-head-tr">
                    <th class="infinite-p-head-th"
                      v-for="(item,index) in columns"
                      :key="'item'+index"
                      :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
                      :class="{
                        'infinite-table-active': item.isSort === sortKey, 'infinite-th-shelter': item.fixed,
                        'infinite-risk-hasShadow': index===leftFixedIndex && !scrollIcon && isScroll
                      }"
                    >
                      <div class="infinite-p-head-th-box"
                        :class="{'infinite-table-opacity':!item.fixed}"
                      >
                        <div class="infinite-thead-content"
                          :class="[
                            item.align?'infinite-row-align-'+item.align+'textalign':
                            (item.fixed?'infinite-row-align-center-textalign':'infinite-row-align-right-textalign')
                          ]"
                        >
                          <div class="infinite-thead-care-icon-box" :class="{'infinite-header-sort-box':item.isSort}">
                            {{item.name}}
                            <div class="infinite-unit" v-show="item.unit">
                              <div v-show="item.unit">{{item.unit}}</div>
                            </div>
                            <div class="infinite-table-sort-div-ab"
                              :class="{
                                'infinite-table-sort-div-ab-top': sortOrders[item.key] === -1,
                                'infinite-table-sort-div-ab-bottom': sortOrders[item.key] === 1
                              }"
                              v-show="item.isSort"
                            >
                              <div class="infinite-table-sort-div-re">
                                <div class="infinite-table-sort-icon infinite-table-sort-top"
                                  :class="{'infinite-table-active':sortOrders[item.key] === -1}"
                                ></div>
                                <div class="infinite-table-sort-icon infinite-table-sort-bottom"
                                  :class="{'infinite-table-active':sortOrders[item.key] === 1}"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="infinite-label-tbody infinite-fixed-tbody">
                  <tr class="infinite-p-tr"
                    v-for="(item, index) in viewTableData"
                    :key="index"
                    :class="{
                      'infinite-tr-children': item.isChildrens,
                      'infinite-c-children-hide': (item.isChildrens && !childrenKeys[item.key])
                    }"
                  >
                    <template>
                      <td class="infinite-p-td"
                        v-for="(item2,index2) in columns"
                        :key="index2"
                        :class="{
                          'infinite-p-td-move': !item2.fixed,
                          'infinite-c-shelter': item2.fixed,
                          'infinite-risk-hasShadow': index2===leftFixedIndex && !scrollIcon && isScroll,
                          'infinite-unit-clicked':recordUnitClicks[`${item.key}*${item2.key}`]
                        }"
                        :style="localStyles[item2.key]"
                        @click="ontableUnitClick(item, index,item2,index2)"
                      >
                        <div class="infinite-p-td-container"
                          :class="{'infinite-table-opacity':!item2.fixed,'infinite-table-c-td-padding': index2===1
                            && item.children && item.children.length}"
                          :style="[item2.style]"
                        >
                          <span class="infinite-p-td-text">{{item[item2.key]}}</span>
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
          this.$refs.headerTable.querySelectorAll('.infinite-thead-content').forEach((item) => {
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

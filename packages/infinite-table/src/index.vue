<template>
  <div class="vs-table"
    :style="{background: tableBgColor}"
  >
    <div class="vs-table-box">
      <div 
        class="vs-table-scroll-icon"
        v-show="isScroll && scrollIcon"
        :style="{top:'calc('+(arrowsTop/2)+'px)'}"
      >
        <!-- <img :src="require('images/swipe-arrow-right.png')" alt="" class="vs-table-icon-png"> -->
        <img :src="swipeArrowRight" alt="" class="vs-table-icon-png">
      </div>
      <div 
        class="vs-table-content"
        ref="tableContent"
      >
        <div class="vs-scroll-div" ref="scrollDiv">
          <CardHeaderTable
            ref="headerTableRef"
            :view-table-columns="viewTableColumns"
            :local-styles="localStyles"
            :default-col-padding-width="defaultColPaddingWidth"
            :sort-orders="sortOrders"
            :sort-key="sortKey"
            :header-min-height="arrowsTop"
            @sortBy="sortBy"
          >
            <!-- <div 
              class="vs-table-ty-tip"
              v-show="isScroll && scrollIconTip"
              slot="tytip"
            ><img src="~@/assets/img/bank/Slide01.png" alt=""></div> -->
          </CardHeaderTable>
          <CardContainerTable
            :view-table-columns="viewTableColumns"
            :view-table-data="viewTableData"
            :local-styles="localStyles"
            :default-col-padding-width="defaultColPaddingWidth"
            :record-unit-clicks="recordUnitClicks"
            :children-keys="childrenKeys"
            :default-children-num="defaultChildrenNum"
            :c-more-height="cMoreHeight"
            :max-unit-length-width="maxUnitLengthWidth"
            @ontableUnitClick="ontableUnitClick"
          ></CardContainerTable>
        </div>
          <CardFixedTable
            :view-table-columns="viewTableColumns"
            :view-table-data="viewTableData"
            :local-styles="localStyles"
            :default-col-padding-width="defaultColPaddingWidth"
            :record-unit-clicks="recordUnitClicks"
            :children-keys="childrenKeys"
            :default-children-num="defaultChildrenNum"
            :c-more-height="cMoreHeight"
            :sort-orders="sortOrders"
            :sort-key="sortKey"
            :left-fixed-index="leftFixedIndex"
            :is-scroll="isScroll"
            :scroll-icon="scrollIcon"
            :client-width="clientWidth"
            :header-min-height="arrowsTop"
            :max-unit-length-width="maxUnitLengthWidth"
            @sortBy="sortBy"
            @ontableUnitClick="ontableUnitClick"
            @openCMore="openCMore"
          ></CardFixedTable>
      </div>
    </div>

    <div class="vs-table-more-box"
      v-if="tableData.data.length > everyAddNum"
    >
      <div class="vs-table-more-btn"
        v-if="hashMore"
        @click="expandClick(true)"
      >
        展开更多<span class="vs-risk-table-more vs-risk-outer-more" ></span>
      </div>
      <div class="vs-table-more-btn"
        v-if="!hashMore"
        @click="expandClick(false)"
      >
        收起<span class="vs-risk-table-more vs-risk-outer-more vs-rotate-45"></span>
      </div>
    </div>
    <div class="vs-table-bottom-padding" v-else></div>
    <Popup
      class="vs-table-picker-popuper"
      position="bottom"
      ref="popup"
      v-model="popupShow"
      v-bind="childComputed"
    >
      <CardChildTable v-if="popupShow" />
    </Popup>

  </div>
</template>
<script>
import swipeArrowRight from '../../theme-chalk/src/imgs/swipe-arrow-right.png'
import CardHeaderTable from './common/CardHeaderTable'
import CardContainerTable from './common/CardContainerTable'
import CardFixedTable from './common/CardFixedTable'
import CardChildTable from './components/CardChildTable'
import { cardTableWatch, cardTableComputed } from './js/index'

import Popup from 'vant/lib/popup'

export default {
  name: 'InfiniteTable',
  components: {
    CardHeaderTable,
    CardContainerTable,
    CardFixedTable,
    CardChildTable,
    Popup
  },
  props: {
    // 表格数据
    tableData: {
      type: Object,
      default: () => ({
        data: [],
        columns: []
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
    },
    // 查看子级的参数配置
    childProp: {
      type: Object,
      default: () => {}
    },
    // 查看子级的style参数配置
    childStyleProp: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      swipeArrowRight,
      popupShow: false, // 表格弹窗开关
      nearViewTableData: [], // 处理中的视图数据
      viewTableData: [], // 真实视图数据
      nearViewTableColumns: [], // 处理中的表头数据
      viewTableColumns: [], // 真实表头数据
      sortKey: '', // 当前排序的列key
      sortOrders: {}, // 值为{name: 1/-1, power: 1/-1}, 控制正反排序
      localStyles: {}, // 所有列的宽度
      clientWidth: 0, // 表格可视区域宽度
      scrollIcon: true, // 表头最右侧箭头状态
      // scrollIconTip: true, // 表头滑动状态提示，发生滑动后不再出现
      isScroll: false, // 是否存在提示最右滑动icon
      hashMore: true, // 加载更多状态
      everyAddNum: 10, // 每次展示几条
      currentNum: 1, // 当前页数
      defaultChildrenNum: 5, // 默认子节点展示数
      rowShowLength: 0, // 最小子节点展示数量
      childrenKeys: {}, // 视图所需子节点key集合
      arrowsTop: 0, // 表头最右侧箭头定位值
      viewTableTime: null, // 
      cMoreHeight: 52, // 子表格查看更多默认高度
      colTextMaxWidth: 0, // 每一列的最长纯文案宽度
      defaultColPaddingWidth: 0, // 默认列之间的padding间距
      recordUnitClicks: {}, // 记录哪些单元格被点击过，达到点击带小数点的单元格后全显
      numberUUID: this.uuid() // 排名列ID
    }
  },
  computed: {
    ...cardTableComputed,
    childComputed () {
      return {
        round: false,
        style: { 
          maxHeight: '90%',
          ...this.childStyleProp
        },
        ...this.childProp
      }
    }
  },
  watch: {
    ...cardTableWatch
  },
  mounted () {
    if (!this.$refs.tableContent) {
      return
    }
    this.rowShowLength = this.everyAddNum * this.currentNum
    this.$nextTick(() => {
      // 表格是否结束滑动标识
      let isTableMove = false
      // 表格最大滑动距离
      // console.log('this.$refs.tableContent == ', this.$refs, this.$refs.tableContent)
      this.clientWidth = Number(this.$refs.tableContent.clientWidth)
      this.$refs.scrollDiv.onscroll = (e) => {
        const { scrollLeft } = e.target
        isTableMove = true
        e.stopPropagation() // 阻止冒泡
        requestAnimationFrame(() => {
          this.scrollIcon = scrollLeft === 0
        })
      }

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
    })
  },
  beforeDestroy () {
    clearTimeout(this.viewTableTime)
  },
  methods: {
    // px 转 vw
    pxToVw (px) {
      return px * 100 / 375
    },
    getStrLengthWidth (str, vw) {
      let spanEl = document.querySelector('#table-read-text-len')
      if (!spanEl) {
        spanEl = document.createElement('span')
        spanEl.style.opacity = '0'
        spanEl.style.position = 'fixed'
        spanEl.style.display = 'inline-block'
        spanEl.style.left = '-9999px'
        spanEl.style.bottom = 0
        spanEl.style.wordBreak = 'break-all'
        spanEl.style.fontSize = `${parseFloat(this.pxToVw(14).toFixed(3))}vw`
        spanEl.setAttribute('id', 'table-read-text-len')
        document.body.appendChild(spanEl)
      }
      if (str) {
        spanEl.innerHTML = str
        spanEl.style.width = 'initial'
        return Math.ceil(parseFloat(window.getComputedStyle(spanEl).width))
      } if (vw) {
        spanEl.style.width = `${vw}vw`
        return Math.ceil(parseFloat(window.getComputedStyle(spanEl).width))
      }
      return 0
    },
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
    // 初始化视图
    initView () {
      // 开始排序
      const { sortKey } = this
      const order = this.sortOrders[sortKey]
      let copyData = this.tableData.data.slice(0)
      if (sortKey && sortKey !== -1) {
        // 子表格排序
        copyData.forEach((aItem) => {
          if (aItem.children && aItem.children.length) {
            aItem.children.sort((a, b) => {
              let firstNum = parseFloat(a[sortKey] || '0')
              let lastNum = parseFloat(b[sortKey] || '0')
              if (a[sortKey] === '-')firstNum = -99999999
              if (b[sortKey] === '-')lastNum = -99999999 * order
              return (firstNum === lastNum ? 0 : firstNum > lastNum ? -1 : 1) * order
            })
          }
        })
        // 父表格排序
        copyData = this.sortTableArr(copyData, sortKey, order)
      }

      // 显示展开后的条数
      const numberData = []
      // 将带有children的放在data list中，并且给该节点设置子节点的标识
      copyData.forEach((item, index) => {
        if (index < this.rowShowLength) {
          // 设置序号
          if (this.isDefaultNumber) {
            item[this.numberUUID] = index + 1
          }
          numberData.push(item)
          // 塞入children
          if (item.children && item.children.length) {
            const cItem = {
              isChildrens: true,
              children: item.children,
              key: item.key
            }
            numberData.push(cItem)
          }
        }
      })

      this.nearViewTableData = numberData
    },
    // 子表格查看更多，即跳转子表格路由
    openCMore (children) {
      // 设置子表格查看更多方法
      this.$emit('onTableOpenChildMore')
      const data = {}
      data.viewTableData = children
      data.columns = this.viewTableColumns
      data.localStyles = this.localStyles
      data.headerMinHeight = this.arrowsTop
      data.sortOrders = this.sortOrders
      data.sortKey = this.sortKey
      data.isScroll = this.isScroll
      data.isDefaultNumber = this.isDefaultNumber
      data.numberUUID = this.numberUUID
      data.recordUnitClicks = this.recordUnitClicks
      data.maxUnitLengthWidth = this.maxUnitLengthWidth
      localStorage.setItem('cTable', JSON.stringify(data))

      this.popupShow = true
      // this.$router.push({
      //   name: 'ChildrenCardTable',
      //   query: {
      //     ...this.goChildTableQuery
      //   }
      // })
    },
    // 关闭所有子节点，目前用于经分移动风险场景
    closeChildrenAll () {
      Object.keys(this.childrenKeys).forEach((key) => this.$set(this.childrenKeys, key, false))
    },
    // 点击展开/收起
    expandClick (status) { // status状态，true展开更多，false收起
      // 当前展开条数是否上限
      // console.log('this.tableData == ? === ', this.tableData, this.tableData.data)
      const compareStatus = this.tableData.data.length > (this.currentNum + 1) * this.everyAddNum
      if (status) {
        if (compareStatus) {
          this.currentNum += 1
          this.rowShowLength = this.currentNum * this.everyAddNum
        } else {
          this.hashMore = false
          this.rowShowLength = this.tableData.data.length
        }
        // 设置展开方法
        this.$emit('onTableUnfoldMore')
      } else {
        this.hashMore = true
        this.rowShowLength = 1 * this.everyAddNum
        // 设置收起方法
        this.$emit('onTableFold')
      }
      this.initView()
    },
    // 排序···-1（正序）0（无序）1（倒序），三种排序状态
    sortBy (item) {
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
      this.initView()
      // 设置返回值
      const reName = name.split('\n').join('')
      // 设置排序方法
      this.$emit('onTableColSort', { status: this.sortOrders[key], name: reName })
    },

    // 点击单元格，这里做了展开/收起子表格操作
    ontableUnitClick (hashChildren, row, rowIndex, col, colIndex) {
      if (!col.closeClickRead) {
        this.$set(this.recordUnitClicks, `${row.key}*${col.key}`, true)
      }
      // 设置查看子节点方法
      const name = row[col.key]
      // 此处发生修改，此方法关联处也发生修改
      this.$emit('ontableUnitClick', { name, status: !!this.childrenKeys[row.key], row, rowIndex, col, colIndex })
      // 不存在子节点时
      if (!hashChildren) return
      // 设置当前子节点状态
      this.$set(this.childrenKeys, row.key, !this.childrenKeys[row.key])
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
    }
  }

}
</script>

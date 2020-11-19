<template>
  <div class="infinite-table-div infinite-table-fixed-div">
    <table
      class="infinite-label-table infinite-fixed-table"
    >
      <thead class="infinite-label-thead">
        <tr class="infinite-p-head-tr">
          <th class="infinite-p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="'item'+index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="[
              item.isSort === sortKey?'infinite-table-active':'',
              item.fixed?'infinite-th-shelter':'',
              index===leftFixedIndex && !scrollIcon && isScroll?'infinite-risk-hasShadow':'',
              item.align?'infinite-row-align-'+item.align+'-textalign':
              (item.fixed?'infinite-row-align-center-textalign':'infinite-row-align-right-textalign')
            ]"
          >
            <div class="infinite-p-head-th-box"
              :class="{'infinite-table-opacity':!item.fixed}"
            >
              <div class="infinite-thead-content">
                <div class="infinite-thead-care-icon-box">
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
                    :style="{
                      right:defaultColPaddingWidth + 'px'
                    }"
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
          <template v-if="item.isChildrens">
            <td class="infinite-p-td" :colspan="viewTableColumns.length">
              <div class="infinite-nest-table">
                <table class="infinite-label-c-table">
                  <template v-for="(cItemR, cIndexR) in item.children">
                    <tr class="infinite-label-c-table-c-tr"
                      v-if="cIndexR < defaultChildrenNum"
                      :key="`cItemR${cIndexR}`"
                    >
                      <td class="infinite-label-c-table-c-td"
                        v-for="(cItemC,cIndex) in viewTableColumns"
                        :key="`cItemC${cIndex}`"
                        :class="{
                          'infinite-c-td-move': !cItemC.fixed,
                          'infinite-c-shelter': cItemC.fixed,
                          'infinite-risk-hasShadow':cIndex===leftFixedIndex && !scrollIcon && isScroll,
                          'infinite-unit-clicked':recordUnitClicks[`${cItemR.key}*${cItemC.key}`]
                        }"
                        :style="localStyles[cItemC.key]"
                        @click="ontableUnitClick(false,cItemR, index,cItemC,cIndex)"
                      >
                        <div class="infinite-c-td-container"
                          :style="[cItemC.style]"
                        >
                          <span class="infinite-c-td-text" 
                            :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                          >{{cItemR[cItemC.key]}}</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </table>
                <div class="infinite-table-fixed-c-more-btn"
                  v-if="item.children.length > defaultChildrenNum"
                  :style="{height:cMoreHeight+'px',width:clientWidth+'px'}"
                  @click="openCMore(item.children)"
                >
                  查看更多<span class="infinite-risk-table-more rotate45"></span>
                </div>
              </div>
            </td>
          </template>
          <template v-else>
            <td class="infinite-p-td"
              v-for="(item2,index2) in viewTableColumns"
              :key="index2"
              :class="{
                'infinite-p-td-move': !item2.fixed,
                'infinite-c-shelter': item2.fixed,
                'infinite-risk-hasShadow':index2===leftFixedIndex && !scrollIcon && isScroll,
                'infinite-col-2-ischildrens':index2===1 && Object.keys(childrenKeys).length,
                'infinite-unit-clicked':recordUnitClicks[`${item.key}*${item2.key}`]
              }"
              :style="localStyles[item2.key]"
              @click="ontableUnitClick(item.children && 
                item.children.length &&
              index2 === 1, item, index,item2,index2)"
            >
              <div class="infinite-p-td-container"
                :class="{'infinite-table-opacity':!item2.fixed}"
                :style="[item2.style]"
              >
                <span class="infinite-p-td-text" 
                  :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                >{{item[item2.key]}}</span>
                <div class="infinite-table-icon-up"
                  v-if="item.children &&
                  item.children.length &&
                  item2.fixed && index2===leftFixedIndex &&
                  childrenKeys[item.key]"
                  :style="{
                    right: defaultColPaddingWidth + 'px'
                  }"
                ></div>
                <div class="infinite-table-icon-down"
                  v-if="item.children &&
                  item.children.length &&
                  item2.fixed && index2===leftFixedIndex &&
                  !childrenKeys[item.key]"
                  :style="{
                    right: defaultColPaddingWidth + 'px'
                  }"
                ></div>
              </div>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'CardFixedTable',
  components: {
    
  },
  props: {
    // 列数据
    viewTableColumns: {
      type: Array,
      default: () => []
    },
    // 行数据
    viewTableData: {
      type: Array,
      default: () => []
    },
    // 单元格style
    localStyles: {
      type: Object,
      default: () => {}
    },
    // 排序key集合
    sortOrders: {
      type: Object,
      default: () => {}
    },
    // 排序key
    sortKey: {
      type: String,
      default: ''
    },
    // 记录哪些单元格被点击过
    recordUnitClicks: {
      type: Object,
      default: () => {}
    },
    // 实际视图所需子节点key集合
    childrenKeys: {
      type: Object,
      default: () => {}
    },
    // 默认列之间的padding间距
    defaultColPaddingWidth: {
      type: [Number, String],
      default: 0
    },
    // 阴影列
    leftFixedIndex: {
      type: [Number, String],
      default: 1
    },
    // 查看更多高度
    cMoreHeight: {
      type: [Number, String],
      default: 0
    },
    // 默认展开子节点数量
    defaultChildrenNum: {
      type: [Number, String],
      default: 0
    },
    // 视图宽度
    clientWidth: {
      type: [Number, String],
      default: 0
    },
    // 是否可以滑动
    isScroll: {
      type: Boolean,
      default: false
    },
    // 当前滑动箭头状态
    scrollIcon: {
      type: Boolean,
      default: false
    },
    // 表头最小高度
    headerMinHeight: {
      type: [Number, String],
      default: '0'
    },
    maxUnitLengthWidth: {
      type: Number,
      default: 8
    }
  },
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  methods: {
    // 单元格点击
    ontableUnitClick (hashChildren, row, rowIndex, col, colIndex) {
      this.$emit('ontableUnitClick', hashChildren, row, rowIndex, col, colIndex)
    },
    sortBy (item) {
      this.$emit('sortBy', item)
    },
    openCMore (children) {
      this.$emit('openCMore', children)
    }
  }
}
</script>

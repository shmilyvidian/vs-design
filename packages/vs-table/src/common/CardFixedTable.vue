<template>
  <div class="vs-table-div vs-table-fixed-div">
    <table
      class="vs-label-table vs-fixed-table"
    >
      <thead class="vs-label-thead">
        <tr class="vs-p-head-tr">
          <th class="vs-p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="'item'+index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="[
              item.isSort === sortKey?'vs-table-active':'',
              item.fixed?'vs-th-shelter':'',
              index===leftFixedIndex && !scrollIcon && isScroll?'vs-risk-hasShadow':'',
              item.align?'vs-row-align-'+item.align+'-textalign':
              (item.fixed?'vs-row-align-center-textalign':'vs-row-align-right-textalign')
            ]"
          >
            <div class="vs-p-head-th-box"
              :class="{'vs-table-opacity':!item.fixed}"
            >
              <div class="vs-thead-content">
                <div class="vs-thead-care-icon-box">
                  {{item.name}}
                  <div class="vs-unit" v-show="item.unit">
                    <div v-show="item.unit">{{item.unit}}</div>
                  </div>
                  <div class="vs-table-sort-div-ab"
                    :class="{
                      'vs-table-sort-div-ab-top': sortOrders[item.key] === -1,
                      'vs-table-sort-div-ab-bottom': sortOrders[item.key] === 1
                    }"
                    v-show="item.isSort"
                    :style="{
                      right:defaultColPaddingWidth + 'px'
                    }"
                  >
                    <div class="vs-table-sort-div-re">
                      <div class="vs-table-sort-icon vs-table-sort-top"
                        :class="{'vs-table-active':sortOrders[item.key] === -1}"
                      ></div>
                      <div class="vs-table-sort-icon vs-table-sort-bottom"
                        :class="{'vs-table-active':sortOrders[item.key] === 1}"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="vs-label-tbody vs-fixed-tbody">
        <tr class="vs-p-tr"
          v-for="(item, index) in viewTableData"
          :key="index"
          :class="{
            'vs-tr-children': item.isChildrens,
            'vs-c-children-hide': (item.isChildrens && !childrenKeys[item.key])
          }"
        >
          <template v-if="item.isChildrens">
            <td class="vs-p-td" :colspan="viewTableColumns.length">
              <div class="vs-nest-table">
                <table class="vs-label-c-table">
                  <template v-for="(cItemR, cIndexR) in item.children">
                    <tr class="vs-label-c-table-c-tr"
                      v-if="cIndexR < defaultChildrenNum"
                      :key="`cItemR${cIndexR}`"
                    >
                      <td class="vs-label-c-table-c-td"
                        v-for="(cItemC,cIndex) in viewTableColumns"
                        :key="`cItemC${cIndex}`"
                        :class="[
                          !cItemC.fixed?'vs-c-td-move':'',
                          cItemC.fixed?'vs-c-shelter':'',
                          cIndex===leftFixedIndex && !scrollIcon && isScroll?'vs-risk-hasShadow':'',
                          recordUnitClicks[`${cItemR.key}*${cItemC.key}`]?'vs-unit-clicked':'',
                          cItemC.align?'vs-row-align-'+cItemC.align+'-textalign':
                          (cItemC.fixed?'vs-row-align-center-textalign':'vs-row-align-right-textalign')
                        ]"
                        :style="localStyles[cItemC.key]"
                        @click="ontableUnitClick(false,cItemR, index,cItemC,cIndex)"
                      >
                        <div class="vs-c-td-container"
                          :style="[cItemC.style]"
                        >
                          <span class="vs-c-td-text" 
                            :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                          >{{cItemR[cItemC.key]}}</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </table>
                <div class="vs-table-fixed-c-more-btn"
                  v-if="item.children.length > defaultChildrenNum"
                  :style="{height:cMoreHeight+'px',width:clientWidth+'px'}"
                  @click="openCMore(item.children)"
                >
                  查看更多<span class="vs-risk-table-more vs-rotate45"></span>
                </div>
              </div>
            </td>
          </template>
          <template v-else>
            <td class="vs-p-td"
              v-for="(item2,index2) in viewTableColumns"
              :key="index2"
              :class="{
                'vs-p-td-move': !item2.fixed,
                'vs-c-shelter': item2.fixed,
                'vs-risk-hasShadow':index2===leftFixedIndex && !scrollIcon && isScroll,
                'vs-col-2-ischildrens':index2===1 && Object.keys(childrenKeys).length,
                'vs-unit-clicked':recordUnitClicks[`${item.key}*${item2.key}`]
              }"
              :style="localStyles[item2.key]"
              @click="ontableUnitClick(item.children && 
                item.children.length &&
              index2 === 1, item, index,item2,index2)"
            >
              <div class="vs-p-td-container"
                :class="{'vs-table-opacity':!item2.fixed}"
                :style="[item2.style]"
              >
                <span class="vs-p-td-text" 
                  :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                >{{item[item2.key]}}</span>
                <div class="vs-table-icon-up"
                  v-if="item.children &&
                  item.children.length &&
                  item2.fixed && index2===leftFixedIndex &&
                  childrenKeys[item.key]"
                  :style="{
                    right: defaultColPaddingWidth + 'px'
                  }"
                ></div>
                <div class="vs-table-icon-down"
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
    openCMore (children) {
      this.$emit('openCMore', children)
    }
  }
}
</script>

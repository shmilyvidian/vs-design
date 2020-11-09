<template>
  <div class="table-div fixed-div">
    <table
      class="table fixed-table"
    >
      <thead class="thead">
        <tr class="p-head-tr">
          <th class="p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="'item'+index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="[
              item.isSort === sortKey?'active':'',
              item.fixed?'shelter':'',
              index===leftFixedIndex && !scrollIcon && isScroll?'risk-hasShadow':'',
              item.align?'row-align-'+item.align+'-textalign':
              (item.fixed?'row-align-center-textalign':'row-align-right-textalign')
            ]"
          >
            <div class="p-head-th-box"
              :class="{opacity:!item.fixed}"
            >
              <div class="content">
                <div class="care-icon-box">
                  {{item.name}}
                  <div class="unit" v-show="item.unit">
                    <div v-show="item.unit">{{item.unit}}</div>
                  </div>
                  <div class="sort-div-ab"
                    v-show="item.isSort"
                    :style="{
                      right:defaultColPaddingWidth + 'px'
                    }"
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
          <template v-if="item.isChildrens">
            <td class="p-td" :colspan="viewTableColumns.length">
              <div class="nest-table">
                <table class="c-table">
                  <template v-for="(cItemR, cIndexR) in item.children">
                    <tr class="c-tr"
                      v-if="cIndexR < defaultChildrenNum"
                      :key="`cItemR${cIndexR}`"
                    >
                      <td class="c-td"
                        v-for="(cItemC,cIndex) in viewTableColumns"
                        :key="`cItemC${cIndex}`"
                        :class="{
                          'c-td-move': !cItemC.fixed,
                          'c-shelter': cItemC.fixed,
                          'risk-hasShadow':cIndex===leftFixedIndex && !scrollIcon && isScroll,
                          'unit-clicked':recordUnitClicks[`${cItemR.key}*${cItemC.key}`]
                        }"
                        :style="localStyles[cItemC.key]"
                        @click="ontableUnitClick(false,cItemR, index,cItemC)"
                      >
                        <div class="c-td-container"
                          :style="[cItemC.style]"
                        >
                          <span class="c-td-text" 
                            :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                          >{{cItemR[cItemC.key]}}</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </table>
                <div class="fixed-c-more-btn"
                  v-if="item.children.length > defaultChildrenNum"
                  :style="{height:cMoreHeight+'px',width:clientWidth+'px'}"
                  @click="openCMore(item,children)"
                >
                  查看更多<span class="risk-table-more rotate45"></span>
                </div>
              </div>
            </td>
          </template>
          <template v-else>
            <td class="p-td"
              v-for="(item2,index2) in viewTableColumns"
              :key="index2"
              :class="{
                'p-td-move': !item2.fixed,
                'c-shelter': item2.fixed,
                'risk-hasShadow':index2===leftFixedIndex && !scrollIcon && isScroll,
                'col-2-ischildrens':index2===1 && Object.keys(childrenKeys).length,
                'unit-clicked':recordUnitClicks[`${item.key}*${item2.key}`]
              }"
              :style="localStyles[item2.key]"
              @click="ontableUnitClick(item.children && 
                item.children.length &&
              index2 === 1, item, index,item2)"
            >
              <div class="p-td-container"
                :class="{opacity:!item2.fixed}"
                :style="[item2.style]"
              >
                <span class="p-td-text" 
                  :class="maxUnitLengthWidth<8?'line-clamp-3':''"
                >{{item[item2.key]}}</span>
                <div class="icon-up"
                  v-if="item.children &&
                  item.children.length &&
                  item2.fixed && index2===leftFixedIndex &&
                  childrenKeys[item.key]"
                  :style="{
                    right: defaultColPaddingWidth + 'px'
                  }"
                ></div>
                <div class="icon-down"
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
    ontableUnitClick (hashChildren, row, rowIndex, col) {
      this.$emit('ontableUnitClick', hashChildren, row, rowIndex, col)
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

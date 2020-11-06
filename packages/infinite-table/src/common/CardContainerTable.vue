<template>
  <div class="infinite-table-div infinite-containe-div">
    <table
      class="infinite-table"
      ref="bodyTable"
    >
      <tBody
        class="infinite-tbody"
      >
        <tr
          class="infinite-p-tr"
          v-for="(item, index) in viewTableData"
          :key="index"
          :ref="item.isChildrens?`trMove${item.key}`:''"
          :class="{
            'tr-children': item.isChildrens,
            'c-children-hide': (item.isChildrens && !childrenKeys[item.key])
          }"
        >
          <template v-if="item.isChildrens">
            <td class="infinite-p-td" :colspan="viewTableColumns.length">
              <div class="infinite-nest-table" :ref="`rightMove${item.key}`">
                <table class="infinite-c-table">
                  <template v-for="(cItemR, cIndexR) in item.children">
                    <tr class="infinite-c-tr"
                      v-if="cIndexR < defaultChildrenNum"
                      :key="`cItemR${cIndexR}`"
                    >
                      <td class="infinite-c-td"
                        v-for="(cItemC,cIndex) in viewTableColumns"
                        :key="`cItemC${cIndex}`"
                        :class="[
                          cItemC.fixed?'opacity':'',
                          recordUnitClicks[`${cItemR.key}*${cItemC.key}`]?'unit-clicked':'',
                          cItemC.align?'row-align-'+cItemC.align+'-textalign':
                          (cItemC.fixed?'row-align-center-textalign':'row-align-right-textalign')
                        ]"
                        :style="localStyles[cItemC.key]"
                        @click="ontableUnitClick(false,cItemR, index,cItemC)"
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
                <div class="infinite-container-c-more-btn"
                  v-if="item.children.length > defaultChildrenNum"
                  :style="{height:cMoreHeight+'px'}"
                >
                  占位符
                </div>
              </div>
            </td>
          </template>
          <template v-else>
            <td class="infinite-p-td"
              v-for="(item2, index2) in viewTableColumns"
              :key="index2"
              :class="[
                index2 === 1 && Object.keys(childrenKeys.length?'col-2-ischildrens':''),
                recordUnitClicks[`${item.key}*${item2.key}`]?'unit-clicked':'',
                item2.align?'row-align-'+item2.align+'textalign':
                (item2.fixed?'row-align-center-textalign':'row-align-right-textalign')
              ]"
              :style="localStyles[item2.key]"
              @click="ontableUnitClick(item.children && 
                item.children.length && 
              index===1, item, index, item2)"
            >
              <div class="infinite-p-td-container"
                :class="{opacity:item2.fixed}"
                :style="[item2.style]"
              >
                <span class="infinite-p-td-text"
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
                  index2 === 1 &&
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
      </tBody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'CardContainerTable',
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
    maxUnitLengthWidth: {
      type: Number,
      default: 8
    },
    leftFixedIndex: {
      type: Number,
      default: -1
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
    }
  }
}
</script>

<template>
  <div class="infinite-table-div infinite-head-div">
    <table
      class="infinite-table"
      ref="headerTable"
    >
      <thead class="infinite-thead">
        <tr class="infinite-p-head-tr" ref="scrollTheadTr">
          <th class="infinite-p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="[
              item.isSort === sortKey?'active':'',
              item.fixed?'opacity':'',
              item.align?'row-align-'+item.align+'-textalign':
              (item.fixed?'row-align-center-textalign':'row-align-right-textalign')
            ]"
            @click="sortBy(item)"
          >
            <div class="infinite-p-head-th-box">
              <div class="infinite-content" :name="item.name">
                <div class="infinite-care-icon-box">
                  {{item.name}}
                  <div class="infinite-unit" v-show="item.unit">
                    <div v-show="item.unit">{{item.unit}}</div>
                  </div>
                  <div class="infinite-sort-div-ab"
                    v-show="item.isSort"
                    :style="{
                      right:defaultColPaddingWidth + 'px'
                    }"
                  >
                    <div class="infinite-sort-div-re">
                      <div class="infinite-sort-icon infinite-sort-top"
                        :class="{active:sortOrders[item.key] === -1}"
                      ></div>
                      <div class="infinite-sort-icon infinite-sort-bottom"
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
</template>
<script>

export default {
  name: 'CardHeaderTable',
  components: {
    
  },
  props: {
    // 列数据
    viewTableColumns: {
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
    // 默认列之间的padding间距
    defaultColPaddingWidth: {
      type: [Number, String],
      default: 0
    },
    // 表头最小高度
    headerMinHeight: {
      type: [Number, String],
      default: '0'
    }
  },
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  methods: {
    sortBy (item) {
      this.$emit('sortBy', item)
    }
  }
}
</script>

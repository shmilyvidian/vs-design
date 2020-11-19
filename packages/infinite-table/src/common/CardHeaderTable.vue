<template>
  <div class="infinite-table-div head-div">
    <table
      class="infinite-label-table"
      ref="headerTable"
    >
      <thead class="infinite-label-thead">
        <tr class="infinite-p-head-tr" ref="scrollTheadTr">
          <th class="infinite-p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="{
              'infinite-table-active': item.isSort === sortKey,'infinite-table-opacity':item.fixed,
              'infinite-row-align-right-flex':!item.fixed
            }"
            @click="sortBy(item)"
          >
            <div class="infinite-p-head-th-box">
              <div class="infinite-thead-content" :name="item.name">
                <div class="infinite-thead-care-icon-box">
                  {{item.name}}
                  <div class="infinite-unit" v-show="item.unit">
                    <div v-show="item.unit">({{item.unit}})</div>
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

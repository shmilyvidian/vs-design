<template>
  <div class="vs-table-div vs-head-div">
    <table
      class="vs-label-table"
      ref="headerTable"
    >
      <thead class="vs-label-thead">
        <tr class="vs-p-head-tr" ref="scrollTheadTr">
          <th class="vs-p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="{
              'vs-table-active': item.isSort === sortKey,'vs-table-opacity':item.fixed,
              'vs-row-align-right-flex':!item.fixed
            }"
            @click="sortBy(item)"
          >
            <div class="vs-p-head-th-box">
              <div class="vs-thead-content" :name="item.name">
                <div class="vs-thead-care-icon-box">
                  {{item.name}}
                  <div class="vs-unit" v-show="item.unit">
                    <div v-show="item.unit">({{item.unit}})</div>
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

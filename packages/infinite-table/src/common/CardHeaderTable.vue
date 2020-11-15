<template>
  <div class="table-div head-div">
    <table
      class="table"
      ref="headerTable"
    >
      <thead class="thead">
        <tr class="p-head-tr" ref="scrollTheadTr">
          <th class="p-head-th"
            v-for="(item,index) in viewTableColumns"
            :key="index"
            :style="[{minHeight:headerMinHeight+'px'},localStyles[item.key]]"
            :class="{
              active: item.isSort === sortKey,opacity:item.fixed,
              'row-align-right-flex':!item.fixed
            }"
            @click="sortBy(item)"
          >
            <div class="p-head-th-box">
              <div class="content" :name="item.name">
                <div class="care-icon-box">
                  {{item.name}}
                  <div class="unit" v-show="item.unit">
                    <div v-show="item.unit">({{item.unit}})</div>
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

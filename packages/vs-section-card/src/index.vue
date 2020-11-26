<template>
  <div class="infinite-slide-section"
    ref="listItemCard"
    @click="clickComponent"
  >
    <slot nme="tabs"></slot>
    <slot name="likeIcon"></slot>
    <div class="slide-wrap">
      <div 
        :class="`message-item ${sectionCardData.id || ''}`"
        v-for="(list, index) in (sectionCardData.dataList || [])"
        :key="index"
      >
        <ListItem
          :data="list"
        />
        <div 
          class="jumpDetais"
          v-if="sectionCardData.jumpDetais 
            && Array.isArray(sectionCardData.jumpDetais) 
            && sectionCardData.jumpDetais[index]"
          slot="jumpDetais"
          @click="jump(sectionCardData.jumpDetais[index])"
        >
          查看详情
          <!-- <i class="icon right"></i> -->
        </div>
      </div>
    </div>
    <slot name="jumpDetails"></slot>
    <slot name="component"></slot>
    <div class=""
      v-if="sectionCardData.dateUpdateTime"
      :class="{
        'updateTime': true,
        'hasjump': sectionCardData.jumpDetails
      }"
    >
      {{updateTimeTexts[updateTimeTextIndex]}}{{sectionCardData.dateUpdateTime}}
    </div>
  </div>
</template>
<script>

// import html2canvas from 'html2canvas'
import ListItem from './components/ListItem'

export default {
  name: 'VsSectionCard',
  components: {
    ListItem
  },
  props: {
    // 表格数据
    sectionCardData: {
      type: Object,
      default: () => ({
        dataList: []
      })
    },
    newBalanceTabsModel: {
      type: Object,
      default: () => ({})
    },
    updateTimeTextIndex: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      updateTimeTexts: [
        '数据截止时间',
        '统计时间',
        ''
      ],
      newBalanceLen: 1
    }
  },
  computed: {

  },
  watch: {
      
  },
  mounted () {
      
  },
  beforeDestroy () {
      
  },
  methods: {
    // 卡片点击事件
    clickComponent () {
      this.$emit('clickComponent')
    },
    jump (val) {
      this.$emit('jump', val)
    },
    // 提问功能截图
    getChartImageData (callback) {
      if (typeof (callback) !== 'function') {
        throw new Error('callback required')
      }
      if (!this.$refs.listItemCard) {
        this.$mtoast.show('暂无数据，无法提交问题')
      }
      // html2canvas(this.$refs.listItemCard, {
      //   scale: 2,
      //   logging: false,
      //   useCORS: true,
      //   backgroundColor: ''
      // }).then((canvas) => {
      //   callback(canvas.toDataURL())
      // })
    }
  }
}
</script>

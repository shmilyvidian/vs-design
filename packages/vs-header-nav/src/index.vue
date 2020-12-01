<template>
  <header class="vs-header-wrapper test" :style="insertStyle">
    <div class="vs-header-left" @click="goBack" :class="{'no-visibility': !showBackIcon}">
      <i  v-if="useVantIcon" class="van-icon van-icon-arrow-left" :style="{color: color, fontSize: size}"></i>
      <slot name="leftItem"/>
    </div>
    <div class="vs-header-title" :class="{'vs-right-padding': !hasRightSlot}">
      <div class="title-content">
        <slot name="centerItem"/>
      </div> 
    </div>
    <div class="vs-header-right">
      <slot name="rightItem"/>
    </div>
  </header>
</template>
<script>

export default {
  name: 'VsHeaderNav',
  props: {
    showBackIcon: {
      type: Boolean,
      default: true
    },
    // 是否使用vant icon，默认true
    useVantIcon: {
      type: Boolean,
      default: true
    },
    // 定制icon颜色
    color: {
      type: String,
      default: 'orange'
    },
    // icon大小，默认单位为 px
    size: {
      type: [Number, String],
      default: '22px'
    },
    insertStyle: {
      type: Object,
      default: () => {
        return {
          color: '#fff'
        }
      }
    }
  },
  data () {
    return {
      hasRightSlot: false
    }
  },
  created () {
    // 获取slots
    const rightItem = this.$slots.rightItem
    // 如果右侧slot 有内容
    if (rightItem) {
      this.hasRightSlot = true
    };
  },
  methods: {
    goBack () {
      console.log('child goBack')
      this.showBackIcon && this.$emit('goBack')
    }
  },
}
</script>

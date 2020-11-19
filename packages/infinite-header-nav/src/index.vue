<template>
  <header class="header-wrapper" :style="insertStyle">
    <div class="header-left" @click="goBack" :class="{'no-visibility': !showBackIcon}">
      <van-icon v-if="useVant" name="arrow-left" :color="color" :size="size">
      </van-icon>
      <img v-else class="arrow-icon" :style="{width: size}" :src="require('../../theme-chalk/src/imgs/arrow.png')" alt="">
      <slot name="leftItem"/>
    </div>
    <div class="header-title" :class="{'right-padding': !hasRightSlot}">
      <div class="title-content">
        <slot name="centerItem"/>
      </div> 
    </div>
    <div class="header-right">
      <slot name="rightItem"/>
    </div>
  </header>
</template>
<script>
import VanIcon from 'vant/lib/icon'

export default {
  name: 'InfiniteHeaderNav',
  components: {
    VanIcon
  },
  props: {
    showBackIcon: {
      type: Boolean,
      default: true
    },
    // 是否使用vant icon，默认true
    useVant: {
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
  mounted () {
    console.log(this.insertStyle)
  }
}
</script>

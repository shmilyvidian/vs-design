<template>
  <header class="header-wrapper" :style="insertStyle">
    <div class="header-left" @click="goBack">
      <van-icon v-if="useVant" name="arrow-left" :color="color" :size="size">
      </van-icon>
      <img v-else class="arrow-icon" :style="{width: size}" src="~packages/images/common-icon/arrow.png" alt="">
      <slot name="leftItem"/>
    </div>
    <div class="header-title">
      <slot name="centerItem"/>
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
  methods: {
    goBack() {
      console.log('child goBack');
      this.$emit('goBack');
    }
  },
  mounted () {
    console.log('insertStyle');
    console.log(this.insertStyle);
  }
}
</script>

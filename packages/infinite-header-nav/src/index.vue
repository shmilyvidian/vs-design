<template>
  <header class="header-wrapper" :style="{insertStyle}">
    <div class="header-left">
      <van-icon name="arrow-left" :color="color" :size="size" />
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
    // 定制icon颜色
    color: {
      type: String,
      default: 'orange'
    },
    // icon大小，默认单位为 px
    size: {
      type: [Number, String],
      default: '18'
    },
    insertStyle: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick() {
      console.log('child loading click');
      this.$emit('handleClick');
    }
  },
  mounted () {
    console.log('insertStyle');
console.log(this.insertStyle);
  }
}
</script>

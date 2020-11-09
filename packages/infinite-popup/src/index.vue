<template>
  <div class="infinite-popup">
    <Popup v-model="isShow"
    @click-overlay="onClickOverlay">内容</Popup>
  </div>
</template>

<script>
import Popup from 'vant/lib/Popup'

export default {
  name: 'InfinitePopup',
  components: {
    Popup
  },
  model: {
    prop: 'show',
    event: 'currentShow'
  },
  props: {
    // 是否处于加载中状态
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    
  },
  data () {
    return {
      isShow: this.show
    }
  },
  watch: {
    show: {
      handler (val) {
        this.isShow = this.show
        // this.$emit('onPopupShow', val)
      },
      immediate: true
    }
  },
  methods: {
    onClickOverlay(){
      console.log(1231232)
      this.$emit('onClickOverlay')
    }
  } 
}
</script>
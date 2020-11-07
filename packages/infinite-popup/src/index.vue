<template>
  <div class="infinite-popup">
    <van-popup v-model="isShow"
    @click-overlay="onClickOverlay">内容</van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
import 'vant/lib/popup/style'

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
<template>
  <div class="infinite-pull-refresh">
    <PullRefresh
      style="min-height: 100px;"
      v-model="isVanLoading"
      :pulling-text='pullingText'
      @refresh="onRefresh"
    >
      <p>刷新次数: {{ count }}</p>
    </PullRefresh>
  </div>
</template>

<script>
import PullRefresh from 'vant/lib/pull-refresh'
import Toast from 'vant/lib/toast';

export default {
  name: 'InfinitePullRefresh',
  components: {
    PullRefresh
  },
  model: {
    prop: 'isLoading',
    event: 'currentIsLoading'
  },
  props: {
    // 是否处于加载中状态
    isLoading: {
      type: Boolean,
      default: false,
      required: false
    },
    // 下拉过程提示文案
    pullingText: {
      type: String,
      default: '下拉即可刷新...',
      required: false
    },
    // 释放过程提示文案
    loosingText: {
      type: String,
      default: '释放即可刷新...',
      required: false
    },
    // 加载过程提示文案
    loadingText: {
      type: String,
      default: '加载中...',
      required: false
    },
    // 刷新成功提示文案
    successText: {
      type: String,
      default: '刷新成功提示文案',
      required: false
    },
    // 刷新成功提示展示时长(ms)
    successDuration: {
      type: [Number, String],
      default: 500,
      required: false
    },
    // 动画时长
    animationDuration: {
      type: [Number, String],
      default: 300,
      required: false
    },
    // 顶部内容高度
    headHeight: {
      type: [Number, String],
      default: 50,
      required: false
    },
    // 是否禁用下拉刷新
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data () {
    return {
      count: 0,
      isVanLoading: this.isLoading
    }
  },
  watch: {
    isVanLoading: {
      handler (val) {
        this.$emit('currentIsLoading', val)
      },
      immediate: true
    }
  },
  methods: {
    // 下拉刷新事件回调
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功');
        this.$emit('onRefresh')
        this.isVanLoading = false;
        this.count++;
      }, 1000);
    }
  }
}
</script>
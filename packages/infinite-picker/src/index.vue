<template>
  <div class="infinite-picker">
    <van-picker
      title="标题"
      show-toolbar
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />
  </div>
</template>

<script>
import { Picker } from 'vant';
import { Toast } from 'vant';
import 'vant/lib/picker/style'

export default {
  name: 'InfinitePicker',
  components: {
    Picker,
    Toast
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
      columns: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
    };
  },
  methods: {
    onConfirm (value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange (picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel () {
      Toast('取消');
    },
  }
}
</script>
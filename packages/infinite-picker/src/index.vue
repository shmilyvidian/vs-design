<template>
  <div class="infinite-picker">
    <Picker
      :title="title"
      show-toolbar
      :showToolbar="showToolbar"
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
      :loading="loading"
      :defaultIndex="defaultIndex"
    />
  </div>
</template>

<script>
import Toast from 'vant/lib/toast';
import Picker from 'vant/lib/picker'

export default {
  name: 'InfinitePicker',
  components: {
    Picker,
    Toast
  },
  props: {
    // 对象数组，配置每一列显示的数据
    columns: {
      type: Array,
      default: []
    },
    // 是否显示顶部栏
    showToolbar: {
      type: Boolean,
      default: false
    },
    // 顶部栏标题
    title: {
      type: String,
      default: '标题'
    },
    // 是否显示加载状态
    loading:{
      type: Boolean,
      default:  false
    },
    // 单列选择器的默认选中项索引 多列选择器请参考下方的 Columns 配置
    defaultIndex:{
      type: Number,
      default:  0
    }

  },
  data () {
    return {
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
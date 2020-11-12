
<template>
  <el-row>
    <infinite-pull-refresh
      v-model="isLoading"
      @onRefresh="onRefresh"
    ></infinite-pull-refresh>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
    };
  },
  methods: {
    onRefresh () {
      this.isLoading = false;
    },
  },
};
</script>
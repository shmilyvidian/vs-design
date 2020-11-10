<template>
  <div>
    <el-row>
      <infinite-header-nav class="header-nav">
        <div slot="leftItem">
          返回
        </div>
        <div slot="centerItem">
          {{ headerTitle }}
        </div>
        <div slot="rightItem">
          提交
        </div>
      </infinite-header-nav>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      headerTitle: 'title'
    };
  }
};
</script>

<style></style>

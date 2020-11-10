<template>
  <div>
    <infinite-loading
      type="spinner"
      color="orange"
      size="60"
      loadingText="测试文案"
    ></infinite-loading>
  </div>
</template>
<script>
export default {
  methods: {},
  data() {
    return {
      currentDate: "2020/06/05",
      dataStartTime: "2019/01/23",
      dataEndTime: "2020/11/03",
      pickerRadius: "5px"
    };
  }
};
</script>

<style></style>

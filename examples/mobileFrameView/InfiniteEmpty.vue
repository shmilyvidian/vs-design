<template>
  <div>
    <el-row>
      <infinite-empty
        imageType="network"
        imageSize="100"
        description="这是empty组件2"
      ></infinite-empty>
    </el-row>
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

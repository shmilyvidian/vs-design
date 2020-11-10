<template>
  <div>
    <el-row>
      <infinite-datetime-picker
        v-model="currentDate"
        :picker-radius="pickerRadius"
        :start-time="dataStartTime"
        :end-time="dataEndTime"
      />
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
      pickerRadius: "5px",
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h3 class="infinite-mobile-h3">基础用法</h3>
    <el-row>
      <infinite-empty>
      </infinite-empty>
    </el-row>
    <h3 class="infinite-mobile-h3">图片类型</h3>
    <el-row>
      <infinite-empty
        imageType="network"
        imageSize="100"
        description="network类型"
      >
      </infinite-empty>
    </el-row>
    <el-row>
      <infinite-empty
        imageType="error"
        imageSize="100"
        description="error类型"
      >
      </infinite-empty>
    </el-row>
    <el-row>
      <infinite-empty
        imageType="search"
        imageSize="100"
        description="search类型"
      >
      </infinite-empty>
    </el-row>
    <el-row>
      <infinite-empty
        imageType="https://img.yzcdn.cn/vant/custom-empty-image.png"
        imageSize="100"
        description="通过url自定义图片"
      >
      </infinite-empty>
    </el-row>
    <h3 class="infinite-mobile-h3">自定义底部文案</h3>
    <el-row>
      <infinite-empty
        imageType="search"
        imageSize="100"
        description="自定义内容"
      >
      </infinite-empty>
    </el-row>
     <el-row>
      <infinite-empty
        imageType="search"
        imageSize="100"
        description="通过插槽传入内容"
      >
      <infinite-loading>
      </infinite-loading>
      </infinite-empty>
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

<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <infinite-empty></infinite-empty>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">图片类型</h2>
      <infinite-empty
        imageType="noNetwork"
        imageSize="120px"
        description="network类型"
        :insertStyle="insertStyle"
      >
      </infinite-empty>
    </el-row>
    <el-row>
      <infinite-empty
        imageType="noMessage"
        description="noMessage类型">
      </infinite-empty>
    </el-row>
     <el-row>
      <infinite-empty
        imageType="noFinish"
        description="noFinish类型"
      >
      </infinite-empty>
    </el-row>
     <el-row>
      <infinite-empty
        imageType="noTask"
        description="noTask类型"
      >
      </infinite-empty>
    </el-row>
     <el-row>
      <infinite-empty
        imageType="noUpdate"
        description="noUpdate类型"
      >
      </infinite-empty>
    </el-row>
    <el-row>
      <infinite-empty
        imageType="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="通过url自定义图片"
      >
      </infinite-empty>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义图片大小</h2>
      <infinite-empty
        imageType="noNetwork"
        imageSize="60px"
        description="小图片"
      >
      </infinite-empty>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义底部文案</h2>
      <infinite-empty
        imageType="noNetwork"
        description="自定义内容"
      >
      <h3>this is Title</h3>
      </infinite-empty>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {},
  data () {
    return {
      insertStyle: {
        container:{
          background: '#212227',
          paddingTop: '16px'
        },
        description: {
          fontSize: '18px',
          color: '#19eff1',
          paddingTop: '10px'
        }
      }
    }
  }
}
</script>

<style></style>

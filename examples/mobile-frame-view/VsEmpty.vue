<template>
  <div>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">基础用法</h2>
      <vs-empty/>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">图片类型</h2>
      <vs-empty
        imageType="noNetwork"
        imageSize="120px"
        description="network类型"
      >
      </vs-empty>
    </el-row>
    <el-row>
      <vs-empty
        imageType="noMessage"
        description="noMessage类型">
      </vs-empty>
    </el-row>
     <el-row>
      <vs-empty
        imageType="noFinish"
        description="noFinish类型"
      >
      </vs-empty>
    </el-row>
     <el-row>
      <vs-empty
        imageType="noTask"
        description="noTask类型"
      >
      </vs-empty>
    </el-row>
     <el-row>
      <vs-empty
        imageType="noUpdate"
        description="noUpdate类型"
      >
      </vs-empty>
    </el-row>
    <el-row>
      <vs-empty
        imageType="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="通过url自定义图片"
      >
      </vs-empty>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义图片大小</h2>
      <vs-empty
        imageType="noNetwork"
        imageSize="60px"
        description="小图片"
      >
      </vs-empty>
    </el-row>
    <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义底部文案</h2>
      <vs-empty
        imageType="noNetwork"
        description="自定义内容"
      >
      <h3>this is Title</h3>
      </vs-empty>
    </el-row>
     <el-row class="infinite-doc-demo-block-row">
      <h2 class="infinite-doc-demo-block-title">自定义样式</h2>
      <vs-empty
        imageType="noNetwork"
        imageSize="120px"
        description="network类型"
        :insertStyle="insertStyle"
      >
      </vs-empty>
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

<!-- 资产信息 -->
<template>
  <div class="inventorInfo">
    <div class="infoTitle">
      <p>资产信息</p>
      <span>待盘点</span>
    </div>
    <div class="infoContent">
      <DetailItem title="名称" content="笔记本电脑"></DetailItem>
      <DetailItem title="品牌" content="苹果"></DetailItem>
    </div>
  </div>
</template>

<script>
import DetailItem from '@/components/DetailItem'
export default {
  name: 'InventorInfo',
  components: {
    DetailItem
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .inventorInfo{
    width: 100%;
    height: 100%;
    .infoTitle{
      font-size: .4rem;
      position: relative;
      p{
        padding-left: .16rem;
        box-sizing: border-box;
        position: relative;
        letter-spacing: .02rem;
        &:before{
          content: '';
          position: absolute;
          left: -.06rem;
          top: 50%;
          transform: translateY(-50%);
          width: .04rem;
          height: .36rem;
          background: $BasicColor;
        }
      }
      span{
        position: absolute;
        background-color: $BasicColor;
        color: $fontColorWhirt;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: .28rem;
        padding: .05rem .1rem;
        border-radius: .6rem;
      }
    }
    .infoContent{
      margin-top: .1rem;
    }
  }
</style>

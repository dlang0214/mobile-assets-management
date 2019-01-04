<!-- 资产属性 -->
<template>
  <div class="inventorAttribute">
    <div class="infoTitle">
      <p>资产属性</p>
      <span v-if="false">待盘点</span>
    </div>
    <div class="infoContent">
      <DetailItem title="公司主体" content="北京柯莱特技术有限公司"></DetailItem>
      <DetailItem title="资产类别" content="10-固定资产-12-计算机及电子设备"></DetailItem>
    </div>
  </div>
</template>

<script>
import DetailItem from '@/components/DetailItem'
export default {
  name: 'InventorAttribute',
  components: {
    DetailItem
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .inventorAttribute{
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

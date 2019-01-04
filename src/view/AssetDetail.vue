<!-- 资产详情 -->
<template>
  <div class="assetDetail">
    <!-- 页面头部 -->
    <div class="navaBarBox">
      <NaveBar :colors="colors">
        <div class="naveBarContent">
          资产详情
        </div>
      </NaveBar>
    </div>
    <div class="detailContent">
      <!-- 资产信息 -->
      <div class="inventorInfoBox">
        <InventorInfo></InventorInfo>
      </div>
      <!-- 资产属性 -->
      <div class="inventorAttributeBox">
        <InventorAttribute></InventorAttribute>
      </div>
      <!-- 操作记录 -->
      <div class="operatingRecordBox">
        <OperatingRecord></OperatingRecord>
      </div>
      <!-- 备注 -->
      <div class="remarkBox">
        <AddRemork></AddRemork>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="footerBtn">
      <FooterBtn></FooterBtn>
    </div>
  </div>
</template>

<script>
import NaveBar from '@/components/NaveBar'
import FooterBtn from '@/components/FooterBtn'
import InventorInfo from '@/view/Detail/InventorInfo'
import InventorAttribute from '@/view/Detail/InventorAttribute'
import OperatingRecord from '@/view/Detail/OperatingRecord'
import AddRemork from '@/view/Detail/AddRemork'
export default {
  name: 'AssetDetail',
  data () {
    return {
      colors: '#1989fa'
    }
  },
  components: {
    NaveBar,
    FooterBtn,
    InventorInfo,
    InventorAttribute,
    OperatingRecord,
    AddRemork
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .assetDetail{
    width: 100%;
    height: 100%;
    .navaBarBox {
      box-sizing: border-box;
      width: 100%;
      height: 1rem;
      background: #fff;
      .naveBarContent{
        font-size: .4rem;
      }
    }
    .detailContent{
      width: 100%;
      height: calc(100% - 1rem);
      overflow-y: scroll;
      padding: .2rem .3rem;
      padding-bottom: 1.4rem;
      box-sizing: border-box;
      div{
        background-color: $BackgroundWhirt;
        border-radius: .12rem;
        padding: .15rem;
        padding-top: .05rem;
        box-sizing: border-box;
        margin-top: .2rem;
      }
    }
    .footerBtn{
      width: 100%;
      height: 1.2rem;
      position: fixed;
      left: 0;
      bottom: 0;
      box-shadow:0px -3px 15px #d5d5d5;
      z-index: 8;
      background: #fff;
    }
  }
</style>

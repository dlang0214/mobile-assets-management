<!-- 添加资产按钮 -->
<template>
  <div class="addInventor">
    <router-link to="/addAsset">
      <span>添加</span>
      <span>资产</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AddInventor'
}
</script>

<style scoped lang="scss" type="text/scss">
  .addInventor{
    width: 100%;
    height: 100%;
    background: $BasicColor;
    border-radius: 100%;
    a{
      width: 100%;
      height: 100%;
      background: $BasicColor;
      border-radius: 100%;
      display: block;
      color: $fontColorWhirt;
      font-size: .24rem;
      text-align: center;
      line-height: .3rem;
      box-shadow: 0px 6px 15px #8695B8;
      padding-top: .2rem;
      box-sizing: border-box;
      letter-spacing: .04rem;
      span{
        display: block;
      }
    }
  }
</style>

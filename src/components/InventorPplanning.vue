<!-- 盘点计划 -->
<template>
  <div class="inventoryPlanning">
    <div class="planTitle">
      <div class="checkBox">
        <van-checkbox v-model="inventoryInfo.checked"></van-checkbox>
      </div>
      <span>{{inventoryInfo.type}}</span>
      <span>{{inventoryInfo.brand}}</span>
    </div>
    <div class="content">
      <p class="inventoryCont">
        {{inventoryInfo.model}}
      </p>
      <p class="tagNum">
        <span>标签号：</span>
        <span>{{inventoryInfo.tagNum}}</span>
      </p>
      <p class="tagNum" v-if="inventoryInfo.characteristic !== ''">
        <span>特性值：</span>
        <span>{{inventoryInfo.characteristic}}</span>
      </p>
      <p class="SNNum" v-if="inventoryInfo.characteristic === ''">
        <span>S&nbsp;N&nbsp;码：</span>
        <span>{{inventoryInfo.SN}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventorPplanning',
  props: ['inventoryInfo'],
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .inventoryPlanning{
    width: 100%;
    font-size: .32rem;
    color: $InventorFontColor;
    padding: 0 .3rem .3rem;
    box-sizing: border-box;
    background: #fff;
    border-radius: .16rem;
    .planTitle{
      padding: .3rem 0;
      border-bottom: 1px solid #eee;
      font-size: .36rem;
      color: #333;
      .checkBox{
        float: left;
        margin-right: .3rem;
      }
      span:nth-of-type(1){
        margin-right: .1rem;
      }
    }
    .content{
      margin-top: .2rem;
      p{
        line-height: .56rem;
      }
    }
  }
</style>

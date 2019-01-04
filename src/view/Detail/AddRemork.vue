<!-- 添加备注 -->
<template>
  <div class="addRemork">
    <div class="infoTitle">
      <p>资产属性</p>
      <span v-if="false">待盘点</span>
    </div>
    <div class="infoContent">
      <Remork></Remork>
    </div>
  </div>
</template>

<script>
import Remork from '@/components/RremorkText'
export default {
  name: 'AddRemork',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Remork
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .addRemork{
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
      height: 2rem;
    }
  }
</style>

<template>
  <div class="operatingRecord">
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="操作记录" name="2">
        <Stepper></Stepper>
        <!--<div class="stepcont">-->
          <!---->
        <!--</div>-->
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import Stepper from '@/view/Detail/Stepper'
export default {
  name: 'OperatingRecord',
  data () {
    return {
      activeName: '2'
    }
  },
  components: {
    Stepper
  }
}
</script>

<style lang="scss">
  .operatingRecord{
    .van-cell:not(:last-child)::after{
      border: none;
    }
    .van-hairline--top-bottom::after{
      border: none;
    }
    .van-cell{
      padding: .3rem ;
      font-size: .4rem;
      color: #222;
      padding-top: 0;
      padding-bottom: 0;
    }
    .van-cell__title{
      position: relative;
      margin-left: -.06rem;
      &:before{
        content: '';
        position: absolute;
        left: -.22rem;
        top: 50%;
        transform: translateY(-50%);
        width: .04rem;
        height: .36rem;
        background: $BasicColor;
      }
    }
    .van-collapse-item__content{
      padding: .2rem .05rem;
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .operatingRecord{
    width: 100%;
    .stepcont{
      width: 100%;
    }
  }
</style>

<!-- 步骤条 -->
<template>
  <div class="stepper">
    <div class="stepperContent" v-for="(item, index) in list" :key="item">
      <div class="stepTime" :class="{'firstStep': index === 0}">
        <p class="day">2018-10-20</p>
        <p class="time">10:12:39</p>
      </div>
      <div class="content" :class="{'noLine': index === list.length - 1, 'firstStep': index === 0}">
        <p class="stepStatus">
          <span>确认</span>
          <span>盘平</span>
        </p>
        <p class="stepOnwer">
          <span>刘英（liuying）</span>
        </p>
        <p class="stepRemark">
          <span>备注：</span><span>我已确认完毕，还有什么需要补充的请通知我</span>
        </p>
        <i class="icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stepper',
  data () {
    return {
      active: 1,
      list: [1, 2, 3, 4]
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .stepper{
    width: 100%;
    .stepperContent{
      width: 100%;
      position: relative;
      .stepTime{
        width: 1.7rem;
        position: absolute;
        top: 0;
        left: 0;
        text-align: right;
      }
      .content{
        width: 100%;
        padding-left: 2.3rem;
        padding-bottom: .2rem;
        box-sizing: border-box;
        text-align: left;
        position: relative;
        .stepStatus{
          margin-bottom: .1rem;
          span:nth-of-type(2){
            font-size: .24rem;
            float: right;
            display: inline-block;
            padding: 0rem .14rem;
            color: #fff;
            background: $InventorTypeBgc;
            border-radius: .2rem;
            box-shadow:0px 3px 10px #878787;
          }
        }
        .stepOnwer{
          margin-bottom: .1rem;
        }
        .stepRemark{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .icon{
          display: block;
          content: '';
          width: .08rem;
          height: .08rem;
          background: #fff;
          border-radius: 50%;
          position: absolute;
          left: 1.85rem;
          top: .35rem;
          z-index: 2;
          border: .06rem solid #999;
        }
        :after{
          content: '';
          position: absolute;
          width: .03rem;
          height: 100%;
          background: #ebebeb;
          left: 1.94rem;
          top: .36rem;
        }
      }
      .noLine{
        :after{
          content: '';
          width: .03rem;
          height: 0;
        }
      }
      .firstStep{
        color: $BasicColor;
        .icon{
          background: #fff;
          border: .06rem solid $BasicColor;
        }
      }
    }
  }
</style>

<template>
  <div class="footerBtn">
    <div class="selectNum">
      <van-checkbox v-model="checked">
        全选
        <span class="choseNum">2</span>
        <span class="totalNum">/</span>
        <span class="totalNum">5</span>
      </van-checkbox>
    </div>
    <div class="btnBox">
      <!--<van-button round class="noSubmit affirm">取消</van-button>-->
      <!--<van-button round class="affirm">提交</van-button>-->
      <van-button round class="noAffirm" @click="notConfirm">无法确认</van-button>
      <van-button round class="affirm">确认</van-button>
    </div>
    <ConnotConfirmDialog
      v-if="isShowConfirmDialog"
      :isShowConfirmDialog="isShowConfirmDialog"
    ></ConnotConfirmDialog>
  </div>
</template>

<script>
import ConnotConfirmDialog from '@/components/Dialog/ConnotConfirmDialog'
export default {
  name: 'FooterBtn',
  data () {
    return {
      checked: false,
      isShowConfirmDialog: false
    }
  },
  methods: {
    notConfirm () {
      this.isShowConfirmDialog = true
    }
  },
  components: {
    ConnotConfirmDialog
  }
}
</script>

<style lang="scss">
  .footerBtn{
    .van-checkbox__icon .van-icon{
    }
    .affirm.van-button--normal{
      padding: 0 .7rem;
    }
    .affirm.van-button--default{
      background: $BasicColor;
      color: $fontColorWhirt;
    }
    .noAffirm.van-button--normal{
      padding: 0 .4rem;
    }
    .noAffirm.van-button--default{
      background: #fff;
      color: $fontColorGrey;
      border: 1px solid #ddd;
    }
    .noSubmit.van-button--default{
      background: #fff;
      color: $fontColorGrey;
      border: 1px solid #ddd;
    }
    .van-button{
      height: .76rem;
      line-height: .7rem;
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .footerBtn{
    width: 100%;
    height: 100%;
    font-size: .32rem;
    padding: 0rem .3rem;
    box-sizing: border-box;
    position: relative;
    .selectNum{
      position: absolute;
      left: 0;
      top: .15rem;
      width: 40%;
      height: 100%;
      line-height: .85rem;
      padding-left: .2rem;
      box-sizing: border-box;
    }
    .choseNum{
      color: $BasicColor;
    }
    .btnBox{
      width: 65%;
      height: 100%;
      position: absolute;
      top: 0rem;
      right: -.5rem;
      color: #000;
      padding: .2rem;
      .affirm{
        margin-left: .3rem;
      }
      .noSubmit{
        margin: 0;
      }
    }
  }
</style>

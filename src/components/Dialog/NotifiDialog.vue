<!-- 通知消息弹框 -->
<template>
  <div class="notifiDialog">
    <van-dialog
      v-model="isShow"
      :before-close="beforeClose"
    >
      <div class="notifiBox">
        <div class="dialogClose">
          <van-icon name="cross" size=".44rem" class="closeBtn" color="#bfbfbf" @click="beforeClose"/>
        </div>
        <div class="dialogTitle">
          <van-icon name="volume" size=".36rem" color="#bfbfbf" class="volumIcon"/>
          <span>公告</span>
        </div>
        <div class="dialogContent">
          <p>{{notification.text}}！！</p>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  props: ['isShownotifiDialog', 'notification'],
  name: 'NotifiDialog',
  data () {
    return {
      isShow: false
    }
  },
  created () {
    this.isShow = this.isShownotifiDialog
  },
  methods: {
    beforeClose () {
      console.log('关闭弹框')
      this.$emit('closeNotifiDialog')
    }
  }
}
</script>

<style lang="scss">
  .notifiDialog{
    .van-button--default{
      display: none;
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .notifiDialog{
    .notifiBox{
      padding: .3rem .3rem;
      .dialogClose{
        width: 100%;
        height: .6rem;
        .closeBtn{
          float: right;
        }
      }
      .dialogTitle{
        width: 100%;
        height: .6rem;
        line-height: .6rem;
        .volumIcon{
          float: left;
        }
        span{
          float: left;
          margin-left: .2rem;
          font-size: .32rem;
          margin-top: -.14rem;
          letter-spacing: 2px;
        }
      }
      .dialogContent{
        p{
          color: #ed6a0c;
          padding: 0 .1rem;
          line-height: .5rem;
        }
      }
    }
  }
</style>

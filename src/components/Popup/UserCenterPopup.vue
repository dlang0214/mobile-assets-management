<!-- 用户按钮弹框 -->
<template>
  <div class="uesrCenterBtn">
    <van-popup
      v-model="show"
      @click-overlay="closePopup"
      transition="van-bounce-up"
      position="top">
      <div class="userCenterBtnBox">
        <div class="fixPassword" @click="fixPassword">修改密码</div>
        <div class="bindEmail" @click="bindEmail">绑定邮箱</div>
        <div class="logout" @click="logout">退出</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'UserCenterPopup',
  props: ['isShowUserCenterPopup'],
  data () {
    return {
    }
  },
  created () {
    this.show = this.isShowUserCenterPopup
  },
  methods: {
    closePopup () {
      this.$emit('closeUserCenterPopup')
    },
    fixPassword () {
      console.log('修改密码')
      this.closePopup()
    },
    bindEmail () {
      console.log('绑定邮箱')
      this.closePopup()
    },
    logout () {
      console.log('退出')
      this.closePopup()
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .userCenterBtnBox{
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
      flex: 1;
      width: 1.6rem;
      margin: .2rem auto;
      border-radius: .06rem;
      text-align: center;
      line-height: .6rem;
      font-size: .28rem;
      background: $BasicColor;
      color: $fontColorWhirt;
    }
  }
</style>

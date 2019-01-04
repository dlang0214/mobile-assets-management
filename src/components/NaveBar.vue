<!-- 页面头部导航栏 -->
<template>
  <div class="naveBar">
    <div class="barBox">
      <van-icon name="arrow-left" size=".55rem" :color="colors"/>
      <van-icon name="cross" size=".55rem" :color="colors" class="crossBtn"/>
      <div class="naveBarContent">
        <slot></slot>
        <!--<div>个人盘点</div>-->
      </div>
      <div class="userCenter" @click="isShowUserCenterPopup = !isShowUserCenterPopup">
        <van-icon name="manager" :color="colors" size=".48rem"/>
      </div>
    </div>
    <UserCenterPopup
      v-if = "isShowUserCenterPopup"
      :isShowUserCenterPopup = 'isShowUserCenterPopup'
      @closeUserCenterPopup = 'closeUserCenterPopup'
    >
    </UserCenterPopup>
  </div>
</template>

<script>
import UserCenterPopup from '@/components/Popup/UserCenterPopup'
export default {
  props: {
    colors: {
      default: '#fff'
    }
  },
  name: 'NaveBar',
  data () {
    return {
      isShowUserCenterPopup: false
    }
  },
  methods: {
    closeUserCenterPopup () {
      this.isShowUserCenterPopup = false
    }
  },
  components: {
    UserCenterPopup
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .naveBar{
    width: 100%;
    height: 100%;
    .barBox{
      width: 100%;
      height: 100%;
      line-height: 1rem;
      position: relative;
      .crossBtn{
        margin-left: .2rem;
      }
      .naveBarContent{
        width: 100%;
        height: 100%;
        text-align: center;
        letter-spacing: 2px;
        position: absolute;
        line-height: .8rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      .userCenter{
        width: .66rem;
        position: absolute;
        right: .1rem;
        top: 50%;
        text-align: center;
        transform: translateY(-50%);
        z-index: 9;
        margin-top: -.06rem;
      }
    }
  }
</style>

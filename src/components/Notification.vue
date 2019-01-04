<!-- 通知消息提示 -->
<template>
  <div class="noticeBar" v-if="isShowNotifiMesg">
    <van-notice-bar mode="closeable" @click="showNotifi"
      :text="notification.text"
      left-icon="volume-o"
    />
    <NotifiDialog
      v-if = "isShownotifiDialog"
      :isShownotifiDialog = "isShownotifiDialog"
      :notification = "notification"
      @closeNotifiDialog="closeNotifiDialog"
    >
    </NotifiDialog>
  </div>
</template>

<script>
import NotifiDialog from '@/components/Dialog/NotifiDialog'
export default {
  name: 'NoticeBar',
  props: ['notification'],
  data () {
    return {
      isShownotifiDialog: false,
      isShowNotifiMesg: true
    }
  },
  methods: {
    showNotifi (e) {
      this.isShownotifiDialog = true
    },
    closeNotifiDialog () {
      this.isShownotifiDialog = false
      this.isShowNotifiMesg = false
      this.$emit('closeNotifiDialog')
    }
  },
  components: {
    NotifiDialog
  }
}
</script>

<style lang="scss">
  .noticeBar{
    .van-notice-bar{
      border-radius: .06rem;
      padding-left: .15rem;
      box-sizing: border-box;
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .noticeBar{
    width: 100%;
    height: 100%;
    border-radius: .06rem;
  }
</style>

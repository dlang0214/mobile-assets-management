<template>
  <div class="connotConfirm">
    <van-dialog
      title="无法确认资产"
      v-model="show"
      show-cancel-button
      :before-close="beforeClose"
    >
      <div class="dialogCont">
        <Remork></Remork>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import Remork from '@/components/RremorkText'
export default {
  props: ['isShowConfirmDialog'],
  name: 'ConnotConfirmDialog',
  data () {
    return {
      show: false
    }
  },
  created () {
    this.show = this.isShowConfirmDialog
  },
  methods: {
    beforeClose (action, done) {
      if (action === 'confirm') {
      } else {
        done()
      }
    }
  },
  components: {
    Remork
  }
}
</script>

<style lang="scss">
  .connotConfirm{
    .van-dialog__header{
      padding-top: .2rem;
      padding-bottom: .2rem;
    }
  }

</style>
<style scoped lang="scss" type="text/scss">
  .connotConfirm{
    width: 100%;
    height: 100%;
    .dialogCont{
      width: 100%;
     height: 2rem;
    }
  }
</style>

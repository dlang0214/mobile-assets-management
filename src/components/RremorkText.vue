<template>
  <div class="remorkText">
    <textarea cols="30" rows="10" placeholder="添加备注" maxlength="100" @input="calculate" v-model="remork"></textarea>
    <span class="num">{{fontNum}} / 100</span>
  </div>
</template>

<script>
export default {
  name: 'RremorkText',
  data () {
    return {
      remork: '',
      fontNum: 0
    }
  },
  methods: {
    calculate () {
      this.fontNum = this.remork.length
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .remorkText{
    width: 100%;
    height: 100%;
    position: relative;
    textarea{
      width: 100%;
      height: 100%;
      resize: none;
      font-size: .28rem;
      padding: .1rem;
      padding-bottom: .3rem;
      box-sizing: border-box;
      letter-spacing: .02rem;
      background: $textareaBgc;
      border: 1px solid $textareaBorder;
      border-radius: .06rem;
      color: $InventorFontColor;
    }
    .num{
      position: absolute;
      bottom: .05rem;
      right: .1rem;
      font-size: .24rem;
      color: $fontColorGrey;
    }
  }
</style>

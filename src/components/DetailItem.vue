<!-- 详情组件 -->
<template>
  <div class="detailItem">
    <span class="titles">{{title}}</span>
    <p class="cont" v-text="getContent(content)"></p>
  </div>
</template>

<script>
export default {
  props: ['title', 'content'],
  name: 'DetailItem',
  methods: {
    getContent (cont) {
      cont = (cont === '' || cont === undefined) ? '--' : cont
      return cont
    }
  }
}
</script>

<style scoped lang="scss" type="text/scss">
  .detailItem{
    width: 100%;
    padding: .26rem .1rem;
    padding-left: 0;
    font-size: .34rem;
    box-sizing: border-box;
    clear: both;
    border-bottom: .02rem solid $BorderColor;
    .titles{
      float: left;
      color: $InventorTitleFontColor;
    }
    .cont{
      text-align: right;
      width: 100%;
      padding-left: 2rem;
      box-sizing: border-box;
      color: $InventorFontColor;
      letter-spacing: .02rem;
    }
  }
</style>

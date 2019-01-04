<!-- 页面路由导航搜索 -->
<template>
  <div class="tagSearch">
    <!-- tab -->
    <van-tabs @click="choseTable" v-show="!isShowSearch">
      <van-tab title="待盘点"></van-tab>
      <van-tab title="已盘点"></van-tab>
    </van-tabs>
    <div class="searBtn" @click="isShowSearch = true" v-show="!isShowSearch">
      <van-icon
        name="search"
        class="searchIcon"
        size=".44rem"
        color="#fff"/>
    </div>
    <!-- 搜索 -->
    <div class="searchBox" v-show="isShowSearch">
      <div class="searchInput">
        <van-search placeholder="根据关键字搜索资产信息" v-model="searchCont" />
      </div>
      <div class="closeBtn" @click="isShowSearch = false">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagSearch',
  data () {
    return {
      searchCont: '',
      isShowSearch: false,
      routePath: ''
    }
  },
  methods: {
    getRoutePath () {
      this.routePath = this.$route.path
    },
    choseTable (index) {
      if (this.routePath.includes('personal')) {
        index === 0 ? this.$router.push('/personal/await') : this.$router.push('/personal/have')
      } else {
        index === 0 ? this.$router.push('/collaborative/await') : this.$router.push('/collaborative/have')
      }
    }
  },
  created () {
    this.getRoutePath()
  },
  watch: {
    '$route' () {
      this.getRoutePath()
    }
  }
}
</script>

<style lang="scss">
  .tagSearch{
    .van-tabs__nav{
      background-color: transparent;
    }
    .van-tab{
      background-color: transparent;
      font-size: .36rem;
      color: #cbd8db;
      letter-spacing: 2px;
    }
    .van-hairline--top-bottom::after{
      border: 0px;
    }
    .van-tabs__line{
      background-color: #fff;
    }
    .van-ellipsis{
    }
    .van-tab--active{
      color: #fff;
      font-weight: normal;
    }
    .van-search{
      border-radius: 3px;
      width: 100%;
    }
  }
</style>
<style scoped lang="scss" type="text/scss">
  .tagSearch{
    width: 100%;
    height: 100%;
    position: relative;
    .searBtn{
      position: absolute;
      top: .08rem;
      right: .05rem;
      transform: translateX(-50%);
      z-index: 99;
      .searchIcon{
        display: inline-block;
        margin-top: .03rem;
      }
    }
    .searchBox{
      width: 100%;
      height: 100%;
      padding-top: .1rem;
      box-sizing: border-box;
      div{
        float: left;
        font-size: .36rem;
      }
    }
    .searchInput{
      width: 85%;
      height: 100%;
      border-radius: .1rem;
    }
    .closeBtn{
      letter-spacing: .06rem;
      margin-left: .2rem;
      color: #fff;
      margin-top: .18em;
    }
  }
</style>
